// src/api/apiService.ts

import axiosInstance from './axiosInstance'

// 🔹 GET
export const getRequest = async (url: string, params?: any) => {
  const response = await axiosInstance.get(url, { params })
  return response.data
}

// 🔹 POST
export const postRequest = async (url: string, data: any) => {
  const response = await axiosInstance.post(url, data)
  return response.data
}

// 🔹 PUT
export const putRequest = async (url: string, data: any) => {
  const response = await axiosInstance.put(url, data)
  return response.data
}

// 🔹 PATCH
export const patchRequest = async (url: string, data: any) => {
  const response = await axiosInstance.patch(url, data)
  return response.data
}

// 🔹 DELETE
export const deleteRequest = async (url: string) => {
  const response = await axiosInstance.delete(url)
  return response.data
}