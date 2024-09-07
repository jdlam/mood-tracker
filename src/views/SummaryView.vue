<script setup lang="ts">
// import MoodsList from '../components/MoodsList.vue'
import MoodRater from '../components/rating/MoodRater.vue'
</script>

<template>
  <main>
    <div>
      This is a summary page
      <p>
        analytics will go here with a visualization chart. You should be able to define time ranges,
        get general sentiment, and a quick summary of your whole month or year
      </p>
    </div>
    <MoodRater />
  </main>
</template>
