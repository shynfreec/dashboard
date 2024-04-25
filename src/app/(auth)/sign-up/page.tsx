import { UserAuthLoginForm } from "@/components/auth/user-auth-login-form";

export default function SignInPage() {
  return (
    <section>
      <div className="container h-svh">
        <div className="flex flex-col items-center justify-center py-28">
          <h1 className="font-bold text-4xl mb-6">Sign Up</h1>
          <UserAuthLoginForm />
        </div>
      </div>
    </section>
  );
}
