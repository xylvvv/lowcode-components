module.exports = {
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@hosi/admin',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
        style: false,
      },
      '@hosi/admin',
    ],
  ],
};
