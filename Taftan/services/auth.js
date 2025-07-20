import api from '../config/api-auth'
import { use_local_data } from '../config/consts';
import storage from '../config/storage';

export const login = async (username, password) => {
    try {
        if (use_local_data) return {
            success: true,
            data: {
                "RefreshToken": {
                    "Created": "2025-05-11T08:23:31.5471307Z",
                    "CreatedByIp": "fe80::1149:cdc8:167c:a166%3",
                    "Expires": "2025-05-11T08:33:31.5471301Z", 
                    "IsActive": true,
                    "IsExpired": false,
                    "ReplacedByToken": null,
                    "Revoked": null,
                    "RevokedByIp": null,
                    "Token": "uGctAcp++p7+0Y1QjNxcfkvSu9lC8yZeEZxkJMGM/HTZjPV9GHKR1aZEqGJekMJzfRnjLj/nYPsBa0/eDejGTQ=="
                },
                "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxMTAxNzciLCJVc2VyS2V5IjoiOGVkMjFjMmUtMjczMy00NjIyLTllMzAtY2M2OWVmOGEzMDk4IiwiVXNlck5hbWUiOiJsZWlsYSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Imwuc2dAZ21haWwuY29tIiwiRnVsbF9OYW1lIjoi2YTbjNmE2Kcg2LTYp9m-2YjYsduMIiwiTG9naW5WYWxpZCI6IjI3MmI3MTJlLWYwMWYtNDI1ZC05NzVlLTU3YzNhNDdmZDJiNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiMDkxMjIyMjIyMjIiLCJTdWJTeXN0ZW1MaXN0IjoiW3tcIklkXCI6MTMwNjYzLFwiVXNlcklkXCI6MTEwMTc3LFwiU3ViU3lzdGVtSWRcIjoxfSx7XCJJZFwiOjEzMDY2NCxcIlVzZXJJZFwiOjExMDE3NyxcIlN1YlN5c3RlbUlkXCI6Mn0se1wiSWRcIjoxMzA2NjUsXCJVc2VySWRcIjoxMTAxNzcsXCJTdWJTeXN0ZW1JZFwiOjN9LHtcIklkXCI6MTMwNjY2LFwiVXNlcklkXCI6MTEwMTc3LFwiU3ViU3lzdGVtSWRcIjo0fV0iLCJuYmYiOjE3NDY5NTE4MTEsImV4cCI6MTc0Njk1MjQxMSwiaXNzIjoiQWRvbmlzIiwiYXVkIjoiQWRvbmlzQ28ifQ.BpzXJ5kWQCiRMoDgrDC3EE1J-1CESx6CBCsSSUlFsfM"
            }

        }
        const response = await api.post('/Accounts/Login', { "username": username, "password": password }, {
            headers: {
                'UserAgent': 'Mobile',
                // 'Content-Type' : 'application/json-patch+json'
            }
        });
        // console.log(response.data)
        await storage.save({ key: 'auth', data: response.data });
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, error };
    }
}

export const getRefreshToken = async () => {
    try {
        const data = await storage.load({ key: 'auth' });
        console.log('1:data', 'data');
        if (!data) return null;

        const refreshToken = data.RefreshToken.Token;
        if (refreshToken) {
            return { success: true, data: refreshToken };
        }
        return { success: false, error: 'No refresh token available' };
    }catch(error){
        return { success: false, error };
    }
}


export const refreshToken = async () => {

    try {
        const refreshToken = await getRefreshToken();
        if (!refreshToken.success) {
            return { success: false,   error: 'No refresh token available' };
        }

        const response = await api.post('/Accounts/RefreshToken', {
            token: refreshToken.data
        });

        if (response.data) {
            await storage.save({ key: 'auth', data: response.data });
            return { success: true, data: response.data };
        }
        return { success: false, error: 'Failed to refresh token' };
    } catch (error) {
        console.log('Token refresh error:', error);
        return { success: false, error };
    }
}
export const getAuthData = async () => {
    let isRefreshing = false; 
    try {
        const data = await storage.load({ key: 'auth' });
        console.log('1:data', 'data');
        if (!data) return null;

        const token = data.Token;
        if (token) {
            console.log('2:token', 'token');
            const payload = JSON.parse(atob(token.split('.')[1]));
            console.log('3:payload', 'payload');
            const now = Math.floor(Date.now() / 1000);
            console.log('4:now', now);

            if (payload.exp - now < 30 && !isRefreshing) {
                console.log('5:token is expired or about to expire, try to refresh');
                isRefreshing = true;
                const refreshResult = await refreshToken();
                console.log('6:refreshResult', refreshResult);
                isRefreshing = false;

                if (refreshResult.success) {
                    console.log('7:refreshResult.data', refreshResult.data);
                    return refreshResult.data;
                }
            }
        }
        return data;
    }
    catch (error) {
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