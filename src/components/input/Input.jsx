export const Input = ( { onChange, txt, type, name, value } ) => {
    return (
      <input type={type} placeholder={txt} name={name} value={value} onChange={(event) => onChange(event)} className="w-full mb-2 rounded pl-3 h-7"/>
    )
  }
  