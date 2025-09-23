<script setup lang="ts">
import testingForm from '@/components/testing-form.vue';
import {computed, ref, shallowRef} from "vue";

import { useRegle, createRule, inferRules } from '@regle/core';
import { required, minLength, email, withMessage } from "@regle/rules";

const formDetails = ref({
  givenName: '',
  frameworks: []
});

const isPhoneNumber = createRule({
  validator: (value) => {
    return /^[0-9]{10}$/.test(value);
  },
});

const isValid = shallowRef(undefined);

const rules = computed(() => {
  return inferRules(formDetails, {
    givenName: {
      required: withMessage(required, 'Whats you name?'),
      minLength: withMessage(minLength(2), 'Your name is too short, it must be at least 2 characters long'),
    },

    familyName: {
      required,
    },

    emailAddress: {
      email,
    },

    phoneNumber: {
      required,
      isPhoneNumber,
    },

    cssColour: {
      required,
    },

    frameworks: {
      required
    }
  });
});

const {r$} = useRegle(formDetails, rules);

function submitForm() {
  r$.$touch();

  isValid.value = r$.$invalid;
}
</script>

<template>
  <header>
    <h2>Regle</h2>
    <a href="https://reglejs.dev/introduction/">Regle website and documentation</a>
  </header>

  <div>
    <blockquote cite="https://reglejs.dev/introduction/">
      Regle is a type-safe, headless form validation library that lets you write validation rules that mirror your data structure. Think of it as the perfect evolution of Vuelidate, but with modern TypeScript support and a more intuitive API
    </blockquote>
  </div>

  <div>
    <dl>
      <dt>Documentation</dt>
      <dd>Clear with a lot of helpful code examples</dd>

      <dt>Update frequency</dt>
      <dd>10 Comments in Auguste</dd>

      <dt>Tree shakeable</dt>
      <dd>❌</dd>

      <dt>Other notes</dt>
      <dd>Doesn't support Vue 2</dd>
      <dd>Only supports composition API</dd>
    </dl>

    <pre>
      <code>
        const formDetails = ref({});

        const rules = computed(() => {
          return inferRules(formDetails, {
            givenName: {
              required: withMessage(required, 'Whats you name?'),
              minLength: withMessage(minLength(2), 'Your name is too short, it must be at least 2 characters long'),
            },

            familyName: {
              required,
            },

            emailAddress: {
              email,
            },

            phoneNumber: {
              required,
              isPhoneNumber,
            },

            cssColour: {
              required,
            },

            frameworks: {
              required
            }
          });
        });

        const {r$} = useRegle(formDetails, rules);
      </code>
    </pre>
  </div>

  <testing-form @submit-form="submitForm" v-model:form-details="formDetails"/>

  <section>
    <p>Is form valid: {{ !isValid }}</p>

    <div v-if="isValid">
      <h3>Validation Errors:</h3>
      <ul>
        <li v-for="(error) in r$.$errors" :key="error">
          <strong>{{ error }}</strong>
        </li>
      </ul>
    </div>
  </section>
</template>
