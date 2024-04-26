import { AxiosError, AxiosResponse } from "axios";
import axiosClient from "./config";

export type AuthRequest = {
  email: string;
  password: string;
};

type JWTData = {
  accessToken: string;
  expiresIn: string;
}
type UserInfo = {
  email: string;
  fullname: string;
  id: string;
}

export type LoginResponse = {
  jwt: JWTData;
  user: UserInfo
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
    const res = await axiosClient.post<AuthRequest, AxiosResponse<LoginResponse>>(
      `/auth/sign-in`,
      authData
    );    

    return res.data;
  } catch (error) {
    const err = error as AxiosError<any>;
    const errData = err.response?.data;
    throw errData;
  }
};

// export const refreshToken = async (refreshToken: string) => {
//   try {
//     const res = await axiosClient.post<AuthRequest, RefreshTokenResponse>(
//       `/auth/refresh-token`,
//       {
//         refreshToken,
//       }
//     );

//     return {
//       refreshToken: res.refreshToken,
//     };
//   } catch (error) {
//     const err = error as AxiosError<any>;
//     const errData = err.response?.data;
//     throw errData;
//   }
// };

// export const register = async (authData: AuthRequest) => {
//   try {
//     const { success } = await axiosClient.post<AuthRequest, RegisterResponse>(
//       `/auth/sign-up`,
//       authData
//     );

//     return {
//       success,
//     };
//   } catch (error) {
//     const err = error as AxiosError<any>;
//     const errData = err.response?.data;
//     throw errData;
//   }
// };
