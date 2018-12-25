// DOM Selection----------------------->

// [1] document.getElementById()
// -> Element

const judul = document.getElementById('judul');
judul.style.background = 'blue';


// [2] document.getElementsByTagName()
// -> HTMLCollections
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.background = 'lightblue';
    p[i].style.fontSize = '1.5rem';
};

// [3] document.getElementsByClassName
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.style.background = 'orange';

// [4] document.querySelector()
// -> Element 
const p4 = document.querySelector('#b p');
p4.style.background = 'orange';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.background = 'lightblue';


// [5] document.querySelectionAll()
// -> NodeList
const all = document.querySelectorAll('p');

let allJava = function() {
    for (let i = 0; i < all.length; i++) {
    all[i].innerHTML = 'javascript is The Best';
}};

let allOrange = function(){
    all.forEach(function(e, i){
        all[i].style.background = 'orange';
    });
};




// DOM Manipulation-------------------->
// -> manipulasi element

// [1] element.innerHTML
judul.innerHTML = 'Hallo, Sayyid.';

const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World';
// sectionA.style.background = 'lightblue';
// sectionA.style.fontSize = '1.5rem';
// const JSX = (
//     <div id="hello">
//         <h2>Hello World</h2>
//     </div>
//     <style>
//         #hello{
//             background: lightgrean;
//             fontSize: 2rem;
//         }
//     </style>
// );

// [2] element.style<properti>
judul.style.color = 'white';

// [3] element.setAttribute -> menambah attribute
// element.getAttribute -> mengetahui attribute
// element.removeAttibute -> menghapus attribute
const a = document.getElementsByTagName('a')[0];
a.setAttribute('href', '#');
//p1.innerHTML = '<a href="#">Link</a>';

const p2 = document.querySelector('.p2');
//p2.setAttribute('class','label'); // -> punya kelemahan

// [4] element.classList -> untuk mengelola attribute class
// -> .add(menambah), .remove(menghapus), .toggle(menambah/menghapus), 
// -> .item(mengetahui class ke-n), .contains(cek kepunyaan class), replece(mengganti)
p2.classList.toggle('label');






// DOM manipulation 2--------------------->
// manipulasi NODE(simpul dalam root{Dom tree}) 

// [1] document.createElement()
// [2] document.createTextNode()
// [3] node.appendChild() -> simpan ke akhir element parent
// [4] node.insertBefore()
// [5] parentNode.removeChild()
// [6] parentNode.replaceChild()

// -> membuat paragraf baru

// buat element baru
const newP = document.createElement('p');
const newPText = document.createTextNode('New Text');
// menambah newPText ke newP 
newP.appendChild(newPText);
// menambah newP ke sectionA -> 56
sectionA.appendChild(newP);
newP.style.background = 'orange';



// -> membuat li [DIANTA] li1-li2 
const newLi = document.createElement('li');
const newLiText = document.createTextNode('New Item');
newLi.appendChild(newLiText);

const ul = document.querySelector('section#b ul');
//const li2 = ul.querySelector('li:nth-child(2)'); -> 28

ul.insertBefore(newLi, li2);
newLi.style.background = 'orange';

// -> hapus element anak
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);



// -> replaceChild 
const SectionB = document.getElementById('b');
// const p4 = document.querySelector('section#b p'); -> 25

const newH2 = document.createElement('h2');
const newH2Text =  document.createTextNode('JUDUL BARU');

newH2.appendChild(newH2Text);

SectionB.replaceChild(newH2, p4);

// Metode Manipuasi baru
// [1] parentNode.append()
// [2] parentNode.prepend()
// [3] childNode.before()
// [4] childNode.after()
// [5] childNode.replaceWhit()
// [.]




// DOM Events----------------------------->
// sumber => https://developer.mozilla.org/en-US/docs/Web/Events
// [1] Event Handler {inline HTML attribute, Element Metode}
// on<event> -> on click

const li4 = document.querySelector('#b ul li:nth-child(4)');
function ubahWarna(){
    li4.style.background = 'orange';
};



// [2] addEventListener
