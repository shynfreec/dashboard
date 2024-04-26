const hasWindow = typeof Window !== 'undefined';
const hasLocalStorage = typeof localStorage !== 'undefined';

const localStorageKeys = {
  user: 'user'
};

type TLocalStorageKeys = keyof typeof localStorageKeys;

const LocalStorageHandler = {
  setItem: (key: TLocalStorageKeys, value: any) => {
    if (hasWindow && hasLocalStorage) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  getItem: (key: TLocalStorageKeys | null) => {
    if (hasWindow && hasLocalStorage) {
      if (key !== null && localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key) ?? '');
      }
    }
    return null;
  },
  removeItem: (key: TLocalStorageKeys) => {
    if (hasWindow && hasLocalStorage && localStorage.getItem(key)) {
      localStorage.removeItem(key);
      return true;
    }
    return false;
  },
  clear: () => {
    if (hasWindow && hasLocalStorage) {
      localStorage.clear();
    }
  },
};

export default LocalStorageHandler;
