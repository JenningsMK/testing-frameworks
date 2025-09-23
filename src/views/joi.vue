<script setup lang="ts">
  import testingForm from '@/components/testing-form.vue'
  import {
    ref,
    shallowRef,
  } from 'vue';

  import Joi from 'joi';

  const formDetails = ref({
    frameworks: []
  });

  const schema = Joi.object({
    givenName: Joi.string().required().min(2).messages({
      'string.empty': 'Whats you name?',
      'string.min': 'Your name is too short, it must be at least {{#limit}} characters long',
    }),
    familyName: Joi.string().required(),
    emailAddress: Joi.string().email(),
    phoneNumber: Joi.string().regex(/^[0-9]{10}$/).required(),
    cssColour: Joi.string().required(),
    frameworks: Joi.array().items(Joi.string()).required(),
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
  <header>
    <h2>Joi</h2>
    <a href="https://joi.dev/">Joi website and documentation</a>
  </header>

  <p>
    Joi is a schema description language and data validator for JavaScript objects.
  </p>

  <div>
    <dl>
      <dt>Documentation</dt>
      <dd>Not that helpful, had to use AI to workout how it all works</dd>

      <dt>Update frequency</dt>
      <dd>10 Comments in Auguste</dd>

      <dt>Tree shakeable</dt>
      <dd>❌</dd>
    </dl>

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
  </div>

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
