<template>
  <div>
    <canvas id="#canvas">

    </canvas>
    <div style="display:none;">
      <img id="source" src="https://mdn.mozillademos.org/files/5397/rhino.jpg" width="300" height="227">
      <img id="frame" src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" width="132" height="150">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    // 切片
    const canvas = document.getElementById("#canvas")
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')
      // Draw slice
      ctx.drawImage(document.getElementById('source'),
                    33, 71, 104, 124, 21, 20, 87, 104);

      // Draw frame
      ctx.drawImage(document.getElementById('frame'), 0, 0);

    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

