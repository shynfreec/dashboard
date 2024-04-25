"use client";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

export default function SettingPage() {
  return (
    <Tabs defaultValue="overview">
      <div className="flex items-center px-4 py-2">
        <TabsList className="mr-auto">
          <TabsTrigger
            value="overview"
            className="text-zinc-600 dark:text-zinc-200"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="setting"
            className="text-zinc-600 dark:text-zinc-200"
          >
            Setting
          </TabsTrigger>
        </TabsList>
      </div>
      <Separator />

      <TabsContent value="setting" className="m-0">
        <div className="px-4">Setting Tab</div>
      </TabsContent>
    </Tabs>
  );
}
