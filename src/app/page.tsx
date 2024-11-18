"use client";

import TableHeader from "@/components/TableHeader";
import TableLine from "@/components/TableLine";
import User from "@/Core/UserModel";
import UserCollection from "@/db/UserCollection";
import { useEffect, useState } from "react";
const repo = new UserCollection();
export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    repo.getAll().then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <table className="w-full">
      <TableHeader />
      {users.map((user) => (
        <TableLine key={user.id} user={user} />
      ))}
    </table>
  );
}
