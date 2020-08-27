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
      // 渐变
      // 线性渐变：渐变的起点、终点
      const lingrad = ctx.createLinearGradient(10, 10, 0, 100)
      // const lingrad = ctx.createLinearGradient(10, 10, 10, 100)
      // 放射性渐变
      // const lingrad = ctx.createRadialGradient(105, 105, 20, 112, 120, 50)
      // const lingrad = ctx.createRadialGradient(105,105,10,100,180,100);
      // 上色：渐变中颜色所在的相对位置、颜色
      lingrad.addColorStop(0, 'red');
      lingrad.addColorStop(0.15, 'orange');
      lingrad.addColorStop(0.3, 'yellow');
      lingrad.addColorStop(0.45, 'green');
      lingrad.addColorStop(0.6, 'black');
      lingrad.addColorStop(0.75, 'blue');
      lingrad.addColorStop(0.9, 'purple');
      lingrad.addColorStop(1, 'orange');

      ctx.fillStyle = lingrad;

      // 设置文字的阴影
      // x轴的延伸距离  负值：会往上或者左延伸， 正值：往下或者右
      ctx.shadowOffsetX = 5;
      // Y轴的延伸距离  负值：会往上或者左延伸， 正值：往下或者右
      ctx.shadowOffsetY = 5;
      // 阴影的模糊程度 默认0
      ctx.shadowBlur = 5;
      // 设置阴影颜色效果
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      // ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
      // ctx.fillRect(0, 0, 300, 300)
      // ctx.font = "48px serif"
      // ctx.font = "48px Lucida Console, Monaco, monospace"
      ctx.font = "48px 'Courier New', Courier, monospace"
      ctx.fillText("This is a heading", 10, 50)
      ctx.fillText("This is a heading", 10, 100)
      // ctx.strokeText("Hello World", 10, 50)


      const img = new Image()
      img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
      img.onload = function() {
        // 循环图片
        // repeat repeat-x repeat-y no-repeat
        const ptn = ctx.createPattern(img, 'repeat')
        ctx.fillStyle = ptn
        // ctx.fillRect(200, 200, 200, 200)
        ctx.fillText("This is a heading", 10, 200)
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

