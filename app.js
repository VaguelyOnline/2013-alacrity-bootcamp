// setTimeout(
//     () => alert(document.getElementById('title1').innerText),
//     20
// );

// alert(document.getElementById('title1').innerText);

function promptForRename(event) {

    // Prompt the user to rename the movie
    const name = prompt('Rename movie', event.target.innerText);

    // Update the DOM so that the title has the given name
    event.target.innerText = name;
}

// bind the click listener to all renameable things
function initClickHandlers() {
    const renameables = document.getElementsByClassName('renameable');
    for (let i = 0; i < renameables.length; i++) {
        renameables[i].onclick = promptForRename;
    }
}

initClickHandlers();




