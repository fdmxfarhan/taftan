# Taftan Mobile Application

## Start a new application:
1. install android studio
2. download SDKs with android studio SDK manager.
3. download Emulator `system-image` from here. Then copy to system-images folder (usually-> c://Users/{user}/AppData/Local/Android/SDKs)
```
https://dl.google.com/android/repository/sys-img/google_apis/x86-25_r08.zip
```
4. run this command to init an app:
```
npx react-native init {MyApp}
```

## Run application on Android Emulator/Device:
1. if `platform-tools` folder is added to PATH, then you can use `adb` to see all plugged in devices.
```
adb devices
```
2. the running Emulator must be seen in the list. to run the application use the command bellow:
```
npx react-native run-android
```



## problems:
1. JDK path is not recogenized
   Error:
    Could not find tools.jar. Please check that C:\Program Files\Java\jre1.8.0_291 contains a valid JDK installation.
   Solution:
    Install JDK and add its path to `android/gradle.properties` using this command.
    `org.gradle.java.home=C:\\Program Files\\Java\\jdk1.8.0_291`
    the version might be different.

3. SDK version
   Error:
    Failed to install the app. Make sure you have the Android development environment set up
   Solution:
    cd android
    ./gradlew clean

2. Gradle problem
   Error:
    don't remember :)
   Solution:
    open android folder by android studio and wait. A notif comes up saying update gradle. just hit update and it's fixed

3. Add Fonts
   create a file and name it `react-native.config.js` inside root directory and put this lines in it. Then reload the project.
   ```   
   module.exports = {
       project: {
           ios:{},
           android:{}
       },
       assets:['./assets/fonts/'],
   }
   ```

4. Build APK
   just go into android folder and run `./gradlew app:assembleRelease`
   any Errors -> use VPN
   the app-release.apk will be generated in `android\app\build\outputs\apk\release`
    4.1. release Bundle (.aab)
        ./gradlew bundleRelease

5. Icons
   run `npm i react-native-vector-icons` and then `react-native link react-native-vector-icons` then restart the app.
   use it like this.
   ```
   import Icon from 'react-native-vector-icons/FontAwesome';
   <Icon name="sign-in"/>
   ```

6. npm install failed
   run `npm ci` and try again.

7. App Icon
   app icon must be inside /android/app/src/main/res/
   72*72   ic_launcher.png in mipmap-hdpi.
   48*48   ic_launcher.png in mipmap-mdpi.
   96*96   ic_launcher.png in mipmap-xhdpi.
   144*144 ic_launcher.png in mipmap-xxhdpi.
   192*192 ic_launcher.png in mipmap-xxxhdpi.