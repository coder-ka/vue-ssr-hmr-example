<template>
  <div class="w-screen h-screen bg-primary-100 flex flex-col items-center">
    <div style="max-width: 1024px">
      <div class="w-full mt-24">
        <div class="w-64 flex flex-col items-center">
          <input
            @keydown.enter="search"
            v-model="word"
            class="shadow-inner w-full h-10 px-4 pt-1 rounded text-sm"
            type="text"
            placeholder="Input some text"
          />
          <button
            :disabled="word === ''"
            @click="search"
            class="shadow mt-4 text-xs px-4 py-2 rounded"
            :class="{
              'bg-primary-500': word !== '',
              'text-primary-100': word !== '',
              'bg-gray-500': word === '',
              'text-gray-300': word === ''
            }"
          >
            <font-awesome-icon icon="search" class="mr-2"></font-awesome-icon>
            <span>GO!</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: ""
    };
  },
  methods: {
    search(e) {
      this.$router.push({
        path: "examples",
        query: {
          word: this.word
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
