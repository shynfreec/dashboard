import { AxiosError, AxiosResponse } from 'axios';
import axiosClient from './config';

export type UserRequest = {
  walletAddress: string;
  fullname: string;
  isAll: boolean;
  take: number;
  skip: number;
};

type UserRespone = {
  data: {
    data: [];
    options: {};
  };
};

export const getListUser = async () =>
  // param: Pick<
  //   UserRequest,
  //   'fullname' | 'isAll' | 'skip' | 'take' | 'walletAddress'
  // >
  {
    try {
      const res = await axiosClient.get<
        UserRequest,
        AxiosResponse<UserRespone>
      >(
        `/app/user`
        // param
      );

      return res.data;
    } catch (error) {
      const err = error as AxiosError<any>;
      const errData = err.response?.data;
      throw errData;
    }
  };
