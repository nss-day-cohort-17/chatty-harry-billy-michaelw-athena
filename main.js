
var messageTextBox = document.getElementById("enterMessageTextBox");

var storingTheMessage;
messageTextBox.addEventListener('keypress', function(e) {

    if(e.code === "Enter" ) {
      var typedContent="";
      var newVariable="";

          // console.log("you hit the enter button")
      // we want to take the text in the #messsagebox
          typedContent += document.getElementById("enterMessageTextBox").value

     // this creates the container for typed content
     //

      newVariable += `<div class="messageBubble">
                           <div class="words">${typedContent} </div>
                             <button class="deleteThisMessage">buttonMe</button>
                       </div>`

    //   // // //  and put iti into the #messagewrapper

          document.getElementById("messageWrapper").innerHTML +=  newVariable

              clearContent()
}
})
// var oneMessage = getElementById("messageBubble").innerHTML.value;
document.querySelector("body").addEventListener("click", deleteOneMessage);
function deleteOneMessage(e) {
  console.log(e)
  if (e.target.className === "deleteThisMessage") {
    e.parent = "";
}
}
// this clears the typed content and we rule
function clearContent()
  {
   document.getElementById("enterMessageTextBox").value = "";
}

// deleteThisMessage.addEventListener('click', function(e) {
//     document.getElementById("messagebubble")
// }
