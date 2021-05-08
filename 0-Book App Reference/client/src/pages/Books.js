import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";


// * Open up `client/src/pages/Books.js` and add code so that when the component mounts, it performs an AJAX request to retrieve all of the books in the database. Once the AJAX request is complete, it should set `books` equal to the array of books.

// * If successful, a list of books should be rendered on the right side of the page.

//   * We'll work on making the form functional in the next activity.

// ## Hints

// * Use the API helper module (`client/src/utils/API.js`) to perform an AJAX request which should return _all_ of the books in the database.

// * The only file you will need to modify is `client/src/pages/Books.js`.

// Read through Readme - Only need to update `Books.js` (/client/src/pages/Books.js)
// Setup a useState for a formObject  [formObject, setFormObject] = useState({})
// import API from "../utils/API"; And loadBooks will use the API.getBooks() function and “then” set the response to the books state setBooks(res.data)  
// We will need a handleInputChange that takes the {name, value } = event.target; and setFormObject({ ...formObject, [name]: value })
// We will need a handleFormSubmit that uses the API.saveBook function and THEN sends the formObject contents and resets the formObject properties to “”
// (BONUS) We will need deleteBook function that takes the book._id and uses the  API.deleteBook function

function Books() {
  // Initialize books as an empty array
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({
    // could set initial value
    //title: "", etc
  })

  useEffect(() => {
    loadBooks();
  }, []);


  function loadBooks() {
    // Add code here to get all books from the database and store them using setBooks
    API.getBooks()
      .then(res => {
        setBooks(res.data)
        console.log("BOOKS", res.data)
      })
      .catch(err => console.log(err));
  };

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    //could also be 
    // const name = event.target.name;
    // const value = event.target.value;
    setFormObject({...formObject, [name]: value });
    console.log("formObject", formObject);
  };

  //or could be written
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value });
  //   console.log("formObject", formObject);
  // }

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    //only run it if they exist:
    if(formObject.title && formObject.author) {
    API.saveBook(formObject)
    //could be API.savebook({
      // title: formObject.title;
      //author: formObject.author;
    // })
   
    .then(() => setFormObject({}))
    .then(() => loadBooks())
    .catch(err => console.log(err))
  }
}

function deleteBook(bookID){
  API.deleteBook(bookID)
  .then((res) => loadBooks())
  //we are not using response but we could
  .catch(err => console.log(err))
}

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
          <form>
            <Input name="title" placeholder="Title (required)" onChange={handleInputChange}/>

            {/* if pasing somthing in to handleinputchange would have to write it as a fat arrow functions {() => handleinputchange(whatyourpassingin)}*/}
            <Input name="author" placeholder="Author (required)"  onChange={handleInputChange}/>
            <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
            <FormBtn  
             disabled={!(formObject.author && formObject.title)}
            //  could put this diabled into a function and check other validation things like length etc
             onClick={handleFormSubmit}>
               Submit Book
               </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>
          {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book._id}>
                  <a href={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </a>
                  <DeleteBtn onClick={()=>deleteBook(book._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
