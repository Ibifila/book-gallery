let books = [
    {
        title: "American Marxism",
        coverdesign: '/img/american-marxism.jpg',
        author: 'Mark R. Levin',
        price: 'N5000'
    },
    {
        title: "Apples never fall",
        coverdesign: '/img/apples-never-fall.jpg',
        author: 'Liane Moriarty',
        price: 'N4800'
    },
    {
        title: "bewilderment",
        coverdesign: '/img/bewilderment.jpg',
        author: 'Richard Powers',
        price: 'N5200'
    },
    {
        title: "cloud cuckoo land",
        coverdesign: '/img/cloud-cuckoo-land.jpeg',
        author: 'Anthony Doerr',
        price: 'N3500'
    },
    {
        title: "harlem shuffle",
        coverdesign: '/img/harlem-shuffle.jpg',
        author: 'Colson Whitehead',
        price: 'N2900'
    },
    {
        title: "the jailhouse lawyer",
        coverdesign: '/img/jailhouse-lawyer.jpg',
        author: 'James Patterson',
        price: 'N4350'
    },
    {
        title: "last graduate",
        coverdesign: '/img/last-graduate.jpg',
        author: 'naomi novik',
        price: 'N2450'
    },
    {
        title: "no cure being human",
        coverdesign: '/img/no-cure-being-human.jpg',
        author: 'kate bowler',
        price: 'N3650'
    },
    {
        title: "peril",
        coverdesign: '/img/peril.jpg',
        author: 'bob woodward',
        price: 'N5500'
    },
    {
        title: "the wish",
        coverdesign: '/img/the-wish.jpg',
        author: 'nicholas sparks',
        price: 'N3600'
    },
    {
        title: "unrequited infatuations",
        coverdesign: '/img/unrequited-infatuations.jpg',
        author: 'stevie van zandi',
        price: 'N2950'
    },
    {
        title: "vanderbilt",
        coverdesign: '/img/vanderbilt.jpg',
        author: 'Anderson Cooper',
        price: 'N3550'
    }
];

const img = document.getElementById("book-img");
const author = document.getElementById("book-author");
const title = document.getElementById("book-title");
const price = document.getElementById("book-price");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// initialise item count
let currentBook = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const book = books[currentBook];
    img.src = book.coverdesign;
    author.textContent = book.author;
    title.textContent = book.title;
    price.textContent = book.price;
  });


  // load initial item
function showBook(bookCount) {
    const book = books[bookCount];
    img.src = book.coverdesign;
    author.textContent = book.author;
    title.textContent = book.title;
    price.textContent = book.price;
  };

// show next book
nextBtn.addEventListener("click", function () {
    console.log("1");
    currentBook++;
    if (currentBook > books.length - 1) {
      currentBook = 0;
    }
    showBook(currentBook);
  });

// show previous book
prevBtn.addEventListener("click", function () {
    console.log("2");
    currentBook--;
    if (currentBook < 0) {
      currentBook = books.length - 1;
    }
    showBook(currentBook);
  });


// let booksection = document.getElementById('book-wrapper');
// let html = "";


// books.forEach(e =>{
//     html += `
//             <div class="py-5 bg-warning rounded-3 text-center shadow mx-3 my-3">
//                 <div class="">
//                     <img src="img/${e.coverdesign}" alt="" class="img-fluid rounded-3 pb-3 px-3" width="350">
//                 </div>
//                 <div class="px-lg-4">
//                     <h3 class="text-uppercase text-wrap">${e.title}</h3>
//                     <h4 class="text-capitalize">${e.author}</h4>
//                     <h3>${e.Price}</h3>
//                 </div>
//             </div>
//     `
//     console.log(e)

//     booksection.innerHTML = html
// }) 