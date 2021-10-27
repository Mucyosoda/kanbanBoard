import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());

function fectchData() {
  fetch('https://pokeapi.co/api/v2/ability/4')
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data);
    });
  //   if (!Response.ok) {
  //     throw Error('Error');
  //   }
  //   console.log(Response.json);
  //   return Response.json();
  // })
  // .then((data) => {
  //   console.log(data.data);
  //   const html = data.data
  //     .map((user) => {
  //       return `<div class='user> <p>Name: ${user.pokemon.name}</p></div>`;
  //     })
  //     .join('');
  //   console.log(html);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
}
fectchData();
