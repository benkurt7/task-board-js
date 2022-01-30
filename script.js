function create_starting_note() {  /* create a note that appears on page load */
    let startNote = document.createElement('div');
    let text = document.createElement('div');
    let node = document.createTextNode('This note board is designed for left-to-right languages.\xa0\xa0\xa0\xa0\xa0 Enjoy');
    text.appendChild(node);
    startNote.appendChild(text);
    text.className = 'taskClass';
    startNote.className = 'noteClass w3-animate-opacity';
    document.getElementById('notesDiv').appendChild(startNote);

    /* this is the close button for that note : */
    let span = document.createElement("SPAN"); /* create a span for close button */
    span.className = "close glyphicon glyphicon-remove"; /* give span some stye */
    startNote.appendChild(span); /* attach span to the new note that was created */
    span.onclick = function () {
        startNote.parentElement.removeChild(startNote); /* make span delete note when clicked */
    }

}
/* this section is all about me trying to save the notes unsuccessfully */
function onloadFunction() {

    create_starting_note();

}
var localData;

function uploadNotes() {
    localData = JSON.parse(localStorage.getItem('myNotes'));
    document.getElementById('notesDiv').innerHTML = localData.myNotes;
}

function saveNotes() {
    document.getElementById('save_button').disabled = true;

    var theBoard = document.getElementById('notesDiv').innerHTML;

    localStorage.setItem('myNotes', JSON.stringify(theBoard));

}

/* this function starts when user clicks on + button */
function add_2_board() {
    var getTask = document.getElementById('task_input').value; /* get task from user input */
    var getDate = document.getElementById('target_date_input').value; /* get date from input */

    if (getTask === '' || getDate === '') {alert('Please fill all the required fields to generate a note')}
    else {
    var notesDiv = document.getElementById('notesDiv'); /* grab div which contains the finished notes  */
    var newNote = document.createElement('div'); /* create a div element to put a note contant in */
    var dateDiv = document.createElement('div'); /* create div for date */
    var timeDiv = document.createElement('div'); /* create div for time */
    var taskDiv = document.createElement('div'); /* create div for task */
    var txtNode = document.createTextNode(getTask); /* create text from user task input field */
    let timeNode = document.createTextNode(document.getElementById('target_time_input').value); /* create text node from time input */
    let dateNode = document.createTextNode(getDate); /* create a text node and attach date to it(var dateTxt) */

    taskDiv.appendChild(txtNode);
    dateDiv.appendChild(dateNode); /* attach date node to new div */
    timeDiv.appendChild(timeNode);
    newNote.appendChild(taskDiv); /* attach text to note */
    newNote.appendChild(dateDiv) /* attach new div to new note */
    newNote.appendChild(timeDiv);
    notesDiv.appendChild(newNote); /* attach note to new div that was created */

    newNote.className = "noteClass w3-animate-opacity"; /* apply classes*/
    dateDiv.className = 'dateClass';
    timeDiv.className = 'timeClass';
    taskDiv.className = 'taskClass';


    /* this is the close button : */
    let span = document.createElement("SPAN"); /* create a span for close button */
    // let closeX = document.createTextNode("\u00D7"); /* create fancy X button */
    span.className = "close glyphicon glyphicon-remove"; /* give span some stye */
    // span.appendChild(closeX); /* attach fancy X button to span */
    newNote.appendChild(span); /* attach span to the new note that was created */
    span.onclick = function () {
        newNote.parentElement.removeChild(newNote); /* make span delete note when clicked */
    }

    /* clear inputes */
    document.getElementById('task_input').value = '';
    document.getElementById('target_date_input').value = '';
    document.getElementById('target_time_input').value = '';

}
}

/* clear fields button */
function clear_fields() {
    document.getElementById('task_input').value = '';
    document.getElementById('target_date_input').value = '';
    document.getElementById('target_time_input').value = '';
}



