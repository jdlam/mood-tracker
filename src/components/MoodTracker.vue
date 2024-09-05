<script setup lang="ts">
// TODO: move this out to its own file later
const moods = ['Happy', 'Content', 'Sad']

const track = (mood) => {
  console.log('mood is', mood)
}
</script>

<template>
  <div class="container">
    <div v-for="mood in moods" v-bind:key="mood" @click="track(mood)" class="button">
      {{ mood }}
    </div>
  </div>
</template>

<style scoped></style>
