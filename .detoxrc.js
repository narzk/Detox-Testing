module.exports = {
  devices: {
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_5_API_30_AOSP',
      },
    },
  },
  apps: {
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
    },
    // 'android.release': {
    //   type: 'android.apk',
    //   binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
    //   build:
    //     'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ..',
    // },
  },
  configurations: {
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
    },
    // 'android.emu.release': {
    //   device: 'emulator',
    //   app: 'android.release',
    // },
  },
};
