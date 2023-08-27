<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
  
    <script>
       document.write("<h1>Temperature</h1><br>");
       var farenhite,celcius;
       
       celcius =prompt("Enter farenheit :");
       celcius=parseFloat(celcius);
       farenhite=(celcius*(9/5))+32;
       document.write("Farenhite = "+farenhite+"<br>");
       
       //farenhite=prompt("Enter farenheit :");
       //farenhite=parseFloat(farenhite);
       //celcius=(farenhite-32)*5/9;
       //document.write("Celcius = "+celcius+"<br>");
       
    </script>
  </body>
</html>
