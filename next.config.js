const withMDX = require('@next/mdx')();

module.exports = withMDX({
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  allowedDevOrigins: ['10.20.74.108'],
  // Optionally, add any other Next.js config below
  turbopack: {},
});
