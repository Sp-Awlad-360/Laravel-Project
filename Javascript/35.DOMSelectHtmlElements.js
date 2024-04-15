<!DOCTYPE html>
<html>
  <head>
    <title>DOM--Document Ofject Model</title>
  </head>
  <body>
    <!---GetElementByID Starts Here--->
    <!---
    <div>
      <h2 id="heading1">Bangladesh</h2>
      <h2 id="heading2">Singapore</h2>
    </div>
    
    <script>
      var myheading1 = document.getElementById('heading1');
      myheading1.innerHTML='I am from GetElementById1';
      
      var myheading2 = document.getElementById('heading2');
      myheading2.innerHTML='I am from GetElementById2';
    </script>
    --->
    <!---GetElementByID Ends Here--->
    
    <!---GetElementsByClassName Starts Here--->
    <!---
    <div>
      <h2 class="heading1">Bangladesh</h2>
      <h2 class="heading1">Singapore</h2>
    </div>
    
    <script>
      var myheading1 = document.getElementsByClassName('heading1');
      myheading1[0].innerHTML='I am from ClassName1';
      
      var myheading2 = document.getElementsByClassName('heading1');
      myheading2[1].innerHTML='I am from ClassName2';
    </script>
    --->
    <!---GetElementsByClassName Ends Here--->
    
    <!---GetElementsByTagName Starts Here--->
    <!---
    <div>
      <h2>Bangladesh</h2>
      <h2>Singapore</h2>
    </div>
    
    <script>
      var myheading1 = document.getElementsByTagName('h2');
      myheading1[0].innerHTML='I am from TagName1';
      
      var myheading2 = document.getElementsByTagName('h2');
      myheading2[1].innerHTML='I am from TagName2';
    </script>
    --->
    <!---GetElementsByTagName Ends Here--->
  </body>
</html>
