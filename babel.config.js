module.exports = function(api) {
  var validEnv = ['development', 'test', 'production']
  var currentEnv = api.env()
  var isDevelopmentEnv = api.env('development')
  var isProductionEnv = api.env('production')
  var isTestEnv = api.env('test')

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      'Please specify a valid `NODE_ENV` or ' +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' +
        JSON.stringify(currentEnv) +
        '.'
    )
  }

  return {
    presets: [
      isTestEnv && [
<<<<<<< HEAD
        require('@babel/preset-env').default,
=======
        '@babel/preset-env',
>>>>>>> 16f988531f3a2150200243474f6efa50ab16510d
        {
          targets: {
            node: 'current'
          }
        }
      ],
      (isProductionEnv || isDevelopmentEnv) && [
<<<<<<< HEAD
        require('@babel/preset-env').default,
=======
        '@babel/preset-env',
>>>>>>> 16f988531f3a2150200243474f6efa50ab16510d
        {
          forceAllTransforms: true,
          useBuiltIns: 'entry',
          corejs: 3,
          modules: false,
          exclude: ['transform-typeof-symbol']
        }
      ]
    ].filter(Boolean),
    plugins: [
<<<<<<< HEAD
      require('babel-plugin-macros'),
      require('@babel/plugin-syntax-dynamic-import').default,
      isTestEnv && require('babel-plugin-dynamic-import-node'),
      require('@babel/plugin-transform-destructuring').default,
      [
        require('@babel/plugin-proposal-class-properties').default,
=======
      'babel-plugin-macros',
      '@babel/plugin-syntax-dynamic-import',
      isTestEnv && 'babel-plugin-dynamic-import-node',
      '@babel/plugin-transform-destructuring',
      [
        '@babel/plugin-proposal-class-properties',
>>>>>>> 16f988531f3a2150200243474f6efa50ab16510d
        {
          loose: true
        }
      ],
      [
<<<<<<< HEAD
        require('@babel/plugin-proposal-object-rest-spread').default,
=======
        '@babel/plugin-proposal-object-rest-spread',
>>>>>>> 16f988531f3a2150200243474f6efa50ab16510d
        {
          useBuiltIns: true
        }
      ],
      [
<<<<<<< HEAD
        require('@babel/plugin-transform-runtime').default,
=======
        '@babel/plugin-transform-runtime',
>>>>>>> 16f988531f3a2150200243474f6efa50ab16510d
        {
          helpers: false,
          regenerator: true,
          corejs: false
        }
      ],
      [
<<<<<<< HEAD
        require('@babel/plugin-transform-regenerator').default,
=======
        '@babel/plugin-transform-regenerator',
>>>>>>> 16f988531f3a2150200243474f6efa50ab16510d
        {
          async: false
        }
      ]
    ].filter(Boolean)
  }
}
