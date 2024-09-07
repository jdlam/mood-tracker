<script setup lang="ts">
// import MoodsList from '../components/MoodsList.vue'
import MoodRater from '../components/rating/MoodRater.vue'
</script>

<template>
  <main>
    <div id="wrapper">
      <MoodRater />
      <div>this needs journal entry associated here too. maybe optional</div>
    </div>
  </main>
</template>

<style scoped lang="css">
#wrapper {
  display: flex;
  flex-direction: column;
}

#wrapper > div {
  margin-bottom: 10px;
}
</style>
