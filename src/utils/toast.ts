import { toast, ToastOptions as ToastOptions_TP, ToastPosition } from "react-toastify"

const toastOptions: ToastOptions_TP = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
}

export const notify = (type: 'success' | 'error' = 'success', msg?: string, position: ToastPosition = "top-right") => {
    let message = msg || "تمت العملية بنجاح"
    let className = "bg-mainGreen text-white"

    if (type === 'error' && !!!msg) {
        message = "حدث خطأ ما ، حاول لاحقاً"
        className = "bg-mainRed text-white"
    }
    if (type === 'error' && !!msg) {
        className = "bg-mainRed text-white"
    }

    toast[type](message, {
        ...toastOptions,
        className,
        position
    })
}