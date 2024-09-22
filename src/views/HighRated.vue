<template>
  <div class="bg-gray-900 min-h-screen text-white py-8">
    <h1 class="text-3xl font-bold text-center mb-4">Yüksek Puanlı TV Şovları</h1>
    <div class="flex flex-wrap justify-center space-x-3">
      <ShowCard v-for="show in highRatedShows" :key="show.id" :show="show" />
    </div>
  </div>
</template>
   
<script>
import { mapState } from 'vuex';
import ShowCard from '../components/ShowCard.vue';
import { getHighRatedShows } from '../api/tvShowsApi';

export default {
  components: { ShowCard },
  data() {
    return {
      highRatedShows: [],
    };
  },
  computed: {
    ...mapState(['searchResults']),
  },
  created() {
    this.fetchHighRatedShows();
  },
  methods: {
    async fetchHighRatedShows() {
      try {
        this.highRatedShows = await getHighRatedShows();
      } catch (error) {
        console.error('Hata:', error);
      }
    },
  },
};
</script>
   
<style scoped></style>
   