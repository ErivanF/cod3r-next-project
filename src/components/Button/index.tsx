import { ReactNode } from "react";

interface props {
  children: ReactNode;
  handleClick: () => void;
}
export default function Button({ children, handleClick }: props) {
  return (
    <button
      className="p-2 bg-violet-900 text-gray-100 rounded"
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
}
