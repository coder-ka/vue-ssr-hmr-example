<template>
  <div class="w-screen h-screen bg-primary-100 flex flex-col items-center">
    <div style="max-width: 1024px" class="w-full">
      {{word}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: "",
    };
  },
  created() {
    this.looking = this.$route.query.word;
  }
};
</script>

<style>
</style>
