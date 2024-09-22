<template>
  <div class="mb-6">
    <h3 class="text-2xl font-semibold mb-2">{{ genre }}</h3>
    <div class="flex overflow-x-auto space-x-4 py-2 scrollbar-hide">
      <ShowCard v-for="show in shows" :key="show.id" :show="show" v-lazy="show" />
    </div>
  </div>
</template>

<script>
import ShowCard from './ShowCard.vue';

export default {
  components: { ShowCard },
  props: {
    genre: String,
    shows: Array,
  },
};
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
