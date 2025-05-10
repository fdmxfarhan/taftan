import api from '../config/api';
import { use_local_data } from '../config/consts';
import { getAuthData } from './auth';

/**
 * Upload a file to the server.
 * @param {string} endpoint - The API endpoint to which the file will be uploaded.
 * @param {File} file - The file to upload.
 * @param {Function} onUploadProgress - Callback to monitor upload progress.
 * @returns {Promise} - Axios response promise.
 */

export const uploadFile = async (endpoint, file, onUploadProgress) => {
    try {
        const authData = await getAuthData();
        
        // Create FormData object
        const formData = new FormData();
        
        // Append the file directly to FormData
        formData.append('file', {
            uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
            type: file.type,
            name: file.name
        });

        // Upload the file using FormData
        const uploadResponse = await api.post(endpoint, formData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': authData.token,
                'Accessid': authData.Constraintid,
                'Constraintid': authData.Constraintid,
            },
            onUploadProgress,
        });

        return uploadResponse.data;
    } catch (error) {
        console.error('File upload failed:', error);
        throw error;
    }
};
