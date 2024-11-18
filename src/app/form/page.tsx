"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import User from "@/Core/UserModel";
import UserCollection from "@/db/UserCollection";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const router = useRouter();
  const repo = new UserCollection();
  return (
    <div className="flex flex-col items-center">
      <Input
        id="NameInput"
        title="Nome"
        type="text"
        value={name}
        handleChange={(newName) => {
          setName(newName);
        }}
      />
      <Input
        id="AgeInput"
        title="Idade"
        type="number"
        value={age}
        handleChange={(newAge) => {
          setAge(newAge);
        }}
      />
      <Button
        testId="register"
        handleClick={() => {
          const user = new User(name, parseInt(age));
          repo.save(user).then(() => {
            router.push("/");
          });
        }}
      >
        Registrar
      </Button>
    </div>
  );
}
