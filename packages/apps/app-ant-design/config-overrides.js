const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',//按需引入，使用antd可以
    libraryDirectory: 'es',
    style: 'css',
  }),
);
