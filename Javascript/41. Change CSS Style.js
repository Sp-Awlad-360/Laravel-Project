<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="" />
    <style>
      .para-style{
        color: red;
        font-size: 2rem;
        font-weight: bold;
        font-style: italic;
      }
    </style>
  </head>
  <body>
    
     <p id="paraId">This is a paragraph</p>
     <button onclick="addStyle()">Add Style</button>
     <button onclick="removeStyle()">Remove Style</button>
     
      <script>
        function addStyle(){
          var myVar = document.querySelector("#paraId");
          // if we use javascript without Css file
          // myVar.style.color="red";
          // myVar.style.fontSize = "2rem";
          // myVar.style.fontWeight = "bold";
          // myVar.style.fontStyle = "italic";
          // Otherwise use that 
          myVar.classList.add("para-style");
        }
        function removeStyle(){
          var myVar2 = document.querySelector("#paraId");
          myVar2.classList.remove("para-style");
        }
      </script>
  </body>
</html>
