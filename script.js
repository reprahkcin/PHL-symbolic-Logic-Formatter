function insertIntoFormula(specialChar) {
    const textarea = document.getElementById('text-area');
    const insertStartPoint = textarea.selectionStart;
    const insertEndPoint = textarea.selectionEnd;
    let value = textarea.value;
 
    // text before cursor/highlighted text + special character + text after cursor/highlighted text
    value = value.slice(0, insertStartPoint) + specialChar + value.slice(insertEndPoint);
    textarea.value = value;
}

function submitProof(){
    alert("Submitted");
}

function clearTextBox(){
    const textarea = document.getElementById('text-area');
    textarea.value = ""
}