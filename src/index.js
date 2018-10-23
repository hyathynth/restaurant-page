import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const content = document.getElementById('content');

const tabBar = document.createElement('div');

function createButton(name, id) {
    let button = document.createElement('button');
    button.innerHTML = name;
    button.id = id;
    return button;
}
var homeBtn = createButton('Home', 'homeBtn');
var menuBtn = createButton('Menu', 'menuBtn');
var contactBtn = createButton('Contact', 'contactBtn');

tabBar.appendChild(homeBtn);
tabBar.appendChild(menuBtn);
tabBar.appendChild(contactBtn);

content.appendChild(tabBar);

//load home page by default
document.getElementById('homeBtn').classList.add('button');
loadHome(document.getElementById('content'));

//click event
document.getElementById('homeBtn').addEventListener('click', function (e) {
    document.querySelectorAll('button').forEach((elt) => elt.classList.remove('button'));
    e.target.classList.add('button');
    document.querySelectorAll('.subcontent').forEach((elt) => elt.remove());
    loadHome(document.getElementById('content'));
});

document.getElementById('menuBtn').addEventListener('click', function (e) {
    document.querySelectorAll('button').forEach((elt) => elt.classList.remove('button'));
    e.target.classList.add('button');
    document.querySelectorAll('.subcontent').forEach((elt) => elt.remove());
    loadMenu(document.getElementById('content'));
});

document.getElementById('contactBtn').addEventListener('click', function (e) {
    document.querySelectorAll('button').forEach((elt) => elt.classList.remove('button'));
    e.target.classList.add('button');
    document.querySelectorAll('.subcontent').forEach((elt) => elt.remove());
    loadContact(document.getElementById('content'));
});
