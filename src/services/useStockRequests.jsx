import { toastErrorNotify, toastSuccessNotify } from '../helper/Toastify'
import useAxios from './useAxios'
import { fetchStart, fetchFail, getProSaleBraSuccess, getStockSuccess } from '../features/stockSlice'
import { useDispatch } from 'react-redux'


const useStockRequests = () => {

  const { axiosToken } = useAxios()
  const dispatch = useDispatch()

  const getStock = async (path) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosToken.get(path)
      dispatch(getStockSuccess({ data: data.data, path }))
    } catch (error) {
      toastErrorNotify(`${path} failed to access data`)
      dispatch(fetchFail())
      console.log(error)
    }
  }

  const deleteStock = async (path, id) => {
    dispatch(fetchStart())
    try {
      await axiosToken.delete(`${path}/${id}`)
      getStock(path)
      toastSuccessNotify(`Delete Successful.`)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Delete Failed.")
    }
  }

  const postStock = async (path, data) => {
    dispatch(fetchStart())
    try {
      await axiosToken.post(path, data)
      toastSuccessNotify(`Adding Data Successful`)
      getStock(path)
    } catch (error) {
      toastErrorNotify("Adding Data Failed.")
      dispatch(fetchFail())
    }
  }

  const putStock = async (path, data) => {
    dispatch(fetchStart())
    try {
      await axiosToken.put(`${path}/${data._id}`, data)
      toastSuccessNotify(`Update Successful .`)
      getStock(path)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Update Failed.")
      console.log(error)
    }
  }

  const getProSaleBrand = async () => {
    dispatch(fetchStart())
    try {
      const [pro, sal, bra] = await Promise.all([
        axiosToken("products"),
        axiosToken("sales"),
        axiosToken("brands"),
      ])
      const products = pro.data.data
      const sales = sal.data.data
      const brands = bra.data.data
      dispatch(getProSaleBraSuccess({ products, sales, brands }))
    } catch (error) {
      toastErrorNotify(`Data Failed.`)
      dispatch(fetchFail())
      console.log(error)
    }
  }

  //   return { getFirms, getSales }
  return { getStock, deleteStock, postStock, putStock, getProSaleBrand }
}

export default useStockRequests