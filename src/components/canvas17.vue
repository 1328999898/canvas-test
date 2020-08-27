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

      // Path2D: 用于缓存或记录绘画命令
      // const rectangle = new Path2D()
      // rectangle.rect(10, 10, 50, 50)
      // ctx.stroke(rectangle)

      // const circle = new Path2D()
      // circle.arc(100, 35, 25, 0, Math.PI * 2, true);
      // ctx.fill(circle)

      // 使用svg路径数据创建路径
      // 路径将移动到点（M10 10），然后向右水平移动80点（h 80），然后向下移动80点（），然后向左移动80点v 80（h -80），然后回到起点（Z）。
      const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
      ctx.fill(p);
      
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

