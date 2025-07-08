import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData, logout } from './auth';

export const LoadAllowedRequestAction = async (requestId, navigation) => {
    const authData = await getAuthData();
    try {
        if (use_local_data) return {
            success: true, data: [
                "InsertReport",
                "RequestStatus",
                "SendToExpert",
                "Closed",
                "Cancel",
            ]
        };
        
        // const response = await fetch('http://10.55.5.13:8020/Services/Taftan/api/RequestController/LoadAllowedRequestAction?requestId=394131', {
        //     headers: {
        //         authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxMTAxNzciLCJVc2VyS2V5IjoiOGVkMjFjMmUtMjczMy00NjIyLTllMzAtY2M2OWVmOGEzMDk4IiwiVXNlck5hbWUiOiJsZWlsYSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Imwuc2dAZ21haWwuY29tIiwiRnVsbF9OYW1lIjoi2YTbjNmE2Kcg2LTYp9m-2YjYsduMIiwiTG9naW5WYWxpZCI6ImZhMTg5YWZmLWJkMjctNDQ1MS1hMGMyLTU2ODI1NWI3NmQ2MyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiMDkxMjIyMjIyMjIiLCJTdWJTeXN0ZW1MaXN0IjoiW3tcIklkXCI6MTMwNjYzLFwiVXNlcklkXCI6MTEwMTc3LFwiU3ViU3lzdGVtSWRcIjoxfSx7XCJJZFwiOjEzMDY2NCxcIlVzZXJJZFwiOjExMDE3NyxcIlN1YlN5c3RlbUlkXCI6Mn0se1wiSWRcIjoxMzA2NjUsXCJVc2VySWRcIjoxMTAxNzcsXCJTdWJTeXN0ZW1JZFwiOjN9LHtcIklkXCI6MTMwNjY2LFwiVXNlcklkXCI6MTEwMTc3LFwiU3ViU3lzdGVtSWRcIjo0fV0iLCJuYmYiOjE3NTE4ODkxMTQsImV4cCI6MTc1MTg4OTcxNCwiaXNzIjoiQWRvbmlzIiwiYXVkIjoiQWRvbmlzQ28ifQ.TGPgw1BUa0QywgIvsQRNNLIfsRIx1OqgOtVgKO0wkUY`,
        //         accessid: '27',
        //         constraintid: '27',
        //         'access-control-allow-origin': '*',
        //         connection: 'keep-alive',
        //         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        //     }
        // });
        const response = await api.get(`/RequestController/LoadAllowedRequestAction?requestId=${requestId}`, {
            headers: {
                'Authorization': `Bearer ${authData.token}`,
                'Accessid': '65',
                'ConstraintId': '65',
                // connection: 'keep-alive',
                // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
            }
        });
        console.log('Response:', {
            data: response.data,
            constraintid: authData.Constraintid,
            requestId: requestId,
        });
        return { success: true, data: response.data };
    } catch (error) {
        console.log('Error submitting /RequestController/LoadAllowedRequestAction request:', error);
        
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                logout();
                navigation.navigate('Login');
                return { success: false, error: 'Unauthorized access' };
            }
            if (error.response.data?.Message === "Authorization has been denied for this request.") {
                logout();
                navigation.navigate('Login');
                return { success: false, error: 'Authorization denied' };
            }
        }
        
        return { success: false, error: 'Failed to submit /RequestController/LoadAllowedRequestAction request' };
    }
};


