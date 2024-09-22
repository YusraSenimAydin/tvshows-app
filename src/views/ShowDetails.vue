<template>
  <div class="bg-gray-900 min-h-screen text-white py-8">
    <div v-if="show" class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row shadow-lg rounded-lg bg-gray-800 overflow-hidden">
        <div class="w-full md:w-1/3">
          <img :src="show.image?.original || '/default-poster.jpg'" alt="Poster" class="w-full h-full object-cover" />
        </div>
        <div class="p-6 md:w-2/3">
          <h1 class="text-4xl font-extrabold mb-4 text-yellow-400">{{ show.name }}</h1>
          <p class="text-lg leading-relaxed mb-6" v-html="show.summary"></p>

          <div class="mb-6">
            <p class="text-sm uppercase font-semibold text-gray-400">Genres</p>
            <p class="text-lg text-white">{{ show.genres.join(', ') }}</p>
          </div>

          <div class="mb-6">
            <p class="text-sm uppercase font-semibold text-gray-400">Language</p>
            <p class="text-lg text-white">{{ show.language }}</p>
          </div>

          <div class="mb-6">
            <p class="text-sm uppercase font-semibold text-gray-400">Premiered</p>
            <p class="text-lg text-white">{{ show.premiered }}</p>
          </div>

          <div class="mb-6">
            <p class="text-sm uppercase font-semibold text-gray-400">Rating</p>
            <p class="text-lg text-white">{{ show.rating.average }}</p>
          </div>

          <div class="mt-8">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedShow']),
    show() {
      return this.selectedShow;
    },
  },
  created() {
    this.fetchShowDetails(this.$route.params.id);
  },
  methods: {
    ...mapActions(['fetchShowDetails']),
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }

  .shadow-lg {
    transition: all 0.3s ease;
  }
}
</style>
