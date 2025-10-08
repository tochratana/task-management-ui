import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "..";

// Create a base query with retry logic
const baseQueryWithRetry = retry(
  fetchBaseQuery({
    baseUrl: "https://tasks-api-d86d.onrender.com/api",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      // Ensure proper content type
      headers.set("Content-Type", "application/json");

      return headers;
    },
    // Add timeout
    timeout: 30000, // 30 seconds for Render cold starts
  }),
  {
    maxRetries: 2, // Retry up to 2 times
  }
);

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Auth", "Tasks"],
  endpoints: () => ({}),
});