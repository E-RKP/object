const persona = {

  nome: 'Luca',
  cognome: 'lol',
  età: 22,
  interessi: [0,1,2,3,4,5],
  indirizzo: {
    via: 'ciao ciao 19',
    capp: 28017
  },
  saluta: function saluto (){
    console.log('Ciao a tutti')
  }
}

console.log(persona.interessi[3])
persona.saluta();