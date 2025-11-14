<script setup lang="ts">
import SiteNavigation from './components/site-navigation.vue'
</script>

<template>
  <div class="site-container">
    <h1>Testing form</h1>

    <site-navigation />

    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
:root {
    --text-colour: #F9F9F9;
    --spacing: 1.5rem;
}

body {
    padding-top: 2rem;
    background: cadetblue;
    font-size: 1.4rem;
    color: var(--text-colour);
}

h1 {
    margin-bottom: var(--spacing);
}

.site-container {
    max-width: 1200px;
    margin-inline: auto;
}

a {
    color: var(--text-colour);
}
</style>
