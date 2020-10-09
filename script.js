var activeTextBox;
var rowCount = 1;

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

function addRow(){
    var rowContainer = document.getElementById('row-container');
    var rowId = "row" + rowCount
    var rowWrapper = document.createElement('div');
    rowWrapper.classList.add('row');
    rowWrapper.classList.add('row-wrapper')
    rowWrapper.setAttribute('id', rowId);
    
    var column1 = document.createElement('div');
    var col1textbox = document.createElement('input')
    col1textbox.setAttribute('onclick', 'setActiveTextBox()')
    col1textbox.classList.add('col1-textbox')
    column1.appendChild(col1textbox)
    column1.classList.add('col-1');

    var column2 = document.createElement('div');
    var col2textbox = document.createElement('input')
    col2textbox.setAttribute('onclick', 'setActiveTextBox()')
    col2textbox.classList.add('col2-textbox')
    column2.appendChild(col2textbox)
    column2.classList.add('col-1');
    
    var column3 = document.createElement('div');
    var col3textbox = document.createElement('input')
    col3textbox.setAttribute('onclick', 'setActiveTextBox()')
    col3textbox.classList.add('col3-textbox')
    column3.appendChild(col3textbox)
    column3.classList.add('col-3');
    
    var column4 = document.createElement('div');
    var col4textbox = document.createElement('input')
    col4textbox.setAttribute('onclick', 'setActiveTextBox()')
    col4textbox.classList.add('col4-textbox')
    column4.appendChild(col4textbox)
    column4.classList.add('col-3');

    var column5 = document.createElement('div');
    var col5button = document.createElement('button')
    col5button.setAttribute('onclick', 'removeRow()')
    col5button.textContent = 'Remove Row'
    col5button.classList.add('remove-button')
    column5.appendChild(col5button)
    column5.classList.add('col-2');

    rowWrapper.appendChild(column1);
    rowWrapper.appendChild(column2);
    rowWrapper.appendChild(column3);
    rowWrapper.appendChild(column4);
    rowWrapper.appendChild(column5);

    rowContainer.appendChild(rowWrapper)
    rowCount++
    alert(rowCount)
}

function removeRow(){

}