<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
  
    <script>
       document.write("<h1>Various Shape</h1><br>");
       var base,height,area;
       
       base=prompt("Enter first number :");
       height=prompt("Enter second number :");
       base=parseFloat(base);
       height=parseFloat(height);
       area=base*height;
       area2=(base*height)/2;
       document.write("Area of rectangle or Square Shape = "+area+"<br>");
       document.write("Area of Triangle = "+area2+"<br>");
       
    </script>
  </body>
</html>
