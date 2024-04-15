<!DOCTYPE html>
<html>
  <head>
    <title>Query Selector</title>
  </head>
  <body>
    <!---Query Selector Starts Here--->
    <!---Query Selector can work of getElementByID, getElementsByClassName, and TagName--->
    <div>
      <h2 id="pid">This is a paragraph 1 </h2>
    </div>
    <div>
      <h2 class="pclass">This is a paragraph 2 </h2>
    </div>
    <div>
      <h3>This is a paragraph 3 </h3>
    </div>
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
      var mypara = document.querySelector('#pid');
      mypara.innerHTML="ID query selector";
      
      var mypara2 = document.querySelector(".pclass");
      mypara2.innerHTML = "Class query Selector";
      
      var mypara3 = document.querySelector("h3");
      mypara3.innerHTML = "Tag query Selector";
      
      
      var aTag = document.querySelector("a").innerHTML="Tutorial Javascript";
      var aTagOfList = document.querySelector("li a").innerHTML="Changed";
      var tagOfClass = document.querySelector(".my-div h3").innerHTML="Changed is availabe";
    </script>
    <!---Query Selector Ends Here--->
    
    
    
  </body>
</html>
