
const labelInput = document.querySelector('.settings .option input[placeholder="User Email"]');
const placeholderInput = document.querySelector('.settings .option input[placeholder="Placeholder"]');
const formPreview = document.querySelector('.preview form');
const addButton = document.querySelector('.add-button');


function loadFields() {
    const fields = JSON.parse(localStorage.getItem('formFields')) || [];
    fields.forEach(({ label, placeholder }) => {
        addField(label, placeholder);
    });
}

function saveFields() {
    const fields = [];
    formPreview.querySelectorAll('.form-group').forEach(field => {
        fields.push({
            label: field.querySelector('label').textContent,
            placeholder: field.querySelector('input').placeholder
        });
    });
    localStorage.setItem('formFields', JSON.stringify(fields));
}


function addField(labelText, placeholderText) {
    const div = document.createElement('div');
    div.classList.add('form-group');

    const label = document.createElement('label');
    label.textContent = labelText;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholderText;

    div.appendChild(label);
    div.appendChild(input);
    formPreview.appendChild(div);
}

addButton.addEventListener('click', () => {
    const labelText = labelInput.value.trim() || 'New Field';
    const placeholderText = placeholderInput.value.trim() || 'Enter value';

    addField(labelText, placeholderText);
    saveFields(); 

    
    labelInput.value = '';
    placeholderInput.value = '';
});

document.addEventListener('DOMContentLoaded', loadFields);