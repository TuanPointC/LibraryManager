import axios from "axios"
const URL = 'https://localhost:44340/api/borrowing_request'

export const GetRequest = () => {
    const data= axios.get(URL)
        .then((res) => res.data)
    return data
}

export const PostRequest = async (request) => {
    const result = await axios.post(URL,request)
    .then((res)=>res)
    return result
}

export const GetRequestId =async (id)=>{
    const result = await axios.get(URL+'/'+id)
        .then ((res)=>res.data)
    return result
}

export const PutRequest =async (request)=>{
    const result = await axios.put(URL,request)
        .then ((res)=>res)
    return result
}

export const DeleteRequestById =async (id)=>{
    const result = await axios.delete(URL+'/'+id)
        .then ((res)=>res)
    return result
}
