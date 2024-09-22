import { createStore } from "vuex";
import {
  getShowsByGenre,
  searchShowsAPI,
  getShowDetails,
} from "../api/tvShowsApi";

const store = createStore({
  state: {
    genres: [
      { name: "Drama", shows: [] },
      { name: "Comedy", shows: [] },
      { name: "Action", shows: [] },
      { name: "Horror", shows: [] },
      { name: "Romance", shows: [] },
      { name: "Science-Fiction", shows: [] },
    ],
    searchResults: [],
    loading: false,
    selectedShow: null,
  },
  actions: {
    async fetchShows({ commit }, genre) {
      commit("SET_LOADING", true);
      try {
        const shows = await getShowsByGenre(genre);
        commit("SET_SHOWS", { genre, shows });
      } catch (error) {
        console.error("Veriler yüklenemedi:", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async searchShows({ commit }, { query, genre }) {
      commit("SET_LOADING", true);
      try {
        const shows = await searchShowsAPI(query, genre);
        commit("SET_SEARCH_RESULTS", shows);
      } catch (error) {
        console.error("Arama sonuçları yüklenemedi:", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchShowDetails({ commit }, id) {
      try {
        const showDetails = await getShowDetails(id);
        commit("SET_SELECTED_SHOW", showDetails);
      } catch (error) {
        console.error("Show details could not be fetched:", error);
      }
    },
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_SHOWS(state, { genre, shows }) {
      const genreIndex = state.genres.findIndex((g) => g.name === genre);
      if (genreIndex !== -1) {
        state.genres[genreIndex].shows = shows;
      }
    },
    SET_SEARCH_RESULTS(state, shows) {
      state.searchResults = shows;
    },
    SET_SELECTED_SHOW(state, show) {
      state.selectedShow = show;
    },
  },
});

export default store;
