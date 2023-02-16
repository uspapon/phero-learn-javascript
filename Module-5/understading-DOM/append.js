// step 1: where to add
const placesList = document.getElementById('places-list');
// console.log(placesList);

// step 2: what to add
const newPlaceLI = document.createElement('li');
newPlaceLI.innerText = "pahartoli bon";

// step 3: add the newly created child
placesList.appendChild(newPlaceLI);


// where to add
const mainContainer = document.getElementById('main-container');
//console.log(mainContainer);
const section2 = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Dress List";
section2.appendChild(h1);

const ul = document.createElement('ul');
const li = document.createElement('li');
li.innerText = "Skirt-top";
ul.appendChild(li);

const li2 = document.createElement('li');
li2.innerText = "Garara";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Pant-top';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'selwar-kamiz';
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.innerText = 'western-gown';
ul.appendChild(li5);

const li6 = document.createElement('li');
li6.innerText = 'long shirt-divider';
ul.appendChild(li6);

section2.appendChild(ul);
mainContainer.appendChild(section2);

/* --------------------------------------------------------------------
 another way to create a html section using javascript
 *set innerHtml directly
 ----------------------------------------------------------------------*/
 const sectionAccessories = document.createElement('section');
 sectionAccessories.innerHTML = `
 <h1>My Accessories List </h1>
 <ul>
    <li>Watch</li>
    <li>Bag</li>
    <li>Bangle</li>
    <li>Necklace</li>
    <li>Eare Ring</li>
 </ul>
 `;

 mainContainer.appendChild(sectionAccessories);

