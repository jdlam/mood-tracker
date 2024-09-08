<script setup lang="ts">
import { useMoodEntriesStore } from '@/stores/moodEntries'

const moodEntriesStore = useMoodEntriesStore()
</script>
<template>
  <div>
    hello world. these are my moods
    <ul>
      <li v-for="(entry, idx) in moodEntriesStore.moodEntries" :key="`mood-entry-${idx}`">
        <pre>
          {{ entry }}
        </pre>
      </li>
    </ul>
  </div>
</template>
