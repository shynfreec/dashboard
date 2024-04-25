"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { AuthRequest, login } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Icons } from "../common/icon";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import CookieHandler, { TOKEN } from "@/helpers/cookie";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface UserAuthLoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z.string().min(8, {
    message: "Your password must be at least 8 characters.",
  }),
});

export function UserAuthLoginForm({
  className,
  ...props
}: UserAuthLoginFormProps) {
  const { replace } = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: (authData: AuthRequest) => login(authData),
    mutationKey: ["login"],
    onSuccess(data, variables, context) {
      CookieHandler.set(TOKEN, data?.accessToken);
      replace("/");
    },
    onError: (_error, variables, _context) => {
      form.reset({ ...variables });
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    loginMutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Card>
        <CardHeader className="space-y-1">
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="name@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={form.formState.isSubmitSuccessful}
                type="submit"
                className="w-full mt-9"
              >
                {form.formState.isSubmitSuccessful ? (
                  <Icons.spinner className="mr-2 h-4 w-full animate-spin" />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
