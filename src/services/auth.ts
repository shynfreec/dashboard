import { AxiosError } from "axios";
import axiosClient from "./config";

export type AuthRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  result: {
    user: User;
    accessToken: string;
    refreshToken: string;
  };
};

export type RegisterResponse = {
  success: boolean;
};

export type RefreshTokenResponse = {
  refreshToken: string;
};

export const login = async (
  authData: Pick<AuthRequest, "email" | "password">
) => {
  try {
    const res = await axiosClient.post<AuthRequest, LoginResponse>(
      `/auth/authenticate`,
      authData
    );

    return {
      user: res.result.user,
      accessToken: res.result.accessToken,
      refreshToken: res.result.refreshToken,
    };
  } catch (error) {
    const err = error as AxiosError<any>;
    const errData = err.response?.data;
    throw errData;
  }
};

export const refreshToken = async (refreshToken: string) => {
  try {
    const res = await axiosClient.post<AuthRequest, RefreshTokenResponse>(
      `/auth/refresh-token`,
      {
        refreshToken,
      }
    );

    return {
      refreshToken: res.refreshToken,
    };
  } catch (error) {
    const err = error as AxiosError<any>;
    const errData = err.response?.data;
    throw errData;
  }
};

export const register = async (authData: AuthRequest) => {
  try {
    const { success } = await axiosClient.post<AuthRequest, RegisterResponse>(
      `/auth/sign-up`,
      authData
    );

    return {
      success,
    };
  } catch (error) {
    const err = error as AxiosError<any>;
    const errData = err.response?.data;
    throw errData;
  }
};
