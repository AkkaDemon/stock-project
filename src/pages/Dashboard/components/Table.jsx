export const Table = ({ data }) => {
  return (
    <table border={1}>
      <thead>
      <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Num. Serie</th>
            <th>Categoria</th>
            <th>LastUpdateDate</th>
        </tr>
      </thead>
      <tbody>
        {data.map( item =>  (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.serialNumber}</td>
              <td>{item.category}</td>
              <td>{item.lastUpdateDate}</td>
          </tr>
        ))}
        
      </tbody>
  </table>)
};
