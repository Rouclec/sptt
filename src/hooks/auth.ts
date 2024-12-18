/* eslint-disable @typescript-eslint/no-explicit-any */
// src/hooks/useUpdatePassword.ts
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// Define the shape of the request payload for updating password
interface UpdatePasswordPayload {
  oldPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
}

const API_URL = "/api/auth";

export const useGetUserOTP = (
  onSuccess?: (data?: string) => void,
  onError?: (error?: any) => void
) => {
  return useMutation({
    mutationFn: async () => {
      const { data } = await axios.get(`${API_URL}/get-otp`, {
        withCredentials: true,
      });
      return data.data as string;
    },
    onSuccess,
    onError,
  });
};

// Hook for updating the user's password
export const useUpdatePassword = (
  onSuccess?: (data?: { message: string }) => void,
  onError?: (error?: { message: string }) => void
) => {
  return useMutation({
    mutationFn: async (payload: UpdatePasswordPayload) => {
      const { data } = await axios.post(`${API_URL}/update-password`, payload, {
        withCredentials: true,
      });
      return data.data as { message: string };
    },
    onSuccess,
    onError,
  });
};
