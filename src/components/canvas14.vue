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

      // 缩放：用来增减图形在canvas中的像素数目
      // 对形状、位图进行缩小或放大
      // scale(x, y)
      // 可以缩放画布的水平和垂直的单位，x 水平单位，y：垂直单位
      // 默认x:1, y:1
      // 小于1：缩放， 大于1：放大

      // 默认情况下，canvas的一个单位为1像素
      // 如果缩放因子是0.5，则1单位像素就变为0.5像素

      // ctx.fillRect(1, 10, 10, 10)

      // ctx.save()
      // ctx.scale(10, 3)
      // ctx.fillRect(1, 10, 10, 10)
      // ctx.restore()

      // ctx.beginPath()
      // ctx.fillStyle = 'red'
      // // ctx.scale(10, 3) 等价于 ctx.fillRect(1* 10, 10*3, 10*10, 10*3)
      // ctx.fillRect(1* 10, 10*3, 10*10, 10*3)


      // ctx.save()
      // // ctx.fillRect(100, 100, 100, 100)
      // ctx.translate(300, 0)
      // // y轴翻转
      // ctx.scale(-1, 1);
      // ctx.fillRect(100, 100, 100, 100)
      // ctx.restore()

      // ctx.save()
      // ctx.font = '48px serif';
      // ctx.fillText('MDN', 100, 100)
      // ctx.translate(200, 0)
      // // y轴翻转
      // ctx.scale(-1, 1);
      // ctx.fillText('MDN', 100, 100)
      // ctx.restore()

      ctx.save()
      ctx.font = '48px serif';
      ctx.fillText('MDN', 100, 100)
      // x轴翻转
      ctx.translate(0,canvas.height); 
      ctx.scale(1,-1);
      ctx.fillText('MDN', 100, 100)
      ctx.restore()

      
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

