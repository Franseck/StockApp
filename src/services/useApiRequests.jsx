import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/Toastify"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice"

//? Custom hook

const useApiRequests = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)

   const BASE_URL = "https://console-12105.fullstack.clarusway.com"

  const login = async (userData) => {
 

    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}/auth/login`,
        userData
      )
      toastSuccessNotify("Login Success")
      dispatch(loginSuccess(data))
      navigate("stock")
      console.log(data)
    } catch (error) {
      toastErrorNotify("Login Failed")
      dispatch(fetchFail())
      console.log(error)
    }
  }

  const register = async (userInfo) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}/users/`,
        userInfo
      )
      dispatch(registerSuccess(data))
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
    }
  }

  const logout = async () => {
    dispatch(fetchStart())
    try {
      await axios(`${BASE_URL}/auth/logout/`, {
        headers: { Authorization: `Token ${token}` },
      })
      dispatch(logoutSuccess())
      navigate("/")
    } catch (error) {
      dispatch(fetchFail())
    }
  }

  return { login, register, logout }
}

export default useApiRequests
