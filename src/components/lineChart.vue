<template>
  <div class="canvas-container">
    <canvas id="canvas" width="700" height="500"> </canvas>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted() {
    // 统计图
    const canvas = document.querySelector("#canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      const unitWidth = 20;
      const unitHeight = 20;
      for (let i = 0; i < canvas.width / unitWidth; i++) {
        // 绘制竖线
        ctx.moveTo(i * unitWidth, 0);
        ctx.lineTo(i * unitWidth, canvas.height);
      }

      for (let i = 0; i < canvas.height / unitHeight; i++) {
        // 绘制横线
        ctx.moveTo(0, i * unitHeight);
        ctx.lineTo(canvas.width, i * unitHeight);
      }
      // ctx.strokeStyle = "#ccc";
      ctx.strokeStyle = "#fff";
      ctx.stroke();

      // 定义原点
      const pointX = 100;
      const pointY = 400;
      // 定义箭头
      const arrows = 10;
      const lineH = 5;
      ctx.beginPath();
      // 横轴
      ctx.moveTo(pointX, pointY);
      ctx.lineTo(canvas.width - pointX, pointY);
      // 箭头
      ctx.lineTo(canvas.width - pointX - arrows, pointY - arrows);
      ctx.moveTo(canvas.width - pointX, pointY);
      ctx.lineTo(canvas.width - pointX - arrows, pointY + arrows);
      ctx.strokeStyle = "black";
      ctx.stroke();

      ctx.beginPath();
      // 纵轴
      ctx.moveTo(pointX, pointY);
      ctx.lineTo(pointX, canvas.height - pointY);
      // 箭头
      ctx.lineTo(pointX - arrows, canvas.height - pointY + arrows);
      ctx.moveTo(pointX, canvas.height - pointY);
      ctx.lineTo(pointX + arrows, canvas.height - pointY + arrows);
      ctx.strokeStyle = "black";
      ctx.stroke();

      // 设置文字
      // 原点文字
      ctx.textBaseline = "top";
      ctx.direction = "rtl";
      // 横轴
      for (let i = 0; i < (canvas.width - pointX - pointX) / unitWidth; i++) {
        // 文字
        ctx.fillText(i * unitWidth, pointX + i * unitWidth, pointY);
        // 坐标线
        ctx.moveTo(pointX + i * unitWidth, pointY)
        ctx.lineTo(pointX + i * unitWidth, pointY - lineH)
      }
      // 纵轴
      for (let i = 0; i < (pointY - (canvas.height - pointY)) / unitHeight; i++) {
        // 文字
        ctx.fillText(i * unitHeight, pointX, pointY - i * unitHeight);
        // 坐标线
        ctx.moveTo(pointX, pointY - i * unitHeight)
        ctx.lineTo(pointX + lineH, pointY - i * unitHeight)
      }
      ctx.stroke()

      // 数据
      // 一条线
      // const data = []
      // const xAxis = []
      // for (let i = 0; i < (canvas.width - pointX - pointX) / unitWidth; i++) {
      //   data.push(Math.ceil(Math.random() * 100))
      //   xAxis.push(i*unitWidth)
      // }

      // ctx.beginPath()
      // for (let i=0; i <xAxis.length; i++) {
      //   if (i === 0) {
      //     ctx.moveTo(pointX + xAxis[i], pointY - data[i])
      //   }else {
      //     ctx.lineTo(pointX + xAxis[i], pointY - data[i])
      //   }
      // }
      // ctx.stroke()

      // 多条线
      const data = []
      const xAxis = []
      for(let j=0; j < 3; j++) {
        const line = []
        for (let i = 0; i < (canvas.width - pointX - pointX) / unitWidth; i++) {
          line.push(Math.ceil(Math.random() * 200))
          xAxis.push(i*unitWidth)
        }
        data.push(line)
      }

      const color = ['blue', 'red', 'green']
      for (let j=0; j< data.length; j++) {
        ctx.beginPath()
        ctx.strokeStyle = color[j]
        for (let i=0; i <xAxis.length; i++) {
          if (i === 0) {
            ctx.moveTo(pointX + xAxis[i], pointY - data[j][i])
          }else {
            ctx.lineTo(pointX + xAxis[i], pointY - data[j][i])
          }
        }
        ctx.stroke()
      }

      
    }
  }
};
</script>
<style scoped>
canvas {
  border: 1px solid black;
}</style
>>
