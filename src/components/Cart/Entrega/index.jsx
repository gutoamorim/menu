import { FaSearch } from "react-icons/fa";

export default function Entrega() {
  return (
    <div className="grid grid-cols-12 space-y-4 gap-4">
      <div className="col-span-4">
        <label className="block">CEP:</label>
        <div className="flex">
          <input
            type="text"
            className="px-6 py-3 pr-16 rounded-lg shadow-lg outline-none"
          />
          <a className="bg-yellow-400 text-white p-4 rounded-lg cursor-pointer shadow-lg -ml-12">
            <FaSearch />
          </a>
        </div>
      </div>
      <div className="col-span-8"></div>
      <div className="col-span-6">
        <label className="block">Endereço:</label>
        <input
          type="text"
          className="px-6 py-3 pr-16 rounded-lg shadow-lg outline-none w-full"
        />
      </div>
      <div className="col-span-4">
        <label className="block">Bairro:</label>
        <input
          type="text"
          className="px-6 py-3 pr-16 rounded-lg shadow-lg outline-none w-full"
        />
      </div>
      <div className="col-span-2">
        <label className="block">Numero:</label>
        <input
          type="text"
          className="px-6 py-3 pr-16 rounded-lg shadow-lg outline-none w-full"
        />
      </div>

      <div className="col-span-6">
        <label className="block">Cidade</label>
        <input
          type="text"
          className="px-6 py-3 pr-16 rounded-lg shadow-lg outline-none w-full"
        />
      </div>
      <div className="col-span-4">
        <label className="block">Complemento:</label>
        <input
          type="text"
          className="px-6 py-3 pr-16 rounded-lg shadow-lg outline-none w-full"
        />
      </div>
      <div className="col-span-2">
        <label className="block">UF:</label>
        <select name="" id="" className="w-full h-12 shadow-lg rounded-lg">
          <option value="">...</option>
        </select>
      </div>
    </div>
  );
}
