import api from '../config/api-upload';
import { use_local_data } from '../config/consts';

/**
 * Upload a file to the server.
 * @param {string} endpoint - The API endpoint to which the file will be uploaded.
 * @param {File} file - The file to upload.
 * @param {Function} onUploadProgress - Callback to monitor upload progress.
 * @returns {Promise} - Axios response promise.
 */

export const uploadFile = async (endpoint, file, onUploadProgress) => {
    try {
        const response = await fetch(file.uri);
        const blob = await response.blob();

        // Upload the binary file directly as the request body
        const uploadResponse = await api.post(endpoint, file, {
            headers: {
                'Content-Type': file.type || 'application/octet-stream', // Use the file's MIME type or fallback to binary
            },
            onUploadProgress,
        });

        return uploadResponse.data;
    } catch (error) {
        console.error('File upload failed:', error);
        throw error;
    }
};
