<script setup lang="ts">
import { object, string, array } from 'yup';
import { ref } from 'vue';

import testingForm from '@/components/testing-form.vue';

const schema = object({
  givenName: string().required('Name is required').min(2, 'Name is too short'),
  familyName: string().required('Family name is required'),
  emailAddress: string().email('Value doesnt look like an email address'),
  phoneNumber: string().matches(/^\d{10}$/, 'Phone number miss match').required('Phone number is required'),
  cssColour: string().required('Colour is required'),
  frameworks: array(string().required('Need an answer')),
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
  <header>
    <h2>Vest</h2>
    <a href="https://github.com/jquense/yup">Yup website and documentation</a>
  </header>

  <div>
    <blockquote cite="https://github.com/jquense/yup">
      Yup is a schema builder for runtime value parsing and validation. Define a schema, transform a value to match, assert the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformation.
    </blockquote>
  </div>

  <div>
    <pre>
      <code>
        const schema = {
          givenName: string().required('Name is required').min(2, 'Name is too short'),
          familName: string()
        }

        await schema.validate(data, schema)
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
          <strong>{{ error }}</strong>
        </li>
      </ul>
    </div>
  </section>
</template>
