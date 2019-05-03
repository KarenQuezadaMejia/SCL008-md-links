const mdLinks = require('../md-links');


describe('readFilesAs', () => {
  it('deberia retornar un link que se encuentra en ./README.md',()=>{
    expect(mdLinks.readFileAs ('md-links ./README.md https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5?gi=f1b5fc961b75')).resolve.toBe([True]);        
  })
});

/* it('deberia retornar "res.url + "-" + res.status + "==>" + res.statusText"',()=>{
  expect(readFileAs ('https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5?gi=f1b5fc961b75-200==>OK')).resolve.toBe(True);    */
