export default {
  name: "hypercard-demo-app",
  slug: "hypercard-demo-app",
  version: "0.0.1",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    backgroundColor: "#000000",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/3abec357-9b60-4576-9a6e-7f2f1bb9f4a3",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "fakeco.test.demoapp",
  },
  android: {
    package: "fakeco.test.demoapp",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#000000",
    },
  },
  updates: {
    url: "https://u.expo.dev/3abec357-9b60-4576-9a6e-7f2f1bb9f4a3",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
  plugins: [
    [
      "expo-build-properties",
      {
        ios: {
          flipper: true,
        },
      },
    ],
  ],
  extra: {
    eas: {
      projectId: "3abec357-9b60-4576-9a6e-7f2f1bb9f4a3",
    },
  },
  owner: "codygod0812",
  jsEngine: "hermes",
};
