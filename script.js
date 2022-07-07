let addbtn = document.getElementById('addBtn');
showNotes();
addbtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    let titleText = document.getElementById('noteTitle')
    if (notes == null) {
        savedNotesObj = [];
    } else {
        savedNotesObj = JSON.parse(notes);

    }
    let myobj = {
        text: addTxt.value,
        title : titleText.value
    }
    savedNotesObj.push(myobj);
    localStorage.setItem('notes', JSON.stringify(savedNotesObj));
    addTxt.value = '';
    titleText.value = '';
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    let html = '';
    if (notes == null) {
        savedNotesObj = [];
    }
    else {
        savedNotesObj = JSON.parse(notes);
    }
    savedNotesObj.forEach(function (element, index) {        
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text"> ${element.text}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let noteElm = document.getElementById('notes');
    if (savedNotesObj.length != 0) {
        noteElm.innerHTML = html;
    } else {
        noteElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes`
    }
}
function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        savedNotesObj = [];
    } else {
        savedNotesObj = JSON.parse(notes);
    }
    savedNotesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(savedNotesObj));
    showNotes();

}
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }

    })
})

