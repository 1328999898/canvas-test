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
    // 绘制路径
    // 路径：线段连接的点的列表
    // 使用路径制作形状的步骤
    // 1. 创建路径
    // 2. 使用绘图命令绘制路径
    // 3. 可以描画或者填充路径以进行渲染

    // beginPath() 创建路径
    // closePath() 向当前路径添加一条直线，转到当前子路径的起点
    // stroke()  通过抚摸轮廓来绘制形状
    // fill()  通过填充路径的内容区域绘制实体形状

    // 绘制三角形
    const canvas = document.getElementById("#canvas")
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')
      ctx.beginPath()
      // 将新子路径的起点移动到x,y坐标
      ctx.moveTo(75, 50)
      // 用一条直线将当前子路径中的最后一个点连接到指定的x,y坐标
      ctx.lineTo(100, 75)
      ctx.lineTo(100, 25)
      ctx.fill()
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

