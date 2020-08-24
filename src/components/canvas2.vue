<template>
  <div>
    <canvas id="#canvas">
      <!-- canvas与img元素的区别：canvas不具有src和alt属性 -->
      <!-- canvas只有两个属性：height 和 weight，且都是可选的 -->
      <!-- 如果未指定height和weight，则默认为150height和30weight -->
      <!-- 可以通过css调整任意元素的大小 -->
      <!-- 后备内容：定义一些内容显示在不支持canvas的旧的浏览器中 -->
      您的浏览器可能不支持canvas
    </canvas>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    const canvas = document.getElementById("#canvas")
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'rgb(200, 0 , 0)'
    ctx.fillRect(10, 10, 50, 50)
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
    ctx.fillRect(30, 30, 50, 50)
  },
  methods: {

  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

