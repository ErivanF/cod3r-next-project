"use client";
import Input from "@/components/Input";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Input
        title="nome"
        id="name"
        value={value}
        handleChange={(newValue: string) => {
          setValue(newValue);
        }}
      />
    </div>
  );
}
