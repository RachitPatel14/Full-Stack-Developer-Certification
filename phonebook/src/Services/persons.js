import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'
const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data)
} 
const create = nameObject => {
    const request = axios.post(baseUrl,nameObject)
    return request.then(response => response.data)
}
const deletePhoneRecord = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}
const update = (id, person) => {
    const request = axios.put(`${baseUrl}/${id}`, person)
    return request.then(res => res.data)
}
export default {getAll, create, deletePhoneRecord, update}