<script setup lang="ts">

import testingForm from '@/components/testing-form.vue';
import IntoSection from '@/components/intro-section.vue';
import PageHeader from '@/components/page-header.vue';

import {computed, ref, shallowRef} from "vue";

import { useRegle, createRule, inferRules } from '@regle/core';
import { required, minLength, email, withMessage } from "@regle/rules";

import { validationMessages } from '@/validation-messages.ts';
const { givenName, familyName, emailAddress, frameworks, phoneNumber, cssColour} = validationMessages

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
      required: withMessage(required, givenName.required),
      minLength: withMessage(minLength(2), givenName.minLength),
    },

    familyName: {
      required: withMessage(required, familyName.required),
    },

    emailAddress: {
      email,
    },

    phoneNumber: {
      required: withMessage(required, phoneNumber.required),
      isPhoneNumber: withMessage(isPhoneNumber, phoneNumber.inValid),
    },

    cssColour: {
      required: withMessage(required, cssColour.required),
    },

    frameworks: {
      required: withMessage(required, frameworks.required)
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
  <PageHeader>
    <template #title>
      Regle
    </template>
    <a href="https://reglejs.dev/introduction/">Regle website and documentation</a>
  </PageHeader>

  <IntoSection cite-link="https://reglejs.dev/introduction/">
    <template #into>
      Regle is a type-safe, headless form validation library that lets you write validation rules that mirror your data structure. Think of it as the perfect evolution of Vuelidate, but with modern TypeScript support and a more intuitive API
    </template>

    <template #code>
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
            }
          });
        });

        const {r$} = useRegle(formDetails, rules);
      </code>
    </pre>
    </template>
  </IntoSection>

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
