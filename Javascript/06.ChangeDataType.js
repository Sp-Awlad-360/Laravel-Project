<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
  
    <script>
       //Integer to string convert:
       var num = 30;
       document.write(num);
       document.write(typeof(num));
       
       num=toString(num);
       document.write(typeof(num));
       document.write("<br>");
       
       
       //String to number convert:
       var num = "30";
       document.write(num);
       document.write(typeof(num));
       
       num=parseInt(num);
       document.write(typeof(num));
       document.write("<br>");
       
       
       //String to floating number convert:
       var num = "30.5";
       document.write(num);
       document.write(typeof(num));
       
       num=parseFloat(num);
       document.write(typeof(num));
       document.write("<br>");
       
       
       document.write("<br>Step Of toFixed: <br>");
       //Uses of tofixed:It is used for how many digit do you want after doshomik.
        var num1 = 3.56789;
        document.write(num1.toFixed());
        document.write("<br>");
        document.write(num1.toFixed(1));
        document.write("<br>");
        document.write(num1.toFixed(2));
      
        
        document.write("<br>Step Of toPrecision: <br>");
       //Uses of tofixed:It is used for how many digit do you want first to last.
        var num1 = 3.56789;
        document.write(num1.toPrecision(1));
        document.write("<br>");
        document.write(num1.toPrecision(2));
        document.write("<br>");
        document.write(num1.toPrecision(3));
        
        
        document.write("<br>Step Of Number Method: <br>");
        //Number MEthod:
         var number = "3";
         document.write(number);
         document.write("<br>");
         document.write(typeof(number));
         document.write("<br>");
       
         number=Number(number);
         document.write(typeof(number));
         document.write("<br>");
         
         
         document.write(Number(true));
         document.write("<br>");
         document.write(Number(false));
       
    </script>
  </body>
</html>

