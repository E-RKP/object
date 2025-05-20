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

const dog = {
name: 'oli',
legs: 4,
color: 'red',
age: 5,
bark: function barking (){
  return 'woof woof';
}
}

console.log(dog)
dog.breed = 'lolling'
dog.getdoginfo = '/'


const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let massimo = 0
const npersone = Object.keys(users)

for (i=0; i<npersone.length;i++){

  
  if (users[npersone[i]].skills.length > massimo){
    massimo = users[npersone[i]].skills.length
  }
  
}

for (i=0; i<npersone.length;i++){
  if (massimo === users[npersone[i]].skills.length){
    massimo = users[npersone[i]]
  }
}
console.log(massimo)

let counter = 0
for (i=0; i<npersone.length;i++){
  if (users[npersone[i]].isLoggedIn === true && users[npersone[i]].points >= 50){
    counter++
  }
  
}
console.log(counter)


 let counterb = 0
const nomiUtente = Object.keys(users);
for (i=0; i<nomiUtente.length;i++){
 
  let skillss = users[nomiUtente[i]].skills
  for (j=0; j<skillss.length;j++){
    console.log(skillss[j])
    if (skillss[j] == 'JavaScript' && skillss[j] == 'HTML'){
     counterb++;

    }
  }
}
console.log(counterb)