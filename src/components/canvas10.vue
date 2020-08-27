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
      // x, y, 半径, 开始弧度，结束弧度
      ctx.arc(0, 0, 5, 0, 2 * Math.PI)
      ctx.fillStyle = "blue"
      ctx.fill()

      ctx.fillStyle = 'gray'
      ctx.fillRect(200, 0, 80, 20)
      // 旋转 45度，默认旋转中心是画布的原点
      // 如果需要更改中心点，可以使用translate方法移动画布
      ctx.rotate(45 * Math.PI / 180)
      ctx.fillStyle = 'red'
      ctx.fillRect(200, 0, 80, 20)
      

      // ctx.fillStyle = 'gray'
      // ctx.fillRect(80, 60, 140 ,30)
      // // 水平中心 80 + 140/2 = 150
      // // 垂直中心 60 + 30/2 = 75
      // // 1. 先通过translate将矩阵的原点移动到形状的中心
      // ctx.translate(150, 75);
      // // 2. 旋转90度
      // ctx.rotate(Math.PI / 2);
      // // 3. 将原点移回起点
      // ctx.translate(-150, -75);

      // ctx.fillStyle = 'red';
      // ctx.fillRect(80, 60, 140, 30);


      // ctx.fillRect(100, 100, 100, 100)
      // // 水平缩放 垂直倾斜 水平偏移 垂直缩放 水平平移 垂直平移
      // ctx.setTransform(0, 1, 1, 0, 100, 100)
      // ctx.fillRect(200, 200, 100, 100)
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

