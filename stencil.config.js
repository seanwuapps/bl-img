exports.config = {
  namespace: 'BlImg',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['bl-img'] }
  ],
  collections: []
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
