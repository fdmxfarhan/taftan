import api from '../config/api'
import storage from '../config/storage'

export const login = async (username, password) => {
    try {
        // const response = await api.post('/login', { username, password });
        // const {token, user} = response.data;
        // console.log(response.data);
        var token = '123', user = 'farhan';

        await storage.save({
            key: 'auth',
            data: {
                token,
                user,
            },
            expires: 1000 * 3600 * 24 * 30,
        });
        return { success: true, token, user };

    } catch (error) {
        console.error('login error:', error);
        return { success: false };
    }
}

export const getAuthData = async () => {
    try {
        const data = await storage.load({ key: 'auth' })
        return data;
    }
    catch (error) {
        console.log('Error loading auth data: ', error);
        return null;
    }
}

export const logout = async () => {
    try {
        await storage.remove({ key: 'auth' });
        return { success: true };
    } catch (error) {
        console.error('Logout error: ', error);
        return { success: false, error: 'Failed to log out' };
    }
}