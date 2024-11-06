import { Button } from "../button/Button"

export const Modal = ( { active,  onClose, children} ) => {



    
  return (
    <dialog open={active} >

        {children}
        <Button action={() => onClose(false)} type="button" txt="Cerrar" />
    </dialog>
  )
}
