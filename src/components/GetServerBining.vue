<template>
  <h2>서버로부터 데이터를 받아오자!</h2>
  <table>
    <thead>
    <tr>
      <th>번호</th>
      <th>제품명</th>
      <th>가격</th>
      <th>카테고리</th>ㅡ
    </tr>
    </thead>
  </table>
  <tbody>
    <tr :key="index" v-for="(product, index) in productList">
      <td>{{product.id}}</td>
      <td>{{product.productName}}</td>
      <td>{{product.productPrice}}</td>
      <td>{{product.productCategory}}</td>
    </tr>`
  </tbody>
</template>

<script>
export default {
  name: 'GetServerBining',
  data () {
    // eslint-disable-next-line no-labels,no-unused-expressions
    return {
      productList: []
    }
  },
  created () {
    this.getList()
    console.log('여기 들어왔냐?')
  },
  methods: {
    async getList () {
      this.productList = await this.$api('http://localhost:8080/product/list', 'get')
      console.log(this.productList)
    }
  }
}
</script>

<style scoped>
  table {
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 27%;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }
</style>
