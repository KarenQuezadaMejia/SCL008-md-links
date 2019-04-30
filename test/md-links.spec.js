const mdLinks = require('../md-links');


describe('readFilesAs', () => {
  it('deberia retornar un link que se encuentra en md-links.js con la estructura "res.url + "-" + res.status + "==>" + res.statusText"',()=>{
    expect(readFileAs ('"https://github.com/workshopper/how-to-npm-200"')).resolve.toBe(True);        
  });
})
