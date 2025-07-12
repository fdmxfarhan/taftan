# Native Kotlin HTTP Request Module

This module provides a native Kotlin implementation for making HTTP requests in React Native that preserves header case. This solves the issue where React Native automatically converts all header names to lowercase.

## Files Created

1. **`android/app/src/main/java/com/taftan/HttpRequestModule.kt`** - Main Kotlin module
2. **`android/app/src/main/java/com/taftan/HttpRequestPackage.kt`** - React Native package registration
3. **`Taftan/utils/nativeHttpRequest.js`** - JavaScript wrapper
4. **Updated `MainApplication.kt`** - Added package registration
5. **Updated `build.gradle`** - Added OkHttp dependency

## Features

- ✅ Preserves header case (e.g., `ConstraintId`, `Accessid`)
- ✅ Supports all HTTP methods (GET, POST, PUT, DELETE, PATCH)
- ✅ Configurable timeout
- ✅ JSON body support
- ✅ Error handling
- ✅ Response parsing

## Usage

### Basic Usage

```javascript
import NativeHttpRequest from '../utils/nativeHttpRequest';

// GET request with case-sensitive headers
const response = await NativeHttpRequest.get('https://api.example.com/data', {
  'Authorization': 'Bearer your-token',
  'ConstraintId': '65',
  'Accessid': '65',
  'CustomHeader': 'value'
});

console.log(response.data);
```

### POST Request

```javascript
const response = await NativeHttpRequest.post(
  'https://api.example.com/create',
  { name: 'John', age: 30 }, // Body will be JSON stringified
  {
    'Authorization': 'Bearer your-token',
    'ContentType': 'application/json',
    'CustomHeader': 'value'
  }
);
```

### With Timeout

```javascript
const response = await NativeHttpRequest.get(
  'https://api.example.com/data',
  { 'Authorization': 'Bearer your-token' },
  30000 // 30 seconds timeout
);
```

### Direct Request Method

```javascript
const response = await NativeHttpRequest.request(
  'https://api.example.com/data',
  'POST',
  { 'Authorization': 'Bearer your-token' },
  { data: 'value' },
  30000
);
```

## API Reference

### Methods

- `NativeHttpRequest.get(url, headers, timeout)`
- `NativeHttpRequest.post(url, body, headers, timeout)`
- `NativeHttpRequest.put(url, body, headers, timeout)`
- `NativeHttpRequest.delete(url, headers, timeout)`
- `NativeHttpRequest.patch(url, body, headers, timeout)`
- `NativeHttpRequest.request(url, method, headers, body, timeout)`

### Response Format

```javascript
{
  ok: boolean,
  status: number,
  statusText: string,
  data: any, // Parsed JSON or raw text
  headers: object,
  json: () => Promise<any>,
  text: () => Promise<string>
}
```

## Comparison with Standard React Native

### Standard React Native (Header Case Lost)
```javascript
fetch('https://api.example.com/data', {
  headers: {
    'ConstraintId': '65',  // Becomes 'constraintid'
    'Accessid': '65'       // Becomes 'accessid'
  }
});
```

### Native Module (Header Case Preserved)
```javascript
NativeHttpRequest.get('https://api.example.com/data', {
  'ConstraintId': '65',  // Stays 'ConstraintId'
  'Accessid': '65'       // Stays 'Accessid'
});
```

## Building and Testing

1. **Clean and rebuild the Android project:**
   ```bash
   cd android
   ./gradlew clean
   cd ..
   npx react-native run-android
   ```

2. **Test the module:**
   - The login screen now includes examples of both custom fetch and native HTTP requests
   - Check the console logs to see the responses
   - Use network monitoring tools to verify header case preservation

## Troubleshooting

### Common Issues

1. **Module not found error:**
   - Make sure the package is registered in `MainApplication.kt`
   - Clean and rebuild the project

2. **Build errors:**
   - Ensure OkHttp dependency is added to `build.gradle`
   - Check that Kotlin is properly configured

3. **Headers still being lowercased:**
   - Verify you're using `NativeHttpRequest` instead of `fetch` or `axios`
   - Check network logs to confirm headers are sent correctly

### Debugging

Add logging to see what headers are being sent:

```javascript
const headers = {
  'Authorization': 'Bearer your-token',
  'ConstraintId': '65',
  'Accessid': '65'
};

console.log('Sending headers:', headers);
const response = await NativeHttpRequest.get(url, headers);
console.log('Response:', response);
```

## Performance

The native module provides better performance than JavaScript-based solutions because:
- No bridge overhead for header processing
- Direct native HTTP client usage
- Optimized for Android networking stack

## Security

- Uses OkHttp, a secure HTTP client
- Supports HTTPS and certificate pinning
- No additional security risks compared to standard React Native networking 