<template>
  <header class="bg-gray-900 p-4 flex flex-col sm:flex-row justify-between items-center shadow-lg space-y-4 sm:space-y-0">
    <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
      <router-link to="/" class="text-white text-2xl sm:text-4xl font-bold tracking-wide hover:text-yellow-400 transition-colors">
        TV Shows
      </router-link>
      <router-link to="/high-rated" class="text-yellow-400 font-medium text-base sm:text-lg hover:underline transition duration-300">
        IMDB 7+ TV Shows
      </router-link>
    </div>

    <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
      <select v-model="selectedGenre"
        class="px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 transition-colors">
        <option value="">All Categories</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Action">Action</option>
        <option value="Horror">Horror</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
      <div class="relative w-full sm:w-auto">
        <input v-model="query" @keyup.enter="emitSearch" type="text" placeholder="Search TV Shows..."
          class="px-4 py-2 rounded-full border border-gray-600 bg-gray-800 text-white w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      selectedGenre: '',
    };
  },
  methods: {
    emitSearch() {
      this.$emit('search', { query: this.query.trim(), genre: this.selectedGenre });
    },
  },
};
</script>

<style scoped>
header {
  background-image: linear-gradient(to right, #2d3748, #1a202c);
}
</style>
