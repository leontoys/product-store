import { useEffect, useRef  } from "react";

const Modal = ({isOpen,onClose,children})=>{
    const dialogRef = useRef(null)

    //open or close dialog
    useEffect(()=>{
        isOpen ? dialogRef.current.showModal() : dialogRef.current.close()
    },[isOpen])

    return(
        <dialog ref={dialogRef} onCancel={onClose} onClose={onClose} className="update-dialog">
            {children}
        </dialog>
    )
}

export default Modal