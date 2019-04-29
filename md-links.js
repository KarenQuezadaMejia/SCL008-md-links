const fs = require('fs');
const fetch = require('node-fetch');
const comand = process.argv[2];
const FileHound = require('filehound');
//exports.links = links;

/* const files = FileHound.create()
  .paths('/Users/mac/Desktop/LABORATORIA/AFRONTEND/Prueba')
  .ext('md')
  .find(); */
 
//files.then(console.log);

/* fs.readFile('./README.md', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); */
////////////
const markdown = fs.readFileSync('README.md').toString();
const markdownLinkExtractor = require('markdown-link-extractor');
const links = markdownLinkExtractor(markdown);

links.forEach(function (link) {
    console.log(link);
});
/////////////////

/* files = FileHound.create()
  .paths('/Users/mac/Desktop/LABORATORIA/AFRONTEND')
  .paths('/Users/mac/Desktop/LABORATORIA/AFRONTEND')
  .paths('/Users/mac/Desktop/LABORATORIA/AFRONTEND')
  .ext('md')
  .find(); */

/* 	links.forEach(function (element) {
		fetch(element).then((res) => {
			console.log(res.url + "-" + res.status + "==>" + res.statusText);
		})
		.catch(error => {
			console.log(error.message)
		})
	});
	
	exports.links = links;	
console.log(fs.readFileSync(comand).toString());
console.log("============================================================================================");
console.log(process.argv[2]);
console.log(process.argv[1]);
console.log("============================================================================================");


 */


/*fs.readFile('./README.md', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});*/