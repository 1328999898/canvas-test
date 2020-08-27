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

      // 移动
      // translate(x, y)
      // x: 左右偏移量
      // y: 上下偏移量

      // 做变形之前通常先保存状态
      for (let i=0; i < 3; i++) {
        for (let j=0; j< 3; j++) {
          ctx.save()
          ctx.fillStyle = `rgb(${20*i},${255-51*i},255)`
          ctx.translate(10 + 50 * j, 10 + 50 * i)
          ctx.fillRect(0, 0, 48, 48)
          ctx.restore()
        }
      }
      
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

