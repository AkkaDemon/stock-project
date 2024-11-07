import { Button } from "../../../components/button/Button";

export const Table = ({ data }) => {
  return (
    <table border={1} className="w-full mt-4 text-left table-auto">
      <thead>
      <tr>
            <th className="p-4 border-y bg-slate-50 ">Nombre</th>
            <th className="p-4 border-y bg-slate-50 ">Cantidad</th>
            <th className="p-4 border-y bg-slate-50 ">Num. Serie</th>
            <th className="p-4 border-y bg-slate-50 ">Categoria</th>
            <th className="p-4 border-y bg-slate-50 ">Última Act.</th>
            <th className="p-4 border-y bg-slate-50 ">Acción</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map( item =>  (
            <tr key={item.id}>
              <td className="p-4 border-b border-slate-200">{item.name}</td>
              <td className="p-4 border-b border-slate-200">{item.quantity}</td>
              <td className="p-4 border-b border-slate-200">{item.serialNumber}</td>
              <td className="p-4 border-b border-slate-200">{item.category}</td>
              <td className="p-4 border-b border-slate-200">{item.lastUpdateDate}</td>
              <td className="flex space-x-2 place-content-center p-4 border-b border-slate-200">
                <Button txt="Editar"/>
                <Button txt="Borrar"/>
              </td>
          </tr>
        ))}
        
      </tbody>
  </table>)
};
