<template>
  <div>
    <canvas id="#canvas" width="500" height="500">

    </canvas>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    const canvas = document.getElementById("#canvas")
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')

      // 二次贝塞尔曲线
      ctx.beginPath()
      ctx.moveTo(75, 25)
      // quadraticCurveTo(cp1x, cp1y, x, y)
      // cp1x, cp1y 为控制点  x, y 为结束点
      ctx.quadraticCurveTo(25, 25, 25, 62.5);
      ctx.quadraticCurveTo(25, 100, 50, 100);
      ctx.quadraticCurveTo(50, 120, 30, 125);
      ctx.quadraticCurveTo(60, 120, 65, 100);
      ctx.quadraticCurveTo(125, 100, 125, 62.5);
      ctx.quadraticCurveTo(125, 25, 75, 25);
      ctx.stroke()


      //三次贝塞尔曲线
      // ctx.beginPath();
      // ctx.moveTo(75, 40);
      // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
      // ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
      // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
      // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
      // ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
      // ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
      // ctx.fill();
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

