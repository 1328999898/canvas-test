<template>
  <div>
    <canvas id="glcanvas" width="640" height="480">
      无法初始化WebGL，您的浏览器、操作系统或硬件等可能不支持WebGL
    </canvas>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    // 获取canvas
    const canvas = document.querySelector("#glcanvas");
    // 初始化WebGL图形渲染上下文
    // https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext
    const gl = canvas.getContext('webgl')
    // 确认WebGL的支持性
    if (!gl) {
      console.log('无法初始化WebGL，您的浏览器、操作系统或硬件等可能不支持WebGL')
      return ;
    }
    // 使用黑色清除所有图像
    gl.clearColor(0, 0, 0, 1)
    // 用上面指定的颜色清除缓冲区
    gl.clear(gl.COLOR_BUFFER_BIT)

  }
}
</script>
