import { ReactNode } from "react";

interface props {
  children: ReactNode;
  handleClick: () => void;
  testId?: string;
  gray?: boolean;
}
export default function Button({ children, handleClick, gray, testId }: props) {
  return (
    <button
      data-testid={testId}
      className={
        (gray ? "bg-gray-700" : "bg-violet-900") + " p-2 text-gray-100 rounded "
      }
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
}
