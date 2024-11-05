import { ReactNode } from "react";

interface props {
  children: ReactNode;
  handleClick: () => void;
}
export default function Button({ children, handleClick }: props) {
  return <button onClick={() => handleClick()}>{children}</button>;
}
