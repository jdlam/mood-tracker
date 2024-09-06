<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

interface MoodObject {
  value: string
  icon: string
}

// TODO: move this out to its own file later with harder typing
const moods: string[] = ['Happy', 'Content', 'Sad']
const moodObjects: MoodObject[] = [
  {
    value: 'Happy',
    icon: 'face-smile'
  },
  {
    value: 'Content',
    icon: 'face-meh'
  },
  {
    value: 'Sad',
    icon: 'face-frown'
  }
]

const track = (mood: string) => {
  console.log('mood is', mood)
}
</script>

<template>
  <div class="mood-container">
    <div
      v-for="mood in moodObjects"
      v-bind:key="mood.value"
      @click="track(mood.value)"
      class="button"
    >
      <FontAwesomeIcon :icon="['far', mood.icon]" />
      <p>{{ mood.value }}</p>
    </div>
  </div>
</template>

<style scoped>
.mood-container {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
}

.button {
  color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
}

.button:hover {
  border: 1px white;
}

.button > svg {
  height: 40px;
  width: 40px;
}
</style>
