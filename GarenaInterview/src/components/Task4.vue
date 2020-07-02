<template>
    <div id="task4Container">
        <div class="imgContainer">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Task4',
  created: {
      f1() {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 && xhr.status === 200){
                document.getElementById('result').innerHTML = xhr.responseText
            }
        }
        var username = document.getElementById('username').value
        xhr.open('get', 'http://localhost:8888', true)
        xhr.send(null)
      }
  }
}
</script>

<style scoped>
@import "../assets/css/task4.css"
</style>
