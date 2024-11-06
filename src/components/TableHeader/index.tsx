export default function TableHeader() {
  return (
    <thead className="flex flex-col">
      <tr className="flex justify-stretch w-full">
        <div className="bg-violet-900 border-x-white basis-1 grow text-center p-1 border-r-2 rounded-tl-md">
          ID
        </div>
        <div className="bg-violet-900 border-x-white basis-1 grow text-center p-1 border-r-2">
          Nome
        </div>
        <div className="bg-violet-900 border-x-white basis-1 grow text-center p-1 border-r-2">
          Idade
        </div>
        <div className="bg-violet-900 border-x-white basis-1 grow text-center p-1 rounded-tr-md ">
          Ações
        </div>
      </tr>
    </thead>
  );
}
