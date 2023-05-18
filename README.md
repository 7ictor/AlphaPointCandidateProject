# AlphaPointCandidateProject
## Run
```
npx react-native start
npx react-native run-ios
npx react-native run-android
```
## Project Structure
```
src/
├── components/ => Common components that are used across the app.
├── navigations/ => All kinds of navigation.
├── redux/ => All reducers.
├── screens/
│   ├── {name}Screen => Each screen contains multiple folders that contains elements that belong to it.
│   │   ├── components/
│   │   ├── {more_folders} => For example __tests__, Hooks, etc.
│   │   └── index.js
├── services/ => Business logic for API calls, integrations, etc.
└── utils/ => Storing all utility functions, Themes, Langs, etc.
```
## System Info
```
System:
  OS: macOS 13.2.1
  CPU: (8) x64 Intel(R) Core(TM) i5-1038NG7 CPU @ 2.00GHz
Binaries:
  Node: 18.16.0
  npm: 9.5.1
  Watchman: 2023.05.08.00
Managers:
  CocoaPods: 1.12.1
SDKs:
  iOS SDK: iOS 16.4
  Android SDK: 33.0.0
IDEs:
  Android Studio: 2022.2 AI-222.4459.24.2221.9971841
  Xcode: 14.3/14E222b
Languages:
  Java: 11.0.19
npmPackages:
  react: 18.2.0
  react-native: 0.71.8
```
