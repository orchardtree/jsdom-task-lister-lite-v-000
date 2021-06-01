document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("input[type='submit']").addEventListener("click", function(event) {
           //document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
           event.preventDefault();
  }, false);
});
