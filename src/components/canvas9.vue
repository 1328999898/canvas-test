<template>
  <div >
    <canvas id="#canvas" @mouseup="up">
      您的浏览器可能不支持canvas
    </canvas>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      baseURL: ""
    }
  },
  mounted() {
    const canvas = document.getElementById("#canvas")
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'rgb(200, 0 , 0)'
    ctx.fillRect(0, 0, 50, 50)
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
    ctx.fillRect(20, 20, 50, 50)
    this.baseURL = canvas.toDataURL()
  },
  methods: {
    up(event) {
      const canvas = document.getElementById("#canvas")
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const img = new Image()
      img.src = this.baseURL
      // console.log(event.offsetX, event.offsetY)
      ctx.drawImage(img, event.offsetX, event.offsetY)
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

