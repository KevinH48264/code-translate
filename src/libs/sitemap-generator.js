// Attempt at creating a sitemap, but ran into issues with babel and eslint
// Currently unnecessary for single page applications.
// Usage: node site-map-generator.js to create a .xml file


//Babel allows us to convert modern js code into backwards compatible versions
//This includes converting jsx into browser-readable code

// const es2015 = require('babel-preset-es2015');
// const presetReact = require('babel-preset-react');
// require("babel-register")({
//   presets: [es2015, presetReact]
// });

// require.extensions['.css'] = function () {
//     return null;
// };

// //Import our routes
// const router = require("../App").default;
// const Sitemap = require("react-router-sitemap").default;

// function generateSitemap() {
//   return (
//   new Sitemap(router())
//   .build("https://www.example.com")
//  //Save it wherever you want
//   .save("../public/sitemap.xml")
//   );
// }

// generateSitemap();