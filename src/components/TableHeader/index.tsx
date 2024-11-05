export default function TableHeader() {
  return (
    <div className="flex justify-stretch w-full">
      <div className="bg-violet-900 border-x-white grow text-center p-1 border-r-2 rounded-tl-md">
        Idade
      </div>
      <div className="bg-violet-900 border-x-white grow text-center p-1 border-r-2">
        Nome
      </div>
      <div className="bg-violet-900 border-x-white grow text-center p-1 border-r-2">
        Ações
      </div>
      <div className="bg-violet-900 border-x-white grow text-center p-1 rounded-tr-md ">
        ID
      </div>
    </div>
  );
}
