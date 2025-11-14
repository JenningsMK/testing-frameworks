<script setup lang="ts">
interface Props {
  citeLink: string
}
defineProps<Props>()
</script>

<template>
  <section class="intro-section">
    <div>
      <blockquote :cite="citeLink">
        <slot name="into" />
      </blockquote>
    </div>

    <div>
      <slot name="code" />
    </div>
  </section>
</template>

<style>
blockquote {
    margin-bottom: var(--spacing);
}
</style>
