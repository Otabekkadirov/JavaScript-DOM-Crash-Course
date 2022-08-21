// alert("hello world");

// ************************ EXAMINE THE DOCUMENT OBJECT ************************  //
// console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[14]);
// document.all[14].innerHTML = "Hello world"; // this is not the right method to change the dom

// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// ************************ Selectors ************************  //

// ************************ GETELEMENTBYID ************************  //
// console.log(document.getElementById("header-title"))
// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById("header");
// console.log(headerTitle);
// headerTitle.textContent = "Hello World!"; // textContent shu elementni ichidagi hamma textni ko'rsatadi.
// headerTitle.innerText = "Goodbye Mars!"; // innerText shu elementga qo'llanilgan stylelarga e'tibor beradi.
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText); // uppercase qilganimni ham chiqaradi
// headerTitle.innerHTML = "<h4>Hello World again!</h4>"; // bu ichiga HTML element soladi.
// console.log(headerTitle);
// headerTitle.style.borderBottom = "3px solid black";
// header.style.borderBottom = "3px solid black";
// header.style["border-bottom"] = "3px solid black";

// ************************ GETELEMENTSBYCLASSNAME ************************  //
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello world";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "lightgrey";

// // items.style.backgroundColor = "lightgrey"; // bu error beradi

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "lightgrey";
// }

// ************************ GETELEMENTSBYTAGNAME ************************  //
// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello world";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "lightgrey";

// // li.style.backgroundColor = "lightgrey"; // bu error beradi

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "lightgrey";
// }

// ************************ QUERYSELECTOR ************************  //
// Bu faqat bizga to'g'ri keladigan 1-elementni tanlab beradi.
// Bunda CSS da qo'llaydigan hamma selectorlarimizni ishlatishimiz mumkin.
// CSS dan farqi bunda faqat 1-elementni oladi.

// let header = document.querySelector("#header");
// header.style.borderBottom = "3px solid black";

// let input = document.querySelector("input");
// input.value = "Hello world";
// // Bizda 2 ta input tag i bo'lishiga qaramay, bu faqat 1-inputni oldi.

// let submit = document.querySelector(`input[type="submit"`);
// submit.value = "SEND";

// let item = document.querySelector(".list-group-item");
// item.style.color = "royalblue";

// let lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "tomato";

// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "gold";

// ************************ QUERYSELECTORALL ************************  //
// Bu esa biz so'ragan elementning hammasi topib beradi.
// NodeList qaytaradi.

// let titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Item qo'shish";

// let oddItems = document.querySelectorAll("li:nth-child(odd)");
// let evenItems = document.querySelectorAll("li:nth-child(even)");
// console.log(oddItems);
// for (let i = 0; i < oddItems.length; i++) {
//   oddItems[i].style.backgroundColor = "#f4f4f4";
//   evenItems[i].style.backgroundColor = "#cccccc";
// }

//
//
//
//
//
//
//

// Traversing the DOM //
// let itemList = document.querySelector("#items");
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children[0]);
// itemList.children[0].style.backgroundColor = "tomato";

// firstChild
// console.log(itemList.firstChild); // this is useless

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello world!";

// lastChild
// console.log(itemList.lastChild); // this is alse useless

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Goodbye!";

// nextSibling
// console.log(itemList.nextSibling); useless

// nextElementSibling
// console.log(itemList.nextElementSibling); there is no element after this element

// let titleText = document.querySelector(".title");
// // console.log(title.nextSibling);
// console.log(titleText.nextElementSibling.firstElementChild.value);
// titleText.nextElementSibling.firstElementChild.value = "hello";

// previousSibling
// console.log(itemList.previousSibling);

// previousSibling
// console.log(itemList.previousElementSibling);

// // Create a div
// let newDiv = document.createElement("div");

// // add a class
// newDiv.className = "hello";

// // add an id
// newDiv.id = "hello";

// // add attribute
// newDiv.setAttribute("title", "This is just a div");

// // Create a textNode
// let newDivText = document.createTextNode("Hello world!");

// // Add text to div
// newDiv.appendChild(newDivText);
// newDiv.style["font-size"] = "5rem";
// // console.log(newDiv);
// // console.log(newDivText);

// let wrapper = document.querySelector(".wrapper");
// let h1 = wrapper.querySelector("h1");

// wrapper.insertBefore(newDiv, h1);

// console.log(wrapper);

//
//
//
//
//
//
//
//
//
//
//
//
// ADDEVENTLISTENER //
// let button = document.getElementById("button");
// button.addEventListener("click", buttonClick);

// function buttonClick() {
//   //   console.log("Hello World");
// //   document.getElementById("header-title").textContent = "Changed";
// //   document.querySelector("#main").style.backgroundColor = "purple";
// }

// Exploring event
// function buttonClick(event) {
//   console.log(event);
//   console.log(event.target);
//   console.log(event.target.id);
//   console.log(event.target.style.width);
//
//   we can change the event.target properties
//   event.target.style.width = "50%";
//   event.target.style.margin = "0 auto";
//
//   we can see the event.target 's classes
//   console.log(event.target.className);
//   console.log(event.target.classList);
//   let output = document.getElementById("output");
//   output.innerHTML = `<h2>"${event.target.textContent}" button is clicked</h2>`;
//
//   console.log(event.type);
//
//   event.clientX and event.clientY are calculated from the browser
//   console.log(event.clientX);
//   console.log(event.clientY);
//
//   event.offsetX and event.offsetY are calculated from the element itself
//   console.log(event.offsetX);
//   console.log(event.offsetY);
//
//   console.log(event);
//   console.log(event.altKey);
//   console.log(event.ctrlKey);
//   console.log(event.shiftKey);
// }

// let button = document.getElementById("button");

// // button.addEventListener("click", runEvent);
// // button.addEventListener("dblclick", runEvent);
// // button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// function runEvent(e) {
//   console.log("Event type: " + e.type);
// }

let box = document.getElementById("box");

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);

// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);

box.addEventListener("mousemove", runEvent);

function runEvent(e) {
  console.log("Event type: " + e.type);
}
