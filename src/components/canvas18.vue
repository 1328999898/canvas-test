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

      // for (let i=0; i< 6; i++){
      //   for (let j=0; j< 6; j++) {
      //     ctx.fillStyle = `rgb(${Math.floor(255-42.5*i)},${Math.floor(255-42.5*j)},0)`
      //     ctx.fillRect(j * 25, i * 25, 25, 25)
      //   }
      // }

      // for (var i=0;i<6;i++){
      //   for (var j=0;j<6;j++){
      //     ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' + 
      //                     Math.floor(255-42.5*j) + ')';
      //     ctx.beginPath();
      //     ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
      //     ctx.stroke();
      //   }
      // }
      
      // // 透明度
      // // 画背景
      // ctx.fillStyle = '#FD0';
      // ctx.fillRect(0,0,75,75);
      // ctx.fillStyle = '#6C0';
      // ctx.fillRect(75,0,75,75);
      // ctx.fillStyle = '#09F';
      // ctx.fillRect(0,75,75,75);
      // ctx.fillStyle = '#F30';
      // ctx.fillRect(75,75,75,75);
      // ctx.fillStyle = '#FFF';

      // // 设置透明度值
      // ctx.globalAlpha = 0.2;

      // // 画半透明圆
      // for (var i=0;i<7;i++){
      //     ctx.beginPath();
      //     ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
      //     ctx.fill();
      // }


      // rgba
      // 画背景
      ctx.fillStyle = 'rgb(255,221,0)';
      ctx.fillRect(0,0,150,37.5);
      ctx.fillStyle = 'rgb(102,204,0)';
      ctx.fillRect(0,37.5,150,37.5);
      ctx.fillStyle = 'rgb(0,153,255)';
      ctx.fillRect(0,75,150,37.5);
      ctx.fillStyle = 'rgb(255,51,0)';
      ctx.fillRect(0,112.5,150,37.5);

      // 画半透明矩形
      for (var i=0;i<10;i++){
        ctx.fillStyle = 'rgba(255,255,255,'+(i+1)/10+')';
        for (var j=0;j<4;j++){
          ctx.fillRect(5+i*14,5+j*37.5,14,27.5)
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

