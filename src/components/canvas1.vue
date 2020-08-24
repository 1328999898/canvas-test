<template>
  <canvas id="#canvas">

  </canvas>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    // 参考文档 https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage
    // 获取元素
    const canvas = document.getElementById("#canvas")
    // 获取渲染上下文
    const ctx = canvas.getContext('2d')
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    // CanvasRenderingContext2D渲染绘制
    // 指定填充样式
    ctx.fillStyle = "green"
    // 绘制一个填充的矩形，起点(x,y) width:宽 height：高
    // ctx.fillRect(x,y, with, height)
    // ctx.fillRect(10, 10, 150, 100)
    // 填满整个画布, 通常用于创建背景
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  },
  methods: {

  }
}
</script>
