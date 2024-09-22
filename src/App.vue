<template>
  <div id="app">
    <Header @search="handleSearch" />
    <router-view :searchQuery="searchQuery" :searchResults="searchResults" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { searchShowsAPI } from './api/tvShowsApi';

export default {
  components: { Header, Footer },
  data() {
    return {
      searchQuery: { query: '', genre: '' },
      searchResults: [],
    };
  },
  methods: {
    async handleSearch(searchData) {
      this.searchQuery = searchData;
      try {
        this.searchResults = await searchShowsAPI(searchData.query, searchData.genre);
      } catch (error) {
        console.error("Hata:", error);
      }
    },
  },
};
</script>
