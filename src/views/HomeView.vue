<script setup lang="ts">
import MoodRater from '@/components/rating/MoodRater.vue'
</script>

<template>
  <main>
    <div id="wrapper">
      <MoodRater />
    </div>
  </main>
</template>

<style scoped lang="css">
#wrapper {
  display: flex;
  flex-direction: column;
  place-items: center;
}

#wrapper > div {
  margin-bottom: 10px;
}
</style>
