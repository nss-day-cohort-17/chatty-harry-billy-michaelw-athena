
var messageTextBox = document.getElementById("enterMessageTextBox");
var jsonData;

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
                             <button class="deleteThisMessage">deleteThisMessage</button>
                       </div>`



        newVariable += `<div class="from-me">
                          <span><div class="from-me">Me: </div>
                          <div class="words">${typedContent} </div>
                           <button class="deleteThisMessage">deleteThisMessage</button></span>
                        </div>`


          document.getElementById("messageWrapper").innerHTML +=  newVariable

              clearContent()


          document.getElementById("sectionWrapper").innerHTML +=  newVariable

              clearContent()
  }
})

//SINGLE MESSAGE DELETE BUTTON

// var oneMessage = getElementById("messageBubble").innerHTML.value;
document.querySelector("body").addEventListener("click", deleteOneMessage);
function deleteOneMessage(e) {
  console.log(e)
  if (e.target.className === "deleteThisMessage") {
    e.parentElement = "";
}
}
//***********************************

// this clears the typed content and we rule
function clearContent()
  {
   document.getElementById("enterMessageTextBox").value = "";
}


// // deleteThisMessage.addEventListener('click', function(e) {
// //     document.getElementById("messagebubble")
// // }



//
//this is the part where the  #clearbutton clears the messages
//
function removeTheMessageBubbles() {
  var clearTheBox = document.getElementById('messageWrapper')
  clearTheBox.innerHTML = ""


}

document.getElementById("clearMessagesButton").addEventListener('click', removeTheMessageBubbles)



// ===========================XML REQUEST===============
//


    var getTheJson = new XMLHttpRequest()
   getTheJson.addEventListener("load" , putTheJsonInMessageWrapper)
   getTheJson.open('GET', "lightMessages.json")
   getTheJson.send()

    function putTheJsonInMessageWrapper(e) {
      jsonData = JSON.parse(e.target.responseText)
      var theFirstFiveMessages ="";
          for(var i = 0; i < jsonData.lightMessages.length; i++) {
                theFirstFiveMessages +=


//                   `<div class="clear"></div>
//                     <div class="from-them">
//                        <span><p>${jsonData.lightMessages[i].sender} says:</p> <p>${jsonData.lightMessages[i].content}</p><span>
//                     </div>
//                   <div class="clear"></div>`

// console.log(theFirstFiveMessages)


            }  // endforloop


//           document.getElementById("sectionWrapper").innerHTML = theFirstFiveMessages
    }
