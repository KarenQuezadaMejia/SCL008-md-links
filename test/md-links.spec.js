const mdLinks = require('../md-links');


describe('readFilesAs', () => {
  it('deberia retornar links archivo ruta absoluta',()=>{
    expect(readFileAs ('https://es.wikipedia.org/wiki/Node.js')).resolve.toBe(True);        
  })
})
