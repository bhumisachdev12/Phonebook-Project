let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let editingIndex = null;

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const category = document.getElementById("category").value;

  const contact = { name, phone, email, address, category };

  if (editingIndex !== null) {
    contacts[editingIndex] = contact;
    editingIndex = null;
  } else {
    contacts.push(contact);
  }

  saveContacts();
  renderContacts();
  contactForm.reset();
});

searchInput.addEventListener("input", () => {
  renderContacts(searchInput.value);
});

function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function renderContacts(filter = "") {
  contactList.innerHTML = "<h2>Contact List</h2>";

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.phone.includes(filter)
  );

  filteredContacts.forEach((contact, index) => {
    const contactElement = document.createElement("div");
    contactElement.className = "contact";

    contactElement.innerHTML = `
            <div class="contact-details">
                <strong>${contact.name}</strong>
                <p>${contact.phone}</p>
                <p>${contact.email}</p>
                <p>${contact.address}</p>
                <p>${contact.category}</p>
            </div>
            <div class="contact-actions">
                <button class="edit" onclick="editContact(${index})">Edit</button>
                <button onclick="deleteContact(${index})">Delete</button>
            </div>
        `;

    contactList.appendChild(contactElement);
  });
}

function editContact(index) {
  const contact = contacts[index];
  document.getElementById("name").value = contact.name;
  document.getElementById("phone").value = contact.phone;
  document.getElementById("email").value = contact.email;
  document.getElementById("address").value = contact.address;
  document.getElementById("category").value = contact.category;

  editingIndex = index;
}

function deleteContact(index) {
  contacts.splice(index, 1);
  saveContacts();
  renderContacts();
}

renderContacts();