<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h2>Mood Tracker</h2>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/mood">Moods</RouterLink>
        <RouterLink to="/journal">Journal</RouterLink>
        <RouterLink to="/summary">Summary</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
