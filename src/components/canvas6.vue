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
    // 绘三角形
    const canvas = document.getElementById("#canvas")
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')

      // 填充
      ctx.beginPath()
      ctx.moveTo(25, 25)
      ctx.lineTo(105, 25)
      ctx.lineTo(25, 105)
      ctx.fill()

      // 轮廓
      ctx.beginPath()
      ctx.moveTo(125, 125)
      ctx.lineTo(125, 45)
      ctx.lineTo(45, 125)
      ctx.closePath()
      ctx.stroke()

    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

