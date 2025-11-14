<script setup lang="ts">
import testingForm from '@/components/testing-form.vue';
import IntoSection from '@/components/intro-section.vue';
import PageHeader from '@/components/page-header.vue';
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

import { validationMessages } from '@/validation-messages.ts';
const { givenName, familyName, emailAddress, frameworks, phoneNumber, cssColour} = validationMessages

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
      .message(givenName.required)
      .isNotBlank()
      .message(givenName.minLength)
      .longerThan(2)
  });

  test('checking the family name', () => {
    enforce(data.familyName).message(familyName.required).isNotBlank();
  });

  test('emailAddress', () => {
    enforce(data.emailAddress)
      .message(emailAddress.inValid).isEmail();
  });

  test('phoneNumber', () => {
    enforce(data.phoneNumber)
      .message(phoneNumber.required).isNotBlank()
      .message(phoneNumber.inValid).matches(/^\d{10}$/);
  });

  test('checking what colour they like', () => {
    enforce(data.cssColour)
      .message(cssColour.required).isNotBlank();
  });

  test('framework', () => {
    enforce(data.frameworks)
      .message(frameworks.required).longerThan(1)
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
  <PageHeader>
    <template #title>Vest</template>
    <a href="https://vestjs.dev/docs/get_started">Vest website and documentation</a>
  </PageHeader>

  <IntoSection cite-link="https://vestjs.dev/docs/get_started">
    <template #into>
      Vest is a powerful and easy-to-use JavaScript validation framework that allows you to write and run validations for your code. It is designed to handle complex validation scenarios while still being simple to use.
    </template>

    <template #code>
      <pre>
      <code>
        const suit = create(data = {}) => {
          test('name is required', () => {
            enforce(data.name).message('Name is required').isNotEmpty();
          });
        });

        suite(formDetails.value);
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
          <strong>{{ error.message }}</strong>
        </li>
      </ul>
    </div>
  </section>
</template>
