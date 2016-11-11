'use strict'
$(document).ready(function() {

 var messageAppReference = firebase.database();

 $('#message-form').submit(function(e){
     e.preventDefault();
     var message = $('#message').val();
     $('#message').val('');
     
     var messagesReference = messageAppReference.ref('messages')
     messagesReference.push({ 
       msg: message, 
       votes: 1
     })
 });//message-form

 function getMessages() {
   messageAppReference.ref('messages').on('value',function(res){

   	$('.message-board').empty();
     res.forEach(function(msg){
       console.log("this is the actual obj: ", msg)
       var id = msg.key
       var message = msg.val();

       var messageText = message.msg
       var votes = message.votes
       //create a new li item
       var li = $('<li>');
       //adding the icons to the right in bootstrap
       var upVote = $('<i class="fa fa-thumbs-up pull-right"></i>');
       upVote.on('click', function() {
       	updateMessage(id, votes++)
       });
       var downVote = $('<i class="fa fa-thumbs-down pull-right"></i>');
       downVote.on('click', function() {
        updateMessage(id, votes--)
       });
       var remove = $('<i class="fa fa-trash pull-right"></i>');
        remove.on('click', function () {
          deleteMessage(id);
        })

        //populate that li with the content
       li.html(messageText);
       li.append(upVote)
       li.append(downVote)
       li.append(remove)
       li.append('<div class="pull-right">' + votes + '</div>')
       //append the li
       $('.message-board').append(li);
     });//forEach
   });//.on
 }//getMessages
 function updateMessage(id,votes){
 	var messagesReference = messageAppReference.ref('messages/' + id);
 	messagesReference.update({votes:votes});
 };
 function deleteMessage (id) {
    // find message whose objectId is equal to the id we're searching with
    var messageReference = messageAppReference.ref('messages/' + id);

    messageReference.remove();
  }

 getMessages()
});





