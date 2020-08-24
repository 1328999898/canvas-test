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
    // canvas仅支持两种形状 1.矩形 2.路径
    // 绘制矩形的三个函数
    // 1. fillRect(x,y,width, height)  绘制一个填充的矩形
    // 2. strokeRect(x, y, width, height)  绘制一个矩形轮廓
    // 3. clearRect(x, y, width, height)   清除指定的矩形区域，使其完全透明
    const canvas = document.getElementById("#canvas")
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')
      ctx.fillRect(25, 25, 100, 100)
      ctx.clearRect(45,45, 60,60)
      ctx.strokeRect(50, 50, 50, 50)
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

