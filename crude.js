let selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        const formData = readFormData();
        if (selectedRow === null) {
            insertNewRecord(formData);
        } else {
            updateFormData(formData);
        }
        resetForm();
    }
}

function readFormData() {
    return {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };
}

function insertNewRecord(data) {
    const table = document.getElementById("stdList").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.length);
    newRow.insertCell(0).innerHTML = data.id;
    newRow.insertCell(1).innerHTML = data.name;
    newRow.insertCell(2).innerHTML = data.email;
    newRow.insertCell(3).innerHTML = '<a onClick="onEdit(this)">Edit</a>';
    newRow.insertCell(4).innerHTML = '<a onClick="onDelete(this)">Delete</a>';
}

function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
}

function updateFormData(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('Are You Sure to DELETE this record?')) {
        const row = td.parentElement.parentElement;
        document.getElementById("stdList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    let isValid = true;
    const name = document.getElementById("name").value;
    
    if (name === "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        document.getElementById("nameValidationError").classList.add("hide");
    }
    
    return isValid;
}
