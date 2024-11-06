

export const Button = ( { action, txt, type } ) => {
  return (
    <button type={type} onClick={() => action()}>{txt}</button>
  )
}
