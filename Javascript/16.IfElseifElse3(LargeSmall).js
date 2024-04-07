<!DOCTYPE html>
<html>
  <head>
    <title>If, Else if, Else</title>
  </head>
  <body>
    <div>
      <h2>If, Else if, Else</h2>
    </div>
    
    <script type="text/javascript" charset="utf-8">
      var num1 = prompt("Eneter First Number : ");
      var num2 = prompt("Eneter Second Number : ");
      var num3 = prompt("Eneter Third Number : ");
      if(num1 > num2  && num1 > num3)
      {
        document.write("Largest number is : " + num1);
      }
      else if(num2 > num1  && num2 > num3)
      {
        document.write("Largest number is : " + num2);
      }
      else{
        document.write("Largest number is : " + num3);
      }
    </script>
  </body>
</html>
