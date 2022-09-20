let title = document.createElement('h1');
title.innerText = 'List of Pokemon'
document.body.append(title);

let container = document.createElement('div');
container.id = 'container';
document.body.append(container);

let pokeList = document.createElement('ul');
pokeList.id = 'pokemon-list';
container.append(pokeList)


fetch('https://pokeapi.co/api/v2/pokemon')
  .then(res => res.json())
  .then(pokemon => {
    console.log(pokemon.results);
    pokemon.results.forEach(element => console.log(element.name))
    pokemon.results.forEach(element => {
      let newPoke = document.createElement('li');
      newPoke.innerText = `${element.name}`
      pokeList.append(newPoke);
    })
  });