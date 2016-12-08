
var messageTextBox = document.getElementById("enterMessageTextBox");

var storingTheMessage;
messageTextBox.addEventListener('keypress', function(e) {

                          if(e.code === "Enter" ) {
                            var typedContent="";
                            var newVariable="";

                                // console.log("you hit the enter button")
                            // we want to take the text in the #messsagebox
                                typedContent += document.getElementById("enterMessageTextBox").value

                                //
                                console.log("this is typed content", typedContent)
                                //
                                // the text in the #messagebox will be saved- assign to a variable
                                // we can grab the value what is inside the html  and set this to the variable var typedContent
                                //
                                //

                           // this creates the container for typed content
                           //

                            newVariable += `<div class="messageBubble">
                                                 <div class="words">${typedContent} </div>
                                                   <button class="deleteThisMessage">buttonme</button>
                                             </div>`

                          //   // // //  and put iti into the #messagewrapper

                                document.getElementById("messageWrapper").innerHTML +=  newVariable

                                    clearContent()


                          }

                })
// this clears the typed content and we rule
function clearContent()
  {
   document.getElementById("enterMessageTextBox").value = "";
}


// deleteThisMessage.addEventListener('click', function(e) {
//     document.getElementById("messagebubble")
// }
