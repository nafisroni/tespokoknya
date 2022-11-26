import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#drawerNav'),
    content: document.querySelector('#mainContent'),
    });

window.addEventListener('hashchange', () => {
    app.renderPage();
    });
    
window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
    });


// const restoList = document.querySelector('#restaurant-list');   

// const getListResto = () => {
//     fetch('../DATA.json').then(response =>{
//         return response.json();
//     }).then(responseJson =>{
//         showListResto(responseJson.restaurants);
//     }).catch(error =>{
//         console.error(error);
//     });
// }

// const showListResto = resto => {
//     restoList.innerHTML="";
//     resto.forEach(item =>{
//         const {name, description, pictureId,city,rating, id} = item;
//         restoList.innerHTML += `<div class="card" tabindex="0">
//                     <img src="${pictureId}" width="400px" alt="${id}">
//                     <span></span>
//                     <div class="rating">Rating : ${rating}</div>
//                     <div class="city">${city}</div>
//                         <div class="resto-name">
//                             <h4>${name}</h4>
//                         </div>
//                         <div class="description">
//                             <p>${description}</p>
//                         </div>
//                 </div>`
//     });
// }
// document.addEventListener('DOMContentLoaded', getListResto);

