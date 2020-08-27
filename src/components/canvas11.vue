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

      // 状态的保存和恢复
      // 状态：当前画布应用的所有样式和变形的一个快照
      // sava() // 保存画布的所有状态
      // restore()  // 恢复状态
      // canvas状态存储在栈中，每次save，当前的状态就被推送到栈中，调用restore后上次save的状态就会从栈中弹出
      
      // 绘制矩形
      ctx.fillRect(0, 0, 150, 150)
      // 保存状态
      ctx.save()

      // 在原有的基础上对颜色做改变
      ctx.fillStyle = "#09f"
      ctx.fillRect(15, 15, 120, 120)
      ctx.save()

      ctx.fillStyle = "#fff"
      // 设置透明度
      ctx.globalAlpha = 0.5
      ctx.fillRect(30, 30, 90, 90)
      
      // 加载上一次保存的状态
      ctx.restore()
      ctx.fillRect(45, 45, 60, 60)

      // 加载第一次保存的状态
      ctx.restore()
      ctx.fillRect(60, 60, 30, 30)

    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

