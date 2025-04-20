// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
const { triplitMetroConfig } = require("@triplit/react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

const triplitConfig = triplitMetroConfig(config);

const nativewindConfig = withNativeWind(triplitConfig, {
  input: "./styles/global.css",
});

module.exports = nativewindConfig;
