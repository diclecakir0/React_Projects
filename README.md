<h1>CRUD APP</h1>

<h3>Create Read Update Delete</h3>

<ul>
<li>Include Bootstrap in the project > Add Bootstrap CDN to index.html</li>

<li>1- Create a form to get the new element to be added: take the data from the form and pass it to the state. When the add button is clicked, create a new object with the information entered in the form. The values of the created object will include: date, bookName, id, and isRead. Add the object to an array called books. After the object is created, reset the input fields</li>

<li>2- Get the books stored in the books state and list them using the map method (display on the screen). If the state is empty, display 'No books added yet' on the screen. Pass the book information as a prop to the BookCard component. The BookCard component should display all the details related to the book</li>

<li>3- Delete Book: When the delete button of a book is clicked, the ID of the book to be deleted should be passed to the function. The function should take the received ID as a parameter, filter out the objects that do not have the matching ID, and store them in a new array. Then, update the state with the resulting array</li>

<li>4- Mark the Book as Read;
Send the book to the function when the 'Read' button is clicked, toggle the isRead value of the book, find the element in the array that needs to be updated, remove that element and add the updated one in its place.
</li>

<li>
5- Perform the editing operation;
- When the 'Edit' button is clicked, a modal should appear on the screen and pass the book to be edited to app.js (as editItem)
- In the modal: There is an input field to change the book's name, and every time the input changes, it updates the editItem variable and passes it to app.js.
- Cancel Button > Closes the modal
- Save Button > Triggers the handleEditBook function in app.js
- The function removes the old element from the array and replaces it with the new one
</li>
</ul>
# React_Projects
# ReactProjects
