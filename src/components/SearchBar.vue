<template>
  <div>
    <input v-model="query" @keyup.enter="emitSearch" class="px-4 py-2 rounded border" />
  </div>
</template>
   
<script>
export default {
  data() {
    return {
      query: ''
    };
  },
  methods: {
    emitSearch() {
      this.$emit('search', this.query);
    }
  }
};
</script>
   