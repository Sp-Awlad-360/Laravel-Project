<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
  
    <script>
       document.write("<h1>Function of String</h1><br><br>");
       
       //var text = prompt("Enter your text : ");
       //It will be use when we need data input.
       var text = "Bangladesh";
       document.write("Number Of Characters "+text.length);
       document.write("<br>");
       
       document.write("<br>");
       var text1 = "Bangladesh";
       document.write("ChartAt Character is  " + text1.charAt(2));
       document.write("<br>");
       
       document.write("<br>");
       var text1 = "Bangladesh";
       document.write("UpperCase Character is  " + text1.toUpperCase());
       document.write("<br>");
       
       document.write("<br>");
       var text1 = "Bangladesh";
       document.write("LowerCase Character is  " + text1.toLowerCase());
       document.write("<br>");
       
       document.write("<br>");
       var text1 = "Bangladesh ";
       var text2 = "is a small country";
       document.write("Concatenation sentense is  " + text1.concat(text2));
       document.write("<br>");
       
       document.write("<br>");
       var text1 = "Bangladesh";
       document.write("Slice Character is  " + text1.slice(0,2));
       document.write("<br>");
       

    </script>
  </body>
</html>


