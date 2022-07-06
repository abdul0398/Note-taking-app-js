let addbtn = document.getElementById('addBtn');
showNotes();
addbtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        savedNotesObj = [];
    } else {
        savedNotesObj = JSON.parse(notes);

    }
    savedNotesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(savedNotesObj));
    addTxt.value = '';
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    let html = '';
    if (notes == null) {
        savedNotesObj = [];
    }
    //converting savedNotesObj to object using JSON.parse
    else {
        savedNotesObj = JSON.parse(notes);

    }
    savedNotesObj.forEach(function (element, index) {
        html += `<div class="card-body">
    <h5 class="card-title">Note${index + 1}</h5>
    <p class="card-text">${element}</p>
    <a id="${index}" onclick = "remov(this.id)" class="btn btn-primary">Delete notes</a>
</div>`
    });
    let noteElm = document.getElementById('notes');
    if (savedNotesObj.length != 0) {
        noteElm.innerHTML = html;
    } else {
        noteElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes`
    }
}
function remov(index) {
    console.log(`working good ${index}`);
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
let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input', search);
function search() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        savedNotesObj = [];
    } else {
        savedNotesObj = JSON.parse(notes);
    }
    savedNotesObj.forEach(function (element) {
        if(!element.include(searchTxt.value)){
            element.style.display = 'none';

        }else{
            element.style.display = 'block';
        }
    })

}


