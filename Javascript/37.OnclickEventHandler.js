<!DOCTYPE html>
<html>
  <head>
    <title>Query Selector</title>
  </head>
  <body>
    <!---Onclick Event Handler Starts Here--->
    <h2>Onclick Functional Work</h2>
    <button onclick="alert('I am from Inline event')">Normal Button</button>
    <button onclick="mymessage()">Function Button</button><br /><hr />
    
     <h2>Onclick Functional Work</h2>
     <h4 id="paraId">Bangladesh is a small country.</h4>
    <button onclick="message2()">Button1</button>
    <button onclick="message3()"> Button2</button><br /><hr />
    
     <h2>Onclick Functional Work By Image Show</h2>
     <button onclick="myPicture1()">Awlad</button>
     <button onclick="myPicture2()">Najmul</button><br>
     <img id="mypicture" src="" alt="" height="150px" width="150px" />
    <script>
      function mymessage(){
        alert("I am from function event");
      }
       function message2(){
        var myVar = document.querySelector("#paraId").innerHTML="Button 1";
      }
       function message3(){
        var myVar1 = document.querySelector("#paraId").innerHTML="Button 2"
      }
      function myPicture1(){
        var myPic = document.querySelector("#mypicture");
        myPic.src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/366713582_251796294441512_6122800221551203636_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bneFe2vDumAAb40IRtc&_nc_ht=scontent.fdac22-1.fna&oh=00_AfDNtA3x1wO0sdkTQd3OFdX_61TMrb4my5lSuchcgFKEEQ&oe=6623529F";
      }
      function myPicture2(){
        var myPic = document.querySelector("#mypicture");
        myPic.src="https://scontent.fdac22-2.fna.fbcdn.net/v/t39.30808-6/365893007_246097795011362_8663525767347064155_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1TatO0pwJPYAb4fIdeV&_nc_ht=scontent.fdac22-2.fna&oh=00_AfANvrwUN-9fP07-o9RXQjN3EXW1FldQqtqPlo4xCU1wrg&oe=66234A33";
      }
    </script>
    <!---Onclick Event Handler Ends Here--->
  </body>
</html>
