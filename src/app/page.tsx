"use client";

import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button
        handleClick={() => {
          console.log("Bottão pressionado");
        }}
      >
        Botão de teste/
      </Button>
    </div>
  );
}
