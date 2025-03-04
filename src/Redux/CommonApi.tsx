

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const userId = localStorage.getItem("userId");
export const CommonApi = createApi({
  reducerPath: "CommonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    credentials: "include", // Add this line to include cookies
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `credentials ${token}`);
      }
      headers.set("Platform", "web");
      return headers;
    },
  }),
  
  tagTypes: ["Login"],
  endpoints: (builder) => ({
    SignupUser: builder.mutation({
      query: ({ name, email,password }) => ({
        url: "/register",
        method: "POST",
        body: {  name, email,password },
      }),
      invalidatesTags: ["Login"],
    }),
    LoginUser: builder.mutation({
      query: ({ email,password }) => ({
        url: "/login",
        method: "POST",
        body: { email,password },
      }),
      invalidatesTags: ["Login"],
    }),
   
    getAllproperties: builder.query({
      query: () => `/fetchall`,
      providesTags: ["Login"],
    }),
    getPropertybyId: builder.query({
      query: (id) => `/singleproperty/${id}`, 
      providesTags: ["Login"],
    }),
      propertyform: builder.mutation({
        query: ({   propertytype,
          city,
          location,
          areasize,
          areasizeunit,
          price,
          advancepayment,
          noofinstallments,
          monthlyinstrallmentamount,
          bedroom,
          bathroom,
          FeatureandAmenities,
          title,
          description,
          number,
          landline,
          images, }) => ({
          url: "/create",
          method: "POST",
          body: {    propertytype,
            city,
            location,
            areasize,
            areasizeunit,
            price,
            advancepayment,
            noofinstallments,
            monthlyinstrallmentamount,
            bedroom,
            bathroom,
            FeatureandAmenities,
            title,
            description,
            number,
            landline,
            images },
        }),
        invalidatesTags: ["Login"],
      }),
      contactform: builder.mutation({
        query: ({  name,email,phone,subject,message
         }) => ({
          url: "/send",
          method: "POST",
          body: {  name,email,phone,subject,message},
        }),
        invalidatesTags: ["Login"],
      }),
      LogoutUser: builder.mutation({
        query: () => ({
          url: "/logout",
          method: "POST",
        }),
        invalidatesTags: ["Login"], // Invalidate login-related data
      }),
      getAllCities: builder.query({
        query: () => `/cities`,
        providesTags: ["Login"],
      }),
      getPropertyType: builder.query({
        query: () => `/propertytpe`,
        providesTags: ["Login"],
      }),
      getPurpose: builder.query({
        query: () => `/ppurpose`,
        providesTags: ["Login"],
      }),
}),

});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useGetAllpropertiesQuery,
  useGetPropertybyIdQuery,
  usePropertyformMutation,
  useContactformMutation,
  useLogoutUserMutation,
  useGetAllCitiesQuery,
  useGetPropertyTypeQuery,
  useGetPurposeQuery
 
} = CommonApi;
