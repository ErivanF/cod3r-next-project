interface props {
  title: string;
  id: string;
  value: string;
  handleChange: (value: string) => void;
  type?: "text" | "number";
}
export default function Input({
  id,
  title,
  type = "text",
  value,
  handleChange,
}: props) {
  return (
    <div className="p-1 flex flex-col max-w-md m-2">
      <div className="text-gray-200 text-lg m-1">{title}</div>

      <input
        className=" text-black p-2 border-s-black rounded"
        data-testid={id}
        type={type}
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
}
