<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Understanding Javascript And JSON</title>
    <style>
      #app {
        display: inline-block;
        padding: 10px;
        font-size: x-large;
        background-color: lightgreen;
      }
  </style>
</head>
<body>
   <h1>Vue Example</h1>

    <div id="app">
        {{ message }}
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
        const app = Vue.createApp({
         data() {
          return {
           message: "Notifications"
          }
         }
        })
      app.mount('#app')
    </script>
</body>
</html>
