const form = document.getElementById("add-form");
const itemList = document.getElementById("items");
const filter = document.getElementById("search");

// Form submit event
form.addEventListener("submit", addItem);
// Delete item
itemList.addEventListener("click", removeItem);
// Filter item
filter.addEventListener("input", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  const itemInput = document.getElementById("item-input");
  const newItem = document.createTextNode(itemInput.value);
  // Create new li element
  const li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(newItem);
  // Create delete button
  const deleteButton = document.createElement("button");
  // Add classes to delete button
  deleteButton.className = "button delete-button";
  // Add X to delete button
  deleteButton.appendChild(document.createTextNode("X"));
  // Add delete button to the li
  li.appendChild(deleteButton);
  // Add li to the list
  itemList.appendChild(li);
}

// Delete item
function removeItem(e) {
  if (e.target.id === "delete-button") {
    const li = e.target.parentElement;
    itemList.removeChild(li);
  }
}

// Filter items
function filterItems(e) {
  // Convert text to lowercase
  const text = e.target.value.toLowerCase();
  // Get lis
  const items = itemList.querySelectorAll("li");
  items.forEach((item) => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
