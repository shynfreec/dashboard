import { create } from 'zustand';

interface UserState {
  user: TUser | null;
  users: TUser[] | null;
  setCurrentUser: (user: TUser) => void;
  setAllUsers: (users: TUser[]) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  users: [],
  setCurrentUser: (user) => {
    set((state) => ({
      ...state,
      user,
    }));
  },
  setAllUsers: (users) => {
    set((state) => ({
      ...state,
      users,
    }));
  },
}));

export default useUserStore;
