<!DOCTYPE html>
<html>
  <head>
    <title>Find Create Add Remove Html Elements</title>
  </head>
  <body>
      <!---Find Html Elements and change css style starts here --->
            <!---
              <a id="paraId" href="#">This is a link</a>
              <script>
                 var myStyle = document.getElementById("paraId");
                 myStyle.innerHTML="This is Awlad Hossain";
                 myStyle.style.color = "red";
                 myStyle.style.textDecoration = "none";
                 myStyle.href="https://studywithanis.com/";
              </script>
            --->
        <!---Find Html Elements and change css stylej ends here --->




      <!---Create a Html Elements--->
        <div id="my-div" style="background-color:green">
            <h1>Heading 1</h1>
            <h1>Heading 2</h1>
        </div>
        <script>
           var myStyle = document.getElementsByTagName("h1")[0];
           myStyle.innerHTML="Everyone";
           
           var heading3 = document.createElement('h1');
           var text = document.createTextNode("Hello Jonogon");
           heading3.appendChild(text);
           
           var myDiv = document.getElementById("my-div");
           myDiv.appendChild(heading3);
           
           var heading2 = document.getElementsByTagName('')
        </script>
      
  </body>
</html>
