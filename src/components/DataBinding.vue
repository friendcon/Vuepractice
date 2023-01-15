<template>
  <h1>Hello {{ title }}</h1>
  <h3>{{content}}</h3>
</template>

<script>
export default {
  name: 'DataBinding',
  data () {
    return {
      title: 'world',
      content: 'hello world 를 출력하였습니다'
    }
  }
}
</script>

<style scoped>

</style>
