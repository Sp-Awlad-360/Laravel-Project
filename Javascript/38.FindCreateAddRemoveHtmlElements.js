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

        <!---Create a Html Elements strats here --->
          <!---
                <div id="my-div" style="background-color:green; color:white">
                    <h1>Hello</h1>
                    <h1>Good Bye</h1>
                </div>
                <script>
                   var heading1 = document.getElementsByTagName("h1")[0];
                   heading1.innerHTML="Hello Everyone";
                   
                   var heading3 = document.createElement('h1');
                   var text = document.createTextNode("This is heading 3");
                   heading3.appendChild(text);
                    <!--- If we want add a text first then we use insertBefore(Before,after) --->
                   
                   var myDiv = document.getElementById("my-div");
                   myDiv.appendChild(heading3);
                </script>
          --->
      <!---Create a Html Elements ends here --->

      <!---Remove a Html Elements Starts here --->
          <!---
              <div id="my-div" style="background-color:brown; color:white">
                  <h1>Hello</h1>
                  <h1>Good Bye</h1>
              </div>
              <script>
                 var myDiv = document.getElementById("my-div");
                 var heading2 = document.getElementsByTagName("h1")[1];
                 myDiv.removeChild(heading2);
              </script>
          --->
      <!---Remove a Html Elements ends here --->
            
  </body>
</html>
