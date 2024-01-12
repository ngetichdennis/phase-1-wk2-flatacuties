# Flatacuties
# Main Aim
The main of the code challenge practice array iteration,DOM manipulation,Events and server communication.
# Introdution
Flatacuties, is an app where you can vote for the cutest animal!.I used local API and building out the frontend for the app, Flatacuties.I used Javascript main to achieve the main aim of the task.
# Setup
TO make the project moving,I run  the backend factionality to access the server from the terminal
     json-server --watch db.json
once the server is open,open the directory holding the files of the project eg index.html,index.js,db.json,style.css.
# Development and running of the app
coding of the index.html to generate the DOM which acts as the user interface.Index.html holds section blocks of the app,the header the character span,the character info and the voting form section. This is followed by opening index.html using the live server.

From the browser,DOM manipulation will be easy using Javascript.Index.js contains the major code section for the testing and running of the app.
=>The application starts with fetching data with from the server using ftech() comand.
# GET DATA
 const characterBar=document.querySelector("#characterContainer");
//fetching the data from the server
fetch(characters)
.then((Response) => Response.json())
.then((data) =>{
    console.log(data);

1. Creating new element containing the animal list in the DOM using a function and calling it back in .then(). followed by iterating through each element in the array list.
# (DOM MANIPULATION)
# ITERATION
//iteration through each element of an array
    data.forEach((element) => {
        list(element);
    });
})
# CREATING CHILD NODE TO THE PARENT NODE
function list(charactersObj) {
    //creating of a new element in the DOM
    let characterSpan= document.createElement("Span");
    characterSpan.textContent =charactersObj.name;
    //appending new child node to the parent node
    characterBar.appendChild(characterSpan);
    //styling of the created child in the DOM
    characterSpan.style.fontSize="20px"
//adding event listeners to the span list
=>Creating a rendering function which which is tasked at displaying each animal name,the image and the votes total for each animal onclick of each animal.
# EVENT CREATION(CLICK)
 characterSpan.addEventListener("click",()=> {
        displayCharacter(charactersObj);
    })

=>adding of events onto the DOM such that on clicking each animal the display will be rendered on the screen  and also adding an event listener to the submit button.
# ADDITION OF EVENT LISTENER TO THE VOTING FORM
addForm.addEventListener('submit',(e) => {
        e.preventDefault()
        //addition of the votes
        objGlobal.votes += parseInt(voteInput.value);
        displayVotes.textContent = objGlobal.votes;
})
# Testing of the API
the application managed to communicate with the server and can be seen when the API is opened from the live server.The results can be views from 
# flatacuties.PNG


# complexity of the API
the time respoond is super quick because the data load is less and takes minimal space.
# Conclusion
I achieved all with a bonous deliverable of the CSS FILE which makes the code prettier but I ought to improve it more by adding more deliverables like adding a form which will add new objects to the db.json