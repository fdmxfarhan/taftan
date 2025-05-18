# 🚀 Taftan Mobile Application

A React Native mobile application with comprehensive setup and troubleshooting guides.

## 📋 Table of Contents
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Troubleshooting Guide](#troubleshooting-guide)
- [Additional Features](#additional-features)

## 🎯 Getting Started

### Prerequisites
1. Install Android Studio
2. Download SDKs using Android Studio SDK Manager
3. Download Emulator (API 25, Medium phone)

### Initial Setup
```bash
# Initialize new React Native app
npx react-native init {MyApp}

# Install required dependencies
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
```

### Android SDK Configuration
1. Open Start Menu and search for "Environment Variables"
2. Click on "Edit the system environment variables"
3. In System Properties, click "Environment Variables"
4. Under User variables, add:
   - Variable name: `ANDROID_HOME`
   - Variable value: `C:\Users\YourUserName\AppData\Local\Android\Sdk`
5. Edit System variables Path and add:
   - `%ANDROID_HOME%\platform-tools`
   - `%ANDROID_HOME%\tools`
   - `%ANDROID_HOME%\tools\bin`

## 🏃‍♂️ Running the Application

### Check Connected Devices
```bash
adb devices
```

### Configure JDK Path
Add to `android/gradle.properties` (use "\\" instead of "\"):
```properties
org.gradle.java.home=C:\\Program Files\\Java\\jdk1.8.0_291
```

### Run the App
```bash
npx react-native run-android
```

## 🔧 Troubleshooting Guide

### 1. JDK Path Issues
**Error:** Could not find tools.jar
**Solution:** Install JDK and add path to `android/gradle.properties`:
```properties
org.gradle.java.home=C:\\Program Files\\Java\\jdk1.8.0_291
```

### 2. SDK Version Problems
**Error:** Failed to install the app
**Solution:**
```bash
cd android
./gradlew clean
```

### 3. Android SDK Configuration
**Error:** Command failed with exit code 1
**Solution:** Follow the Android SDK Configuration steps in Getting Started section

### 4. Gradle Issues
**Solution:** Open android folder in Android Studio and update Gradle when prompted

## ✨ Additional Features

### Adding Fonts
Create `react-native.config.js` in root directory:
```javascript
module.exports = {
    project: {
        ios:{},
        android:{}
    },
    assets:['./assets/fonts/'],
}
```

### Building APK
```bash
# Generate APK
cd android
./gradlew app:assembleRelease

# Generate Release Bundle (.aab)
./gradlew bundleRelease
```
The APK will be in: `android\app\build\outputs\apk\release`

### Using Icons
```bash
npm i react-native-vector-icons
react-native link react-native-vector-icons
```
Usage:
```javascript
import Icon from 'react-native-vector-icons/FontAwesome';
<Icon name="sign-in"/>
```

### App Icon Specifications
Place icons in `/android/app/src/main/res/`:
- `mipmap-hdpi`: 72×72 px
- `mipmap-mdpi`: 48×48 px
- `mipmap-xhdpi`: 96×96 px
- `mipmap-xxhdpi`: 144×144 px
- `mipmap-xxxhdpi`: 192×192 px

### NPM Install Issues
If npm install fails, try:
```bash
npm ci
```
