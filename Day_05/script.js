// const h1 = document.querySelectorAll('h1');
// console.log(h1);

// const btn = document.querySelector('button');
// console.log(btn);

// const li = document.querySelector('li');
// console.log(li);
// console.log(li.parentElement);

const heading = document.getElementById('heading');


//for changing text content 
heading.textContent = "Hello india";

//innerHTML - for changing the html content of the element
const box = document.getElementById("box");
box.innerHTML = `<p>This is a box</p><br><button>Click me</button>`;

//createElement - for creating new elements
//getElementById - for selecting the element by id
const list = document.getElementById('list');
const li = document.createElement('li');
li.textContent = "My Value is ac";
//appendchild - for adding the new element to the DOM
list.appendChild(li);

const btn = document.getElementById('btn');
btn.addEventListener('click', ()=>
     {
        console.log("Button clicked");
});

const btn = document.getElementById('addBtn');
btn.addEventListener('click', () => {
    const input = document.getElementById('input');
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
});

