import React,{useContext} from 'react'
import {GlobalContext} from '../../Context/GlobalState'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = () : any=> {

    const {error} = useContext(GlobalContext);
    if(error!==undefined){
        toast.error(error,{toastId:'error'});
        console.log(error)
        return(
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />)
    }


    return <></>
    
}

