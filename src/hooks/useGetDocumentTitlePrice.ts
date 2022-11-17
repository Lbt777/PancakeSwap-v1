/*
 * @Author: lbt666 '1319451895@qq.com'
 * @Date: 2022-07-12 11:14:34
 * @LastEditors: lbt666 '1319451895@qq.com'
 * @LastEditTime: 2022-11-17 14:04:27
 * @Description: 
 */
import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { CAKE } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const cakePriceUsd = priceData ? parseFloat(priceData.data[CAKE.address].price) : 0

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })}`

  useEffect(() => {
    // document.title = `PancakeSwap${cakePriceUsdString}`
    document.title = '星际'
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
