import { AxiosError, AxiosResponse } from 'axios';
import axiosClient from './config';

type UserRequest = {
  walletAddress?: string;
  fullname?: string;
  isAll?: boolean;
  take?: number;
  skip?: number;
};

type PageOption = {
  currentPage: number;
  totalItems: number;
  totalPages: number;
};

type GetUserResponse = {
  data: TUser[];
  options?: PageOption;
};

type GetUserDetailResponse = {
  data: {
    banner: null | string;
    bio: null | string;
    joinedAt: string;
    locale: string;
    numberOfLogins: number;
    referralCode: string;
    // avatar: null | string;
    // email: null | string;
    // fullname: null | string;
    // id: string;
    // walletAddress: string;
  } & TUser;
  errors: any;
};

export const getUserDetails = async (id: string) => {
  try {
    const res = await axiosClient.get<UserRequest, AxiosResponse<any>>(
      `/admin/user/${id}`
    );

    return res.data;
  } catch (error) {
    const err = error as AxiosError<GetUserDetailResponse>;
    const errData = err.response?.data;
    throw errData;
  }
};

export const getListUser = async (data?: UserRequest) => {
  try {
    const res = await axiosClient.get<
      UserRequest,
      AxiosResponse<GetUserResponse>
    >(
      `/app/user?walletAddress=${data?.walletAddress ?? ''}&fullname=${
        data?.fullname ?? ''
      }&isAll=${data?.isAll ?? false}&take=${data?.take ?? 10}&skip=${
        data?.skip ?? 0
      }`
    );

    return res.data;
  } catch (error) {
    const err = error as AxiosError<any>;
    const errData = err.response?.data;
    throw errData;
  }
};
