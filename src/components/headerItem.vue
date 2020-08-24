<template>
  <div>
    <ul>
      <li v-for="item in routes" :key="item.path">
        <router-link :to="{path: item.path}">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "headerItem",
  computed: {
    routes() {
      return this.$router.options.routes
    }
  }
};
</script>
<style scoped>
ul, li {
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
}
</style>
