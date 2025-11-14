<script setup lang="ts">
import { object, string, array } from 'yup';
import { ref } from 'vue';

import testingForm from '@/components/testing-form.vue';
import IntoSection from '@/components/intro-section.vue';
import PageHeader from '@/components/page-header.vue';

import { validationMessages } from '@/validation-messages.ts';
const { givenName, familyName, emailAddress, frameworks, phoneNumber, cssColour} = validationMessages

const schema = object({
  givenName: string().required(givenName.required).min(2, givenName.minLength),
  familyName: string().required(familyName.required),
  emailAddress: string().email(emailAddress.inValid),
  phoneNumber: string().matches(/^\d{10}$/, phoneNumber.inValid).required(phoneNumber.required),
  cssColour: string().required(cssColour.required),
  frameworks: array(string().required(frameworks.required)),
});

const formDetails = ref({
  givenName: '',
  frameworks: [],
  phoneNumber: '',
  familyName: '',
  emailAddress: '',
});

const isValid = ref(false);
const errors = ref([]);

async function submitForm() {
  try {
    await schema.validate(formDetails.value, {
      abortEarly: false
    });
    isValid.value = true;
  } catch (e) {
    isValid.value = false;
    errors.value = e.errors;
  }
}
</script>

<template>
  <PageHeader>
    <template #title>
      Yup
    </template>

    <a href="https://github.com/jquense/yup">Yup website and documentation</a>
  </PageHeader>

  <IntoSection cite-link="https://github.com/jquense/yup">
    <template #into>
      Yup is a schema builder for runtime value parsing and validation. Define a schema, transform a value to match, assert the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformation.
    </template>

    <template #code>
      <pre>
      <code>
        const schema = {
          givenName: string().required('Name is required').min(2, 'Name is too short'),
          familName: string()
        }

        await schema.validate(data, schema)
      </code>
    </pre>
    </template>
  </IntoSection>

  <testing-form @submit-form="submitForm" v-model:form-details="formDetails"/>

  <section>
    <p>Is form valid: {{ isValid }}</p>

    <div v-if="!isValid">
      <h3>Validation Errors:</h3>
      <ul>
        <li v-for="(error) in errors" :key="error">
          <strong>{{ error }}</strong>
        </li>
      </ul>
    </div>
  </section>
</template>
