document.addEventListener("DOMContentLoaded",()=>{//declaring global storage
let objGlobal;
//declaring nodes display(declared to be invoked globally)
const displayName=document.querySelector("#characterName");
const displayImage=document.querySelector("#characterImage");
const displayVotes=document.querySelector("#characterVote");
//form nodes declaration
const addForm=document.querySelector("#voteForm");
const voteInput=document.querySelector("#vote");
const reset=document.querySelector("#resetButton");
//declaring the server(end point)
const characters= " http://localhost:3000/characters";
//declaring the 
const characterBar=document.querySelector("#characterContainer");
//fetching the data from the server
fetch(characters)
.then((Response) => Response.json())
.then((data) =>{
    console.log(data);
    //displaying the characters of the array starting with the first array
    displayCharacter(data[0]);
    //iteration through each element of an array
    data.forEach((element) => {
        list(element);
    });
})
function list(charactersObj) {
    //creating of a new element in the DOM
    let characterSpan= document.createElement("Span");
    characterSpan.textContent =charactersObj.name;
    //appending new child node to the parent node
    characterBar.appendChild(characterSpan);
    //styling of the created child in the DOM
    characterSpan.style.fontSize="20px"
//adding event listeners to the span list
    characterSpan.addEventListener("click",()=> {
        displayCharacter(charactersObj);
    })

}
//diplaying the characters info on the UI
function displayCharacter(charactersObj){
    displayName.textContent=charactersObj.name;
    displayImage.src =charactersObj.image;
    displayVotes.textContent=charactersObj.votes;
    //Passing the charactersObj to the global scope for easy addition of the votes
    objGlobal=charactersObj;
//adding an event listener to the submit button(vote) 
    addForm.addEventListener('submit',(e) => {
        e.preventDefault()
        //addition of the votes
        objGlobal.votes += parseInt(voteInput.value);
        displayVotes.textContent = objGlobal.votes;
        //patch request which then changes the server without altering the original server
    
    });
}
})
