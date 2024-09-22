<template>
  <div class="bg-gray-900 min-h-screen text-white p-4 relative overflow-hidden">

    <div v-if="loading" class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 z-50">
      <div class="loading-spinner"></div>
      <h2 class="text-2xl mt-4">Yükleniyor...</h2>
    </div>

    <div v-else-if="searchQuery.query && searchResults.length > 0" class="flex flex-col h-full">
      <h2 class="text-2xl font-bold mb-4">Arama Sonuçları</h2>
      <div class="flex flex-wrap gap-4 h-full overflow-hidden">

        <ShowCard v-for="show in searchResults" :key="show.id" :show="show" />
      </div>
    </div>


    <div v-else-if="searchQuery.query && searchResults.length === 0">
      <h2 class="text-center text-2xl">Sonuç bulunamadı</h2>
    </div>


    <div v-else-if="!searchQuery.query && genres.length > 0">
      <div v-for="genre in genres" :key="genre.name" class="mb-8">
        <GenreSection :genre="genre.name" :shows="genre.shows" />
      </div>
    </div>


    <div v-else>
      <h2 class="text-center text-2xl">Hiçbir veri bulunamadı</h2>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import GenreSection from '../components/GenreSection.vue';
import ShowCard from '../components/ShowCard.vue';
import { searchShowsAPI } from '../api/tvShowsApi';

export default {
  components: {
    GenreSection,
    ShowCard,
  },
  props: {
    searchQuery: {
      type: Object,
      default: () => ({ query: '', genre: '' }),
    },
  },
  data() {
    return {
      searchResults: [],
    };
  },
  computed: {
    ...mapState({
      genres: (state) => state.genres,
      loading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapActions(['fetchShows']),
    async performSearch() {
      if (this.searchQuery.query) {
        try {
          this.searchResults = await searchShowsAPI(this.searchQuery.query, this.searchQuery.genre);
        } catch (error) {
          console.error("Hata:", error);
        }
      }
    },
  },
  watch: {
    searchQuery: {
      handler: 'performSearch',
      immediate: true,
    },
  },
  created() {
    this.genres.forEach((genre) => this.fetchShows(genre.name));
  },
};
</script>

<style scoped>
.loading-spinner {
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
