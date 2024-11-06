"use client";

import TableHeader from "@/components/TableHeader";
import TableLine from "@/components/TableLine";
import User from "@/Core/UserModel";
const testUser = new User("User", 12345, "1q2w3e4r");
export default function Home() {
  return (
    <table className="min-h-screen flex flex-col p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <TableHeader />
      <TableLine user={testUser} />
    </table>
  );
}
