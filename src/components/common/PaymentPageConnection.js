import { useNavigate, useParams } from "react-router-dom";
import PaymentPage from "../payment/PaymentPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";


export default function PaymentPageConnection() {
    const params=useParams()
    const userData = useSelector(state=>state.userReducer)
    const navigate = useNavigate()
    
    useEffect(()=>{
        console.log(Object.values(userData).length)
       if(Object.values(userData).length==0){
            navigate({pathname:"/"})
       }
    
        
    })
    
    return Object.values(userData).length>0?<PaymentPage/>:<h1></h1>
    
    
}