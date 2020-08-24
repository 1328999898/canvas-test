<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    const blob = new Blob([1,2,3])
    const fileName = 'test.csv'
    const link = document.createElement('a')
    const evt = document.createEvent("HTMLEvents")
    evt.initEvent('click', false, false)
    link.href = URL.createObjectURL(blob)
    link.download = fileName
    // link.style.display = "none"
    document.body.appendChild(link)
    link.click()
    window.URL.revokeObjectURL(link.href)
  },
  methods: {

  }
}
</script>
