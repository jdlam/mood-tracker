import { defineStore } from 'pinia'

interface NewEntry {
  mood: string
  text: string
}

interface ExistingEntry {
  mood: string
  text: string
  date: Date
}

interface MoodEntriesState {
  moodEntries: ExistingEntry[]
}

export const useMoodEntriesStore = defineStore('moodEntries', {
  state: (): MoodEntriesState => ({
    moodEntries: []
  }),
  actions: {
    add(newEntry: NewEntry): void {
      const entry = {
        mood: newEntry.mood,
        text: newEntry.text,
        date: new Date()
      } as ExistingEntry
      this.moodEntries.push(entry)
    },
    delete(index: number): void {
      this.moodEntries.splice(index, 1)
    },
    update(index: number, modifiedEntry: ExistingEntry): void {
      this.moodEntries.splice(index, 1, modifiedEntry)
    }
  },
  getters: {
    getCount(): number {
      return this.moodEntries.length
    },
    getByIndex(idx: number): ExistingEntry {
      return this.moodEntries[idx]
    },
    getByDate(date: string): ExistingEntry {
      console.log(date)
      // TODO: get entry by date
      // simplify date to the day
      // identify if a there is an entry with that same date
      return this.moodEntries[0]
    }
  }
})
