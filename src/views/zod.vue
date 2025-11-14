<script setup lang="ts">
  import * as z from 'zod';
  import { ref } from 'vue';

  import testingForm from '@/components/testing-form.vue';

  const Data = z.object({
    givenName: z.string('Name is required').min(2, 'Name is too short'),
    familyName: z.string('Family name is required'),
    emailAddress: z.optional(z.email('Value doesnt look like an email address')),
    phoneNumber: z.string('Phone number is required').regex(/^\d{10}$/, 'Phone number miss match'),
    cssColour: z.string('Colour is required'),
    frameworks: z.array(z.string()).min(1, 'Need an answer'),
  });

  const formDetails = ref({
    givenName: undefined,
    familyName: undefined,
    frameworks: [],
    phoneNumber: undefined,
    emailAddress: undefined,
    cssColour: undefined
  });

  const errors = ref([]);
  const isValid = ref(false);

  function submitForm() {
    try {
      Data.parse(formDetails.value);
      isValid.value = true;
    } catch (err) {
      console.error('%c ERROR ', 'background: #e74c3c; color: white; padding: 2px 5px; border-radius: 2px;', err)
      if (err instanceof z.ZodError) {
        isValid.value = false;
        errors.value = err.issues;
      }
    }
  }
</script>

<template>
  <header>
    <h2>Zod</h2>
    <a href="https://zod.dev/">Zod website and documentation</a>
  </header>

  <div>
    <blockquote cite="https://zod.dev/">
      TypeScript-first schema validation with static type inference
      by @colinhacks
    </blockquote>
  </div>

  <div>
    <pre>
      <code>
        const schema = {
          givenName: z.string('Name is required').min(2, 'Name is too short'),
          familName: z.optional(z.string()),
        }

        Data.parse(data);
      </code>
    </pre>
  </div>

  <testing-form @submit-form="submitForm" v-model:form-details="formDetails"/>

  <section>
    <p>Is form valid: {{ isValid }}</p>

    <div v-if="!isValid">
      <h3>Validation Errors:</h3>
      <ul>
        <li v-for="(error) in errors" :key="error">
          <strong>{{ error.message }}</strong>
        </li>
      </ul>
    </div>
  </section>
</template>
