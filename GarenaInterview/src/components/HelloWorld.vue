<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to='/task4'>To task4</router-link>
    <h3>The AJAX code is in HelloWorld.vue and assets/js/nodeTest.js</h3>
    <h2 id="result"></h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hanli Zhang 2020/7/2'
    }
  },
  created: {
    f1 () {
      var xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          document.getElementById('result').innerHTML = xhr.responseText
        }
      }
      xhr.open('get', 'http://localhost:8888', true)
      xhr.send(null)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
