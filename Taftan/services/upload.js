import api from './api';

/**
 * Upload a file to the server.
 * @param {string} endpoint - The API endpoint to which the file will be uploaded.
 * @param {File} file - The file to upload.
 * @param {Function} onUploadProgress - Callback to monitor upload progress.
 * @returns {Promise} - Axios response promise.
 */

export const uploadFile = async (endpoint, file, onUploadProgress) => {
    const formData = new FormData();
    formData.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.fileName,
    });

    try {
        const response = await api.post(endpoint, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress,
        });
        return response.data;
    } catch (error) {
        console.error('File upload failed:', error);
        throw error;
    }
};
