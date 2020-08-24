<template>
  <div>
    <canvas id="#canvas">

    </canvas>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    // 平铺图像
    const canvas = document.getElementById("#canvas")
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')

      const img = new Image()
      img.onload = function() {
        for (let i=0; i < 4; i++) {
          for (let j=0; j< 3; j++) {
            ctx.drawImage(img, j * 50, i* 38, 50, 38)
          }
        }
      }
      img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg'
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

