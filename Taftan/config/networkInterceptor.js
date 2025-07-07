// Network request interceptor for debugging
const enableNetworkDebug = () => {
  // Keep original fetch
  const originalFetch = global.fetch;

  global.fetch = async (...args) => {
    const [url, options = {}] = args;
    const startTime = Date.now();

    console.group(`🌐 Network Request: ${options.method || 'GET'} ${url}`);
    console.log('Request Headers:', options.headers);
    if (options.body) {
      console.log('Request Body:', options.body);
    }

    try {
      const response = await originalFetch(...args);
      const endTime = Date.now();
      const duration = endTime - startTime;

      // Clone the response to read its body
      const clone = response.clone();
      const responseBody = await clone.text();

      console.log(`Response Status: ${response.status}`);
      console.log(`Response Time: ${duration}ms`);
      console.log('Response Headers:', response.headers);
      try {
        // Try to parse as JSON
        const jsonResponse = JSON.parse(responseBody);
        console.log('Response Body:', jsonResponse);
      } catch {
        // If not JSON, log as text
        console.log('Response Body:', responseBody);
      }
      console.groupEnd();

      return response;
    } catch (error) {
      console.log('❌ Error:', error);
      console.groupEnd();
      throw error;
    }
  };
};

export default enableNetworkDebug; 