import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "..";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tasks-api-d86d.onrender.com/api",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState; // ✅ Strongly typed
      const token = state.auth.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Auth", "Tasks"],
  endpoints: () => ({}),
});
