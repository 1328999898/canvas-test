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

      // 旋转
      ctx.translate(100,100);

      // 环数
      const baseNum = 6
      const radius = 5
      // 最外层循环
      for (let i=1 ;i < baseNum; i++) {
        ctx.save()
        ctx.fillStyle = `rgb(${51*i},${255-51*i},255)`
        // 里层循环
        for (let j=0; j < baseNum * i; j++) {
          // 第一层 baseNum个原点，每个原点的旋转角度：(360/baseNum) * (Math.PI / 180)
          ctx.rotate(360/(baseNum*i) * ( Math.PI/180 ))
          ctx.beginPath()
          // 圆心坐标：y：大于 2 * 半径 点与点之间就可以不相交
          ctx.arc(0, (2 * radius + 5) * i, radius, 0, Math.PI * 2, true)
          ctx.fill()
        }
        ctx.restore()
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

