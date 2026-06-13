 //26
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

child.addEventListener("click", () => {
    console.log("Child clicked");
});

<div id='parent'><span id='child'>click</span></div> 
const parent = document.getElementById("parent");   

//27 
Refrence error 

//28


//29 
null

//30 
0

//31
Sirf ID chahiye → getElementById()
 Class, tag, attribute ya selector chahiye → querySelector()

 //32
 fired
fired

//33
input real-time event hai, jabki change tab fire hota hai jab value change hone ke baad user field se bahar nikalta hai.

//34

//35


//36


//37
vannila js 
<p id="para">Hello World</p>
<button id="btn">Change</button>

 javascript 
 const para = document.querySelector('#para');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  para.textContent = 'Text Change Ho Gaya';
  para.style.backgroundColor = 'yellow';
});

//38 


//39 


//40 



//41



//42
<p>Session: <span id="s"></span></p>
<p>Local: <span id="l"></span></p>

<button onclick="sessionStorage.c=(+sessionStorage.c||0)+1; s.textContent=sessionStorage.c">
  Session +1
</button>

<button onclick="localStorage.c=(+localStorage.c||0)+1; l.textContent=localStorage.c">
  Local +1
</button>

<script>
s.textContent = sessionStorage.c || 0;
l.textContent = localStorage.c || 0;
</script>



//74 
after click

//75
const box = document.body.appendChild(document.createElement("div"));
box.style = "position:fixed;top:10px;right:10px";

const toast = {
  show(msg, type="success", ms=3000) {
    const t = document.createElement("div");
    t.innerHTML = `${msg} <button>✖</button>`;
    t.style = `
      margin:5px;padding:10px;color:#fff;
      background:${{
        success:"green",
        error:"red",
        warning:"orange"
      }[type]}
    `;

    t.querySelector("button").onclick = () => t.remove();
    box.appendChild(t);

    setTimeout(() => t.remove(), ms);
  }
};

// Usage
toast.show("Saved!", "success", 2000);
toast.show("Error!", "error", 3000);
toast.show("Warning!", "warning", 4000);




//78 
<input id="task" placeholder="Add task">
<button onclick="addTodo()">Add</button>

<button onclick="filter='all';render()">All</button>
<button onclick="filter='active';render()">Active</button>
<button onclick="filter='done';render()">Done</button>

<ul id="list"></ul>

<script>
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filter = "all";

const save = () => localStorage.setItem("todos", JSON.stringify(todos));

function addTodo() {
  const text = task.value.trim();
  if (!text) return;
  todos.push({ text, done: false });
  task.value = "";
  save(); render();
}

function render() {
  list.innerHTML = "";
  todos
    .filter(t => filter==="all" || (filter==="done"?t.done:!t.done))
    .forEach((t, i) => {
      list.innerHTML += `
        <li>
          <input type="checkbox" ${t.done?'checked':''}
            onchange="todos[${i}].done=!todos[${i}].done;save();render()">

          <span contenteditable="true"
            onblur="todos[${i}].text=this.textContent;save()"
            style="text-decoration:${t.done?'line-through':'none'}">
            ${t.text}
          </span>

          <button onclick="todos.splice(${i},1);save();render()">❌</button>
        </li>`;
    });
}

render();
</script>
//84
no output 

//87
<p id="text">Hello World</p>
<button id="copyBtn">Copy to clipboard</button>

<script>
const btn = document.getElementById("copyBtn");

btn.onclick = async () => {
  const text = document.getElementById("text").textContent;

  try {
    await navigator.clipboard.writeText(text);
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy to clipboard", 2000);
  } catch {
    alert("Clipboard access denied. Copy manually.");
  }
};
</script>

//98 
""