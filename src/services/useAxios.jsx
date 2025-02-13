import { useSelector } from "react-redux"
import axios from "axios"


const useAxios = () => {
  const { token } = useSelector((state) => state.auth)
  
   const BASE_URL = "https://12105.fullstack.clarusway.com"
  const axiosToken = axios.create({
    baseURL: `${BASE_URL}/`,
    headers: { Authorization: `Token ${token}` },
  })

  const axiosPublic = axios.create({
    baseURL: `${BASE_URL}/`,
  })
  return { axiosToken, axiosPublic }
}

export default useAxios
