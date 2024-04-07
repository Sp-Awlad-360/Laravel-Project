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
      var num1 = prompt("Eneter a number : ");
      if(num1 >= 80)
      {
        document.write("Your Result : A+");
      }
      else if(num1 >= 70)
      {
        document.write("Your Result : A");
      }
      else if(num1 >= 60)
      {
        document.write("Your Result : A-");
      }
      else if(num1 >= 50)
      {
        document.write("Your Result : B");
      }
      else if(num1 >= 40)
      {
        document.write("Your Result : C");
      }
      else if(num1 >= 33)
      {
        document.write("Your Result : D");
      }
      else
      {
        document.write("Your Result : F");
      }
    </script>
  </body>
</html>
