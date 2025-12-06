// Selecting the buttons and container div
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
let container = document.getElementById("container");
// ADD PARAGRAPH FUNCTION
addBtn.addEventListener("click", function () {
    // Create a new <p> element
    let para = document.createElement("p");
    // Add text inside the paragraph
    para.textContent = "This is a new paragraph.";
    // Append the paragraph to the container div
    container.appendChild(para);
});
// REMOVE LAST PARAGRAPH FUNCTION
removeBtn.addEventListener("click", function () {
    // Check if container has child paragraphs
    if (container.lastChild) {
        // Remove the last added paragraph
        container.removeChild(container.lastChild);
    }
});
