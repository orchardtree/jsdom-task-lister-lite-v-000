document.addEventListener("DOMContentLoaded", () => {
  // your code here
  event.preventDefault();
});

document.querySelector("#id-checkbox").addEventListener("click", function(event) {
         document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
         event.preventDefault();
}, false);
