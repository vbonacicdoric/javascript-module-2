/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
 function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((element) => {
    const namePersona = document.createElement("h1");
    const jobPersona = document.createElement("h2");

    namePersona.textContent = element.name;
    jobPersona.textContent = element.job;
    content.append(namePersona, jobPersona);
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  let content = document.querySelector("#content");
  const listContainer = document.createElement("ul");
  shopping.forEach((element) => {
    const listItem = document.createElement("li");

    listItem.textContent = element;
    listContainer.append(listItem);
  });
  content.appendChild(listContainer);
}

/**
 I'd like to display my three favorite books inside a nice webpage!
 
 const books = [
   {
     title: "The Design of Everyday Things",
     author: "Don Norman",
     alreadyRead: false
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      alreadyRead: true
    }
  ];
  
  Iterate through the array of books.
  - For each book, create a <p> element with the book title and author and append it to the page.
  - Use a <ul> and <li> to display the books.
  - Add an <img> to each book that links to a URL of the book cover.
  - Change the style of the book depending on whether you have read it (green) or not (red).
  
  The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
  **/
function exerciseThree(books) {
  //Write your code in here
  let content = document.querySelector("#content");
  const listContainer = document.createElement("ul");
  listContainer.className = "books-list";
  books.forEach((element) => {
    const bookContainer = document.createElement("li");
    const bookDescription = document.createElement("p");
    const bookPicture = document.createElement("img");

    if (element.alreadyRead === true) {
      bookContainer.style.background = "green";
    } else {
      bookContainer.style.background = "red";
    }
    bookPicture.src = element.picture;

    bookDescription.textContent = element.title + " " + element.author;
    bookContainer.append(bookPicture, bookDescription);
    listContainer.append(bookContainer);
  });
  content.append(listContainer);
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    picture: "https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    picture: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    picture:
      "https://images-na.ssl-images-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg",
  },
];

exerciseThree(books);
