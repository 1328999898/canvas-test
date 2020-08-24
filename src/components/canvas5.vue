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
    // 绘制笑脸
    const canvas = document.getElementById("#canvas")
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')

      ctx.beginPath()
      // 将圆弧添加到当前路径
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // Outer circle
      // 可以使用moveTo更改起点
      ctx.moveTo(110, 75)
      ctx.arc(75, 75, 35, 0, Math.PI, false)  // mouch
      ctx.moveTo(65, 65)
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // left eye
      ctx.moveTo(95, 65)
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // right eye
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

