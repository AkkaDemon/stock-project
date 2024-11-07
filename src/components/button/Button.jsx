

export const Button = ( { action, txt, type, className } ) => {

  const clases = `${className} bg-green-500 text-white font-bold py-1 px-1 rounded hover:bg-green-600 `

  return (
    <button type={type} onClick={() => action()} className={clases}>{txt}</button>
  )
}
