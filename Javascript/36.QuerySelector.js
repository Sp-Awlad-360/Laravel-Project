<!DOCTYPE html>
<html>
  <head>
    <title>Query Selector</title>
  </head>
  <body>
    <!---Query Selector can work of getElementByID, getElementsByClassName, and TagName--->
    <!--- querySelectorAll is work same of getElementsByClassName --->
    
    <!--- Query Selector work with ID Starts Here --->
       <!---
            <div>
               <h2 id="pid">This is a paragraph 1 </h2>
            </div>
            <script>
               var mypara = document.querySelector('#pid');
               mypara.innerHTML="ID query selector";
            </script>
       --->
    <!--- Query Selector work with ID Ends Here --->
    
    <!--- Query Selector work with Class Starts Here --->
        <!---
            <div>
                <h2 class="pclass">This is a paragraph 2 </h2>
            </div>
            <script>
                var mypara2 = document.querySelector(".pclass");
                mypara2.innerHTML = "Class query Selector";
            </script>
        --->
    <!--- Query Selector work with Class Ends Here --->
    
    <!--- Query Selector work with Tags Starts Here --->
        <!---
            <div>
              <h3>This is a paragraph 3 </h3>
            </div>
            <script>
              var mypara3 = document.querySelector("h3");
              mypara3.innerHTML = "Tag query Selector";
            </script>
        --->
    <!--- Query Selector work with Tags Ends Here --->
    
    <!--- Query Selector work with Link Starts Here --->
        <!---
            <div>
              <a href="#">Javascript Tutorial</a>
            </div>
            <div>
              <ul>
                <li><a href="#">Tutorial</a></li>
                <li>Bangladesh</li>
              </ul>
            </div>
            <div class="my-div">
               <h3>This is a link.</h3>
            </div>
            <script>
              var aTag = document.querySelector("a").innerHTML="Tutorial Javascript";
              var aTagOfList = document.querySelector("li a").innerHTML="Changed";
              var tagOfClass = document.querySelector(".my-div h3").innerHTML="Changed is availabe";
            </script>
        --->
    <!--- Query Selector work with Link Ends Here --->
  </body>
</html>
