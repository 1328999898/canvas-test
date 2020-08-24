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
    // 使用图像
    const canvas = document.getElementById("#canvas")
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')

      // 通过数据嵌入图像
      const img = new Image()
      img.src = 'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==';
      
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

