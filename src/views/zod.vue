<script setup lang="ts">
import * as z from 'zod';
import { ref } from 'vue';

import testingForm from '@/components/testing-form.vue';
import IntoSection from '@/components/intro-section.vue';
import PageHeader from '@/components/page-header.vue';

import { validationMessages } from '@/validation-messages.ts';
const { givenName, familyName, emailAddress, frameworks, phoneNumber, cssColour} = validationMessages

const Data = z.object({
  givenName: z.string(givenName.required).min(2, givenName.minLength),
  familyName: z.string(familyName.required),
  emailAddress: z.optional(z.email(emailAddress.inValid)),
  phoneNumber: z.string(phoneNumber.required).regex(/^\d{10}$/, phoneNumber.inValid),
  cssColour: z.string(cssColour.required),
  frameworks: z.array(z.string()).min(1, frameworks.required),
});

const formDetails = ref({
  givenName: undefined,
  familyName: undefined,
  frameworks: [],
  phoneNumber: undefined,
  emailAddress: undefined,
  cssColour: undefined,
});

const errors = ref([]);
const isValid = ref(false);

function submitForm() {
  try {
    Data.parse(formDetails.value);
    isValid.value = true;
  } catch (err) {
    if (err instanceof z.ZodError) {
      isValid.value = false;
      errors.value = err.issues;
    }
  }
}
</script>

<template>
  <PageHeader>
    <template #title>
      Zod
    </template>
    <a href="https://zod.dev/">Zod website and documentation</a>
  </PageHeader>

  <IntoSection cite-link="https://zod.dev/">
    <template #into>
      TypeScript-first schema validation with static type inference
      by @colinhacks
    </template>

    <template #code>
      <pre>
        <code>
          const schema = {
            givenName: z.string('Name is required').min(2, 'Name is too short'),
            familName: z.optional(z.string()),
          }

          Data.parse(data);
        </code>
      </pre>
    </template>
  </IntoSection>

  <testing-form @submit-form="submitForm" v-model:form-details="formDetails" />

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
