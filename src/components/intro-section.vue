<script setup lang="ts">
import CheckList  from '@/components/check-list.vue';
import { regie, joi, yup, zod, vest, veeValidate } from '@/framework-code-examples.ts';
import {
  onMounted,
  ref,
} from 'vue';
import { useRoute } from 'vue-router';
import { codeToHtml } from 'shiki';

interface Props {
  citeLink: string
}
defineProps<Props>()

const route = useRoute();
const highlightedHtml = ref('');

onMounted( async () => {
  let code = '';

  switch (route.name) {
    case 'regie': {
      code = regie;
      break;
    }

    case 'veeValidate': {
      code = veeValidate;
      break;
    }

    case 'vest': {
      code = vest;
      break;
    }

    case 'yup': {
      code = yup;
      break;
    }

    case 'zod': {
      code = zod;
      break;
    }

    default: {
      code = joi
    }
  }

  highlightedHtml.value = await codeToHtml(code, {
    lang: 'javascript',
    theme: 'min-dark'
  });
});

</script>

<template>
  <section class="intro-section">
    <div>
      <blockquote :cite="citeLink">
        <slot name="into" />
      </blockquote>

      <CheckList />
    </div>

    <div v-html="highlightedHtml" class="code" />
  </section>
</template>

<style>
blockquote {
    margin-bottom: var(--spacing);
}

.code {
    font-size: 1rem;

    pre {
        padding: 1rem;
        border-radius: 0.5rem;
    }
}
</style>
