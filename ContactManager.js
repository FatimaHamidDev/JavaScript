// In-memory data store
let contacts = [];
let nextId = 1;

// CREATE
function addContact(name, email) {
  const newContact = {
    id: nextId,
    name: name,
    email: email
  };

  contacts.push(newContact);
  nextId++;

  console.log("Contact added:", newContact);
}

// READ
function listContacts() {
  console.log("\nAll Contacts:");
  contacts.forEach(function (contact) {
    console.log(
      "ID:", contact.id,
      "| Name:", contact.name,
      "| Email:", contact.email
    );
  });
}

// DELETE
function deleteContact(id) {
  const initialLength = contacts.length;

  contacts = contacts.filter(function (contact) {
    return contact.id !== id;
  });

  if (contacts.length < initialLength) {
    console.log("Contact deleted successfully.");
  } else {
    console.log("Contact not found.");
  }
}

// UPDATE
function updateContact(id, newName, newEmail) {
  const contact = contacts.find(function (c) {
    return c.id === id;
  });

  if (contact) {
    contact.name = newName;
    contact.email = newEmail;
    console.log("Contact updated:", contact);
  } else {
    console.log("Contact not found.");
  }
}

// Testing the system
addContact("Alice", "alice@email.com");
addContact("Bob", "bob@email.com");

listContacts();

updateContact(1, "Alice Smith", "alice.smith@email.com");

deleteContact(2);

listContacts();
