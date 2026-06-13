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

