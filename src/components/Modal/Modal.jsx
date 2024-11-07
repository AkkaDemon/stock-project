import { Button } from "../button/Button"

export const Modal = ( { active,  onClose, children} ) => {



    
  return (
    <dialog open={active} className="absolute z-10 inset-0 bg-zinc-100 w-1/6 pt-10 px-4 pb-4">

        {children}
        <Button action={() => onClose(false)} type="button" txt="X" className="absolute top-2 right-4 bg-transparent text-black p-0 hover:bg-transparent hover:text-gray-600 transition-colors"/>
          
    </dialog>
  )
}
