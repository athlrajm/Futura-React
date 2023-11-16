import { createSlice } from "@reduxjs/toolkit"


const user=createSlice({
    name:'datas',
    initialState:{
        info:[]
    },
    reducers:{
        dataInfo:(state,action)=>{
            console.log('*********done',action.payload)
            console.log('********action',action)
            state.info.push(action.payload)
        },
        dataClear:(state,action)=>{
            state.info=[];
        }
    }
})
export const {dataInfo,dataClear}=user.actions

export default user.reducer