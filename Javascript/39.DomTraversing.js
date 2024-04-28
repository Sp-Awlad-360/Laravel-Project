<!DOCTYPE html>
<html>
  <head>
    <title>DOM Traversing</title>
  </head>
  <body>
      <!---Downwards Traversing Strarts Here (Parents to children)--->
          <!--- 
              <ol class="student-list">
                 <li class="student-a">Awlad</li>
                 <li class="student-b">Niamat</li>
                 <li class="student-c">Shihab</li>
              </ol>
              <script>
                  var studentList = document.querySelector(".student-list");
                  var studentA = document.querySelector(".student-a");
                  studentList.style.backgroundColor="green";
                  studentA.innerHTML="Masud"; 
               
                  var studentList = document.querySelector(".student-list");
                  var studentA = studentList.querySelector(".student-a");
                  studentList.style.backgroundColor="green";
                  studentA.innerHTML="Rakib";
                  
                  var studentList = document.querySelector(".student-list");
                  var studentA = studentList.children[0];
                  studentA.innerHTML="Masud";
              </script>
           --->
      <!---Downwards Traversing Ends Here --->
      <!---Upwards Traversing Strarts Here (Parents Elements)--->
                <!---
                    <ol class="student-list">
                         <li class="student-a">Awlad</li>
                         <li class="student-b">Niamat</li>
                         <li class="student-c">Shihab</li>
                    </ol>
                    <script>
                          var studentA = document.querySelector("li");
                          var studentList = studentA.parentElement;
                          studentList.style.backgroundColor="green";
                    </script>
                 --->
          <!---Upwards Traversing Strarts Here (Parents Elements)--->
              
          <!---Sideways Traversing Strarts Here (Parents Elements)--->
              <!---
                  <ol class="student-list">
                       <li class="student-a">Awlad</li>
                       <li class="student-b">Niamat</li>
                       <li class="student-c">Shihab</li>
                  </ol>
                  <script>
                        var studentA = document.querySelector("li").innerHTML="Awlad Friend";
                        var studentB = studentA.nextElementSibling;
                        var studentC = studentB.nextElementSibling;
                        
                        var studentC = document.querySelectorAll("li")[2];
                        var studentB = studentA.previousElementSibling;
                  </script>
              --->
          <!---Sideways Traversing Strarts Here (Parents Elements)--->
  </body>
</html>
