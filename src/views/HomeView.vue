<script setup lang="ts">
import MoodList from '@/components/shared/MoodList.vue'
</script>

<template>
  <main>
    <div id="wrapper">
      <MoodList />
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
