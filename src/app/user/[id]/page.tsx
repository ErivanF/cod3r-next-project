"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import User from "@/Core/UserModel";
import UserCollection from "@/db/UserCollection";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const repo = new UserCollection();
export default function UserPage() {
  const id = useParams<{ id: string }>().id;
  const router = useRouter();
  const [user, setUser] = useState<User>(new User("", 0));
  useEffect(() => {
    repo.getOne(id).then((dbUser) => {
      setUser(dbUser);
    });
  }, [id]);
  return (
    <div className="flex flex-col items-center">
      <div className="text-lg text-center m-4">User ID: {user.id}</div>
      <Input
        id="NameInput"
        title="Nome"
        value={user.name}
        handleChange={(newName) => {
          setUser(new User(newName, user.age, user.id));
        }}
      />
      <Input
        id="AgeInput"
        title="Idade"
        type="number"
        value={String(user.age)}
        handleChange={(newAge) => {
          setUser(new User(user.name, parseInt(newAge), user.id));
        }}
      />
      <div className="flex justify-around w-64">
        <Button
          handleClick={() => {
            repo.update(id, { ...user }).then(() => {
              router.push("/");
            });
          }}
        >
          Atualizar
        </Button>
        <Button
          gray
          handleClick={() => {
            router.push("/");
          }}
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
}
