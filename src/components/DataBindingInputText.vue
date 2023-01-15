<template>
  <input type="text" v-model="valueModel"><br>
  <input type="number" v-model="valueModelNumber"><br>
  <textarea v-model="valueModelTextArea"/><br>
  <select v-model="city">
    <option value = "02">서울</option>
    <option value = "21">부산</option>
    <option value = "064">제주도</option>
  </select><br>
  <label><input type = "checkbox" value="서울" v-model="checked">서울</label>
  <label><input type = "checkbox" value="부산" v-model="checked">부산</label>
  <label><input type = "checkbox" value="제주" v-model="checked">제주</label><br>
  <span>체크한 지역 : {{checked}}</span><br>
  <label><input type = "radio" v-bind:value="radiovalue1" v-model="picked">서울</label>
  <label><input type = "radio" v-bind:value="radiovalue2" v-model="picked">부산</label>
  <label><input type = "radio" v-bind:value="radiovalue3" v-model="picked">제주</label><br>
  <span>체크한 지역 : {{ picked }}</span>
  <br><br>
  <img v-bind:src="imgSrc"><br><br>
  <input type="text" v-model="textVal"><button type="button" v-bind:disabled="textVal == ''">버튼이에용</button>
  <br><br>
  <div class = "container" v-bind:class="{
    'active': isActive,
    'text-red': hasError
  }">Class Binding</div>

  <div v-bind:style="styleObject">
    스타일 바인딩
  </div><br><br><br><br>
</template>

<script>
export default {
  name: 'DataBindingInputText',
  data () {
    return {
      styleObject: {
        color: 'red',
        fontSize: '20px',
        backgroundColor: 'yellow'
      },
      isActive: false,
      hasError: true,
      valueModel: 'HELLO WORLD',
      valueModelNumber: 0,
      valueModelTextArea: '안녕하세요.',
      city: '064',
      checked: [],
      picked: [],
      radiovalue1: '서울',
      radiovalue2: '부산',
      radiovalue3: '제주',
      imgSrc: 'https://imgur.com/2D85CLT.png',
      textVal: ''
    }
  }
}
</script>
<style scoped>
  container {
    width: 100%;
    height: 200px;
  }
  .active {
    background-color: yellow;
    font-weight: bold;
  }
  .text-red {
    color: red;
  }
</style>
