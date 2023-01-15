<template>
  <h1> Hello </h1>
  <h3 v-html="htmlString"></h3>
  <h3> {{content}}</h3>
</template>

<script>
export default {
  name: 'HtmlTest',
  data () {
    return {
      htmlString: '<h1 style = "color:red">안녕하셔요</h1>',
      content: '<h1 style = "color:red">안녕하세요</h1>'
    }
  }
}
</script>

<style scoped>

</style>
