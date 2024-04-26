const hasWindow = typeof Window !== 'undefined';
const hasSessionStorage = typeof localStorage !== 'undefined';

const sessionStorageKeys = {
  user: 'user'
};

type TSessionStorageKeys = keyof typeof sessionStorageKeys;

const SessionStorageHandler = {
  setItem: (key: TSessionStorageKeys, value: any) => {
    if (hasWindow && hasSessionStorage) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  },
  getItem: (key: TSessionStorageKeys | null) => {
    if (hasWindow && hasSessionStorage) {
      if (key !== null && sessionStorage.getItem(key)) {
        return JSON.parse(sessionStorage.getItem(key) ?? '');
      }
    }
    return null;
  },
  removeItem: (key: TSessionStorageKeys) => {
    if (hasWindow && hasSessionStorage && sessionStorage.getItem(key)) {
      sessionStorage.removeItem(key);
      return true;
    }
    return false;
  },
  clear: () => {
    if (hasWindow && hasSessionStorage) {
      sessionStorage.clear();
    }
  },
};

export default SessionStorageHandler;
