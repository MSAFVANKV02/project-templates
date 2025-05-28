import toast from "react-hot-toast";

export const makeToast = (text:string)=>{
    toast.success(text, {
        style:{
            borderRadius:"4px",
            height:"45px",
            background:"#333",
            color:"#fff",
            fontSize:"12px",
            zIndex: "100003",
        }
    })
}

export const makeToastError = (text:string)=>{
    toast.error(text, {
        style:{
            borderRadius:"4px",
            background:"#333",
            color:"#fff",
            fontSize:"12px",
            zIndex: "100003",
        }
    })
}

export const makeToastWarning = (text:string)=>{
    toast(text, {
        style:{
            borderRadius:"4px",
            background:"#333",
            color:"#fff",
            fontSize:"12px",
            zIndex: "100003",
        }
    })
}
