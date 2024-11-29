module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // plugins: ['expo-router/babel'], //If necessary, you can break this line however it is not necessary
  };
};