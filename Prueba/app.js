/* const fs = require('fs');
const fetch = require('node-fetch');
const comand = process.argv[2];
const markdownLinkExtractor = require('markdown-link-extractor');
const markdown = fs.readFileSync(comand).toString();
const links = markdownLinkExtractor(markdown); */
const FileHound = require("filehound");
//const mdLinks = require("./md-links");

const files = FileHound.create()
  .paths('/Users/mac/Desktop/LABORATORIA/AFRONTEND/SCL008-md-links/Prueba')
  .ext('md')
  .find();
 
files.then(console.log);
//console.log(files)
