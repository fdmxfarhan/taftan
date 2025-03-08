import api from '../config/api-auth'
import { use_local_data } from '../config/consts';
import storage from '../config/storage';

export const login = async (username, password) => {
    try {
        if (use_local_data) return {
            success: true,
            data: {
                RefreshToken: {
                    Created: "2025-01-25T11:39:29.4099617Z",
                    CreatedByIp: "fe80::1149:cdc8:167c:a166%3",
                    Expires: "2025-01-25T11:49:29.409961Z",
                    IsActive: true,
                    IsExpired: false,
                    ReplacedByToken: null,
                    Revoked: null,
                    RevokedByIp: null,
                    Token: "de423pU3yj/Jc0nm/0c1nD/pamc86lTdhX7mLL0n8nnDe5FTsMuOZy8WKwaQN4fciG1meRJpTYsigOH2aCGGvw=="
                },
                Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2MDE0MCIsIlVzZXJLZXkiOiI0OWVlZTI4OS03ZjlhLTQ2YWItYmUzOS0zMTU4ZDYxZDhlODYiLCJVc2VyTmFtZSI6ImhhaSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImIubW9yYWRpQGFkb25pc3RlY2guaXIiLCJGdWxsX05hbWUiOiJoYWlkZWggYXJhYnphZGVoIiwiTG9naW5WYWxpZCI6ImNmODUzZGQ3LWQ2YTktNDlkZi1iMmZiLTA0MWNiN2FkZTdlYiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiMDk5OTEwOTk3Nzg5IiwiU3ViU3lzdGVtTGlzdCI6Ilt7XCJJZFwiOjgwNTM3LFwiVXNlcklkXCI6NjAxNDAsXCJTdWJTeXN0ZW1JZFwiOjF9LHtcIklkXCI6ODA1MzgsXCJVc2VySWRcIjo2MDE0MCxcIlN1YlN5c3RlbUlkXCI6Mn0se1wiSWRcIjo4MDUzOSxcIlVzZXJJZFwiOjYwMTQwLFwiU3ViU3lzdGVtSWRcIjozfSx7XCJJZFwiOjgwNTQwLFwiVXNlcklkXCI6NjAxNDAsXCJTdWJTeXN0ZW1JZFwiOjR9XSIsIm5iZiI6MTczNzgwNTE2OSwiZXhwIjoxNzM3ODA1NzY5LCJpc3MiOiJBZG9uaXMiLCJhdWQiOiJBZG9uaXNDbyJ9.nfPspUOJAdwi4pnKoi8jQ56WMMrmV_lUasBGtXlCHkE"
            }
        }
        const response = await api.post('/Accounts/Login', { "username": username, "password": password });
        return { success: true, data: response.data };

    } catch (error) {
        return { success: false, error };
    }
}

export const getAuthData = async () => {
    try {
        const data = await storage.load({ key: 'auth' })
        return data;
    }
    catch (error) {
        console.log(error)
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