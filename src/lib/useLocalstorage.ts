const useLocalStorage = () => {
    let authToken: string|null = '';
    const setAuthToken = (token: string) => {
        authToken = token
        localStorage.setItem('token', token)
    };
    const getAuthToken = (): string|null => {
        if(!authToken || authToken === '') {
            authToken = localStorage.getItem('token') 
        }
        return authToken
    };

    return {
        setAuthToken,
        getAuthToken
    }
}

export default useLocalStorage;