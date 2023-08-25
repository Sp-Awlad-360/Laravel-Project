<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
  
    <script>
       document.write("<h1>Make Calculator</h1><br>");
       var x,y,result;
       
       x=prompt("Enter first number :");
       y=prompt("Enter second number :");
       x=parseInt(x);
       y=parseInt(y);
       result=x+y;
       document.write("Addition = "+result+"<br>");
       result=x-y;
       document.write("Substract = "+result+"<br>");
       result=x*y;
       document.write("Multiplication = "+result+"<br>");
       result=x/y;
       document.write("Divisioin = "+result+"<br>");
       result=x%y;
       document.write("Modulus = "+result+"<br>");
       result=x**y;
       document.write("Power = "+result+"<br>");
       
      

    </script>
  </body>
</html>
