import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { database } from '../firebase/database'

export const ecApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: database, 
  }),
  endpoints: (builder) => ({
    getSucursales: builder.query({
      query: () => 'sucursales.json',
    }),
    getCategories: builder.query({
        query: () => 'categorias.json',
    }),
    getProductsByCategory: builder.query({
        query: (category) => `productos.json?orderBy="category"&equalTo="${category}"`,
    }),
    insertSucursal: builder.mutation({
        query: (nombre) => ({
        url: 'sucursales.json',
        method: 'POST',
        body: nombre
        }),
    }),
    insertCategory: builder.mutation({
        query: (category) => ({
          url: 'categorias.json',
          method: 'POST',
          body: category, 
        }),
        invalidatesTags: ['Posts']
  }),
  reducerPath: 'ecApi', 
})
})

export const { useGetSucursalesQuery, useInsertSucursalMutation, useGetCategoriesQuery, useGetProductsByCategoryQuery, useInsertCategoryMutation } = ecApi