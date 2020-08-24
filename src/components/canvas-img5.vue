<template>
  <div class="canvas-container">
    <table>
      <tr>
        <td><img src="https://mdn.mozillademos.org/files/5399/gallery_1.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5401/gallery_2.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5403/gallery_3.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5405/gallery_4.jpg"></td>
      </tr>
      <tr>
        <td><img src="https://mdn.mozillademos.org/files/5407/gallery_5.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5409/gallery_6.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5411/gallery_7.jpg"></td>
        <td><img src="https://mdn.mozillademos.org/files/5413/gallery_8.jpg"></td>
      </tr>
    </table>
    <img id="frame" src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" width="132" height="150">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    // 美术馆
    for (let i=0; i< document.images.length; i++) {
      if (document.images[i].getAttribute('id') != 'frame') {
        // Create canvas Element
        const canvas = document.createElement('canvas')
        canvas.setAttribute('width', 132)
        canvas.setAttribute('height', 150)

        // Insert Before image
        document.images[i].parentNode.insertBefore(canvas, document.images[i])

        const ctx = canvas.getContext('2d')
        ctx.drawImage(document.images[i], 15, 20)
        ctx.drawImage(document.getElementById("frame"), 0, 0)

      }
    }

  }
}
</script>
<style scoped>
.canvas-container {
  height: 100vh;
  background: 0 -100px repeat-x url(https://mdn.mozillademos.org/files/5415/bg_gallery.png) #4F191A;
  margin: 10px;
}

img {
  display: none;
}

table {
  margin: 0 auto;
}

td {
  padding: 15px;
}
</style>>

