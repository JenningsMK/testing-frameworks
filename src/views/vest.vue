<script setup lang="ts">
import testingForm from '@/components/testing-form.vue';
import { ref } from "vue";
import {
  create,
  enforce,
  mode,
  Modes,
  test,
  optional
} from 'vest';
import 'vest/enforce/email';

const formDetails = ref({
  givenName: '',
  frameworks: [],
  phoneNumber: '',
  familyName: '',
  emailAddress: '',
});


const suite = create((data = {}) => {
  mode(Modes.ALL);

  optional(['emailAddress'])

  test('checks we have a valid first name', () => {
    enforce(data.givenName)
      .message('Whats your name')
      .isNotBlank()
      .message('Your name is too short, it must be at least 2 characters long')
      .longerThan(2)
  });

  test('checking the family name', () => {
    enforce(data.familyName).message('family name is required').isNotBlank();
  });

  test('emailAddress', () => {
    enforce(data.emailAddress)
      .message('is required').isNotBlank()
      .message('Not a valid email address').isEmail();
  });

  test('phoneNumber', () => {
    enforce(data.phoneNumber)
      .message('is required').isNotBlank()
      .message('Your number is required').matches(/^\d{10}$/);
  });

  test('checking what colour they like', () => {
    enforce(data.cssColour)
      .message('What you colour').isNotBlank();
  });

  test('framework', () => {
    enforce(data.frameworks)
      .message('Need an answer').longerThan(1)
  })
});

const isValid = ref(false);
const errors = ref([]);
function submitForm() {
  const results = suite(formDetails.value);
  isValid.value = !results.hasErrors();
  errors.value = results.errors;
}
</script>

<template>
  <header>
    <h2>Vest</h2>
    <a href="https://vestjs.dev/docs/get_started">Vest website and documentation</a>
  </header>

  <div>
    <blockquote cite="https://vestjs.dev/docs/get_started">
      Vest is a powerful and easy-to-use JavaScript validation framework that allows you to write and run validations for your code. It is designed to handle complex validation scenarios while still being simple to use.
    </blockquote>
  </div>

  <div>
    <dl>
      <dt>Documentation</dt>
      <dd>Clear with a lot of helpful code examples</dd>
    </dl>

    <pre>
      <code>
        const suit = create(data = {}) => {
          test('name is required', () => {
            enforce(data.name).message('Name is required').isNotEmpty();
          });
        });
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
