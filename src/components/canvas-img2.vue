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
    // 统计图
    const canvas = document.getElementById("#canvas")
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')

      const img = new Image()
      img.onload = function() {
        // 可以通过drawImage将图像渲染到画布上
        ctx.drawImage(img, 0, 0)
        ctx.beginPath()
        ctx.moveTo(30, 96)
        ctx.lineTo(70, 66)
        ctx.lineTo(103, 76)
        ctx.lineTo(170, 15)
        ctx.stroke()
      }
      img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

