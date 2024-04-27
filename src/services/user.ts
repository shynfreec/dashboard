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

// export const getUserDetails = async (id: string) => {
//   try {
//     const res = await axiosClient.get<
//       UserRequest,
//       AxiosResponse<GetUserProfileResponse>
//     >(`/admin/user`);

//     return res.data;
//   } catch (error) {
//     const err = error as AxiosError<any>;
//     const errData = err.response?.data;
//     throw errData;
//   }
// };

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
