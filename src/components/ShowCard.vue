<template>
  <router-link :to="`/show/${show.id}`">
    <div class="group relative w-40 h-60 overflow-hidden rounded-lg cursor-pointer">
      <img :src="show.image?.medium || '/default-poster.jpg'" alt="show.name"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
      <div
        class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h3 class="text-white text-sm font-bold text-center px-2">{{ show.name }}</h3>
        <div v-if="show.rating.average" class="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <span v-for="star in Math.floor(show.rating.average)" :key="star" class="text-yellow-400">&#9733;</span>
          <span v-if="show.rating.average % 1 !== 0" class="text-yellow-400">&#9734;</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    show: Object,
  },
};
</script>

<style scoped>
</style>
