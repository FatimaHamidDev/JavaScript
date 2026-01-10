// Application State

let formFields = [];


// Add New Field

function addField(type) {
    const field = {
        id: Date.now(),
        type,
        label: `${capitalize(type)} Field`,
        required: false,
        options: type === "select" ? ["Option 1", "Option 2"] : []
    };

    formFields.push(field);
    renderForm();
}

// Render Form Preview

function renderForm() {
    const form = document.getElementById("formPreview");
    form.innerHTML = "";

    formFields.forEach(field => {
        const wrapper = document.createElement("div");
        wrapper.className = "form-field";

        const label = document.createElement("label");
        label.textContent = field.label + (field.required ? " *" : "");

        let input;
        if (field.type === "textarea") {
            input = document.createElement("textarea");
        } else if (field.type === "select") {
            input = document.createElement("select");
            field.options.forEach(opt => {
                const option = document.createElement("option");
                option.textContent = opt;
                input.appendChild(option);
            });
        } else {
            input = document.createElement("input");
            input.type = field.type;
        }

        const actions = document.createElement("div");
        actions.className = "field-actions";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editField(field.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteField(field.id);

        actions.append(editBtn, deleteBtn);
        wrapper.append(label, input, actions);
        form.appendChild(wrapper);
    });
}

// Edit Field

function editField(id) {
    const field = formFields.find(f => f.id === id);
    const newLabel = prompt("Enter field label:", field.label);
    const required = confirm("Make this field required?");

    if (newLabel !== null) {
        field.label = newLabel;
        field.required = required;
        renderForm();
    }
}

// Delete Field

function deleteField(id) {
    formFields = formFields.filter(f => f.id !== id);
    renderForm();
}

// Export JSON

document.getElementById("exportBtn").addEventListener("click", () => {
    document.getElementById("jsonOutput").textContent =
        JSON.stringify(formFields, null, 2);
    document.getElementById("jsonModal").style.display = "flex";
});

function closeModal() {
    document.getElementById("jsonModal").style.display = "none";
}

// Utilities

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
