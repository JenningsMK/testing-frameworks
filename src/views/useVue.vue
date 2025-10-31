<script setup lang="ts">
import { useAsyncValidator } from '@vueuse/integrations';
import {ref} from "vue";

const formDetails = ref({
  givenName: '',
  familyName: '',
  emailAddress: '',
  phoneNumber: '',
  cssColour: '',
  frameworks: [],
});

const rules = {
  givenName: [
    { required: true, message: 'Whats you name?' },
    { min: 2, message: 'Your name is too short, it must be at least 2 characters long' },
  ],
  familyName: [
    { required: true },
  ],
  emailAddress: [
    { type: 'email' },
  ],
  phoneNumber: [
    { required: true },
    { pattern: /^[0-9]{10}$/ },
  ],
  cssColour: [
    { required: true },
  ],
  frameworks: [
    { required: true },
  ],
}

const { isValid, errors } = useAsyncValidator(formDetails, rules);
</script>

<template>
<header>
    <h2>Joi</h2>
    <a href="https://vueuse.org/integrations/useAsyncValidator/#useasyncvalidator">
      useVue async documentation
    </a>
  </header>

  <p>
    Wrapper for <a href="https://github.com/yiminghe/async-validator">async-validator.</a>
  </p>

  <div>
    <dl>
      <dt>Documentation</dt>
      <dd>It's all a bit all over the place</dd>

      <dt>Update frequency</dt>
      <dd></dd>

      <dt>Tree shakeable</dt>
      <dd></dd>
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

<style scoped>

</style>
