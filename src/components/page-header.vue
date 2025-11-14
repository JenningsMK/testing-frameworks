<template>
  <header class="page-header">
    <h2><slot name="title" /></h2>
    <slot />
  </header>
</template>

<style>
  .page-header {
      margin-bottom: var(--spacing);

      h2 {
          margin: 0;
      }
  }
</style>
