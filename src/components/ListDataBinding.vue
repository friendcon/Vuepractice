<template>
  <h1>여어</h1>
  <table>
    <thead>
      <tr>
        <th>번호</th>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송비</th>
      </tr>
    </thead>
  </table>
  <tbody>
    <tr :key="index" v-for="(product, index) in productList">
      <td>{{index + 1}}</td>
      <td>{{product.product_name}}</td>
      <td>{{product.product_price}}</td>
      <td>{{product.product_category}}</td>
      <td>{{product.product_delivery_price}}</td>
    </tr>
  </tbody>

  <br><br><br><br><br>
  <h1 v-if="ifElement === 'A'">안녕하세요</h1>
  <h1 v-else-if="ifElement === 'B'">안녕히가세요</h1>
  <h1 v-else>아무것도 아님</h1>
  <br><br><br><br>
  <button @click="increaseCounter">버튼이여요</button>
  <h1>now count : {{count}}</h1>

  <br><br><br><br>
  <button @click="one(), two()">함수 동시 호출</button>
  <h1>now count : {{count}}</h1>
  <br><br>
  <select v-model="selectedValue" @change="changeSelect">
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="제주">제주</option>
  </select>
  <h2>{{selectResult}}</h2>
</template>

<script>
export default {
  name: 'ListDataBinding',
  methods: {
    increaseCounter (count) {
      this.count = this.count + 1
    },
    one () {
      alert('one 함수 호출')
    },
    two () {
      alert('two 함수 호출')
    },
    changeSelect () {
      this.selectResult = this.selectedValue
    }
  },
  data () {
    return {
      firstName: 'ㅇㅇ',
      lastName: 'zz',
      selectResult: '서울',
      selectedValue: '서울',
      ifElement: 'A',
      count: 0,
      productList: [
        {
          product_name: '카카오콘 노트북 파우치',
          product_price: 45000,
          product_category: '노트북 악세사리',
          product_delivery_price: 3000
        },
        {
          product_name: '카카오콘 폰케이스',
          product_price: 22000,
          product_category: '스마트폰 악세사리',
          product_delivery_price: 3000
        },
        {
          product_name: '카카오콘 인형',
          product_price: 30000,
          product_category: '인형',
          product_delivery_price: 3000
        },
        {
          product_name: '카카오 콘 다이어리',
          product_price: 15000,
          product_category: '다이어리',
          product_delivery_price: 3000
        }
      ]
    }
  },
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<style scoped>
  table {
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }
</style>
