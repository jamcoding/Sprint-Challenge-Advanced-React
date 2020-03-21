import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode() {
    const [dark, setDark] = useLocalStorage('darkMode', false);

    useEffect(() => {
        dark ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [dark])

    return [dark, setDark];
}

export default useDarkMode;