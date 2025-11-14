<script setup lang="ts">
  import testingForm from '@/components/testing-form.vue';
  import IntoSection from '@/components/intro-section.vue';
  import PageHeader from '@/components/page-header.vue';
  import {
    ref,
    shallowRef,
  } from 'vue';

  import { validationMessages } from '@/validation-messages.ts';
  const { givenName, familyName, emailAddress, frameworks, phoneNumber, cssColour} = validationMessages

  import Joi from 'joi';

  const formDetails = ref({
    frameworks: []
  });

  const schema = Joi.object({
    givenName: Joi.string().required().min(2).messages({
      'string.empty': givenName.required,
      'string.min': givenName.minLength
    }),
    familyName: Joi.string().required().messages({ message: familyName.required}),
    emailAddress: Joi.string().email().messages({ message: emailAddress.inValid }),
    phoneNumber: Joi.string().regex(/^[0-9]{10}$/).required().messages({ message: phoneNumber.required }),
    cssColour: Joi.string().required().messages({ message: cssColour.required }),
    frameworks: Joi.array().items(Joi.string()).required().messages({ message: frameworks.required }),
  });

  const isValid = shallowRef(undefined);
  const output = shallowRef({});
  const validationErrors = shallowRef([]);

  function submitForm() {
    const { error, value } = schema.validate(formDetails.value, { abortEarly: false });

    isValid.value = !error;

    if( isValid.value ) {
      output.value = value;
      validationErrors.value = [];
    } else {
      validationErrors.value = error.details;
    }
  }
</script>

<template>
  <PageHeader>
    <template #title>
      Joi
    </template>
    <a href="https://joi.dev/">Joi website and documentation</a>
  </PageHeader>

  <IntoSection cite-link="https://zod.dev/">
    <template #into>
      Joi is a schema description language and data validator for JavaScript objects.
    </template>

    <template #code>
      <pre>
      <code>
        const schema = Joi.object({
          givenName: Joi.string().required().min(2).messages({
            'string.empty': 'Whats you name?',
            'string.min': 'Your name is too short, it must be at least {<!-- -->{#limit}} characters long',
          }),
          familyName: Joi.string().required(),
          emailAddress: Joi.string().email(),
          phoneNumber: Joi.string().regex(/^[0-9]{10}$/).required(),
          cssColour: Joi.string().required(),
          frameworks: Joi.array().items(Joi.string()).required(),
        });

        const { error, value } = schema.validate(formDetails.value);
      </code>
    </pre>
    </template>
  </IntoSection>

  <testing-form @submit-form="submitForm" v-model:form-details="formDetails"/>

  <section>
    <p>Is form valid: {{ isValid }}</p>

    <div v-if="validationErrors.length > 0">
      <h3>Validation Errors:</h3>
      <ul>
        <li v-for="error in validationErrors" :key="error.path.join('.')">
          <strong>{{ error.path.join('.') || 'Field' }}:</strong> {{ error.message }}
        </li>
      </ul>
    </div>
  </section>
</template>
