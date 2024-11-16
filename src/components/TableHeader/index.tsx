export default function TableHeader() {
  return (
    <thead className="flex flex-col">
      <tr className="flex justify-stretch w-full">
        <td className="bg-violet-900 border-x-white basis-1 grow text-center p-1 border-r-2 rounded-tl-md">
          ID
        </td>
        <td className="bg-violet-900 border-x-white basis-1 grow text-center p-1 border-r-2">
          Nome
        </td>
        <td className="bg-violet-900 border-x-white basis-1 grow text-center p-1 border-r-2">
          Idade
        </td>
        <td className="bg-violet-900 border-x-white basis-1 grow text-center p-1 rounded-tr-md ">
          Ações
        </td>
      </tr>
    </thead>
  );
}
