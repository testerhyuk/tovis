import axios from "axios"

export const API_SERVER_HOST = 'http://129.154.60.182:8080'

const prefix = `${API_SERVER_HOST}/v1`

export const getAll = async () => {
    const res = await axios.get(`${prefix}/datas`)
    return res.data
}

export const createWorks = async (req) => {
    try {
        const res = await axios.post(`${prefix}/worklogs`, req)
        console.log("res = ", res.data)
        return res.data
    } catch (error) {
        console.error("작업 등록 실패 : ", error)
        throw error
    }
    
}