// Get elements
let notes = document.getElementById("notes");
let saveBtn = document.getElementById("save");
let loadBtn = document.getElementById("load");
let clearBtn = document.getElementById("clear");

// Load notes automatically on page load
window.onload = function () {
    let saved = localStorage.getItem("notes");
    if (saved) {
        notes.value = saved;
    }
};

// Save notes
saveBtn.onclick = function () {
    if (notes.value.trim() === "") {
        alert("Cannot save empty notes!");
        return;
    }
    localStorage.setItem("notes", notes.value);
    alert("Notes Saved!");
};

// Load notes button
loadBtn.onclick = function () {
    let saved = localStorage.getItem("notes");
    if (saved) {
        notes.value = saved;
        alert("Notes Loaded!");
    } else {
        alert("No notes found!");
    }
};

// Clear notes
clearBtn.onclick = function () {
    localStorage.removeItem("notes");
    notes.value = "";
    alert("Notes Cleared!");
};
