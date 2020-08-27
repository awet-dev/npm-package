
// onclick display the source of js cheat sheet

const userInput = document.querySelector("#first-name").value;
if (userInput) {
   document.querySelector("#btn").addEventListener("click", ()=> {
      alert(userInput);
   })
}
(function() {
   // to get the value of an input: document.getElementById("element-id").value
   let v1 = parseFloat(document.getElementById("op-one").value);
   let v2 = parseFloat(document.getElementById("op-two").value);

   const performOperation = function(operation) {
      // perform the operation
      switch (operation) {
         case "addition":
            alert(v1 + v2);
            break;
         case "subtraction":
            alert(v1 - v2);
            break;
         case "multiplication":
            alert(v1 * v2);
            break;
         case "division":
            alert(v1 / v2);
            break;
      }
   };

   Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
      $btn.addEventListener("click", function() {
         performOperation($btn.id);
      });
   });
})();
