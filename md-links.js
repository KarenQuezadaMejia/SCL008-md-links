
const fs = require('fs');
const fetch = require('node-fetch');
const comand = process.argv[2];
const markdownLinkExtractor = require('markdown-link-extractor');
const markdown = fs.readFileSync(comand).toString();
const links = markdownLinkExtractor(markdown);

links.forEach(function (element) {
	fetch(element).then((res) => {
		console.log(res.url + " " + res.status + " " + res.statusText);
	})
	.catch(error => {
		console.log(error.message)
	})
});

exports.links = links;

/*fs.readFile('./README.md', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});*/