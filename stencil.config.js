exports.config = {
  // namespace: 'BlImg',
  // generateDistribution: true,
  // generateWWW: false,
  bundles: [
    { components: ['bl-img'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
