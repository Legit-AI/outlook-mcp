"use server";

import { SignInButton } from "@/components/SignInButton";

export default async function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold">Outlook MCP</h1>
        <p className="text-gray-600 text-lg">
          Remote model context protocol server for Microsoft Outlook.
        </p>
        <SignInButton />
      </div>
    </div>
  );
}
