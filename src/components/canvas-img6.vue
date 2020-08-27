<template>
  <div>
    <canvas id="#canvas">
      您的浏览器可能不支持canvas
    </canvas>
    <canvas id="imgs" @mousedown="down">

    </canvas>
    <a id="saveButton" type="button" @click="save" href="#">
      下载
    </a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      dataURL: "",
      type: 'png'
    }
  },
  mounted() {
    const canvas = document.getElementById("#canvas")
    if (canvas.getContext){
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = 'rgb(200, 0 , 0)'
      ctx.fillRect(10, 10, 50, 50)
      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
      ctx.fillRect(30, 30, 50, 50)

      const dataURL = canvas.toDataURL(this.type)
      this.dataURL = dataURL

      // 复制canvas
      const canvasImgs = document.getElementById("imgs")
      const ctxImgs = canvasImgs.getContext('2d')
      const image = new Image()
      image.onload = function() {
        ctxImgs.drawImage(image, 0, 0)
      }
      image.src = dataURL
    }
  },
  methods: {
    down(event) {
      // 鼠标按下时的坐标
      console.log('down', event.clientX, event.clientY)
    },
    save() {
      const btn = document.getElementById("saveButton")
      btn.href = this.dataURL
      btn.download = 'test_' + (new Date()).getTime() + '.' + this.type;
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid black;
}
</style>>

