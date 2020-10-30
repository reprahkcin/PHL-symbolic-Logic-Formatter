var activeTextBox;


function insertIntoFormula(specialChar) {
    if(activeTextBox.nodeName == 'TEXTAREA' || activeTextBox.nodeName == 'INPUT'){

        let textarea = activeTextBox;
        const insertStartPoint = textarea.selectionStart;
        const insertEndPoint = textarea.selectionEnd;
        let value = textarea.value;
        // text before cursor/highlighted text + special character + text after cursor/highlighted text
        value = value.slice(0, insertStartPoint) + specialChar + value.slice(insertEndPoint);
        textarea.value = value;
        
    } else {
        alert('Where should this character be inserted?')
    }
}

function setActiveTextBox(){
    activeTextBox = document.activeElement
}

function submitProof(){
    alert("Submitted");
}

function clearTextBox(){
    if(activeTextBox != null)
    {
        let textarea = activeTextBox;
        textarea.value = ""
    }
}


function copyToClipboard() {
  let textarea = document.getElementById("text-area");
  if (activeTextBox != null) {
    /* Get the text field */
    var copyText = document.getElementById("text-area");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    //alert("Copied the text: " + copyText.value);
  }
}
