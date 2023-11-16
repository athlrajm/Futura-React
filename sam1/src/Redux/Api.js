import axios from "axios";
import { dataInfo } from "./DataSlice";


export const Datas=async(dispatch)=>{
    try{
        const data=await axios.get('https://dummyjson.com/products/1')
        console.log("*",data.data);
        dispatch(dataInfo(data.data))
    }catch(err){
        console.log('err detected');
    }

}