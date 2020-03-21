import { useState } from 'react';

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const user = window.localStorage.getItem(key);
        return user ? JSON.parse(user) : initialValue;
    })

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}

export default useLocalStorage;