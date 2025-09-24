<script setup lang="ts">
import testingForm from '@/components/testing-form.vue';
import {useForm} from 'vee-validate';
import {toTypedSchema} from '@vee-validate/zod';
import {z} from 'zod';
import {ref} from "vue";

// Creates a typed schema for vee-validate
const schema = toTypedSchema(
    z.object({
      givenName: z.string().nonempty('Whats you name?').min(2, 'Your name is too short, it must be at least 2 characters long'),
      familyName: z.string().nonempty(),
      emailAddress: z.string().email(),
      phoneNumber: z.string().regex(/^[0-9]{10}$/).nonempty(),
      cssColour: z.string().nonempty(),
      frameworks: z.array(z.string()).nonempty(),
    }),
);

const {defineField, handleSubmit, errorBag, errors, meta} = useForm({validationSchema: schema});

const [givenName, givenNameAttr] = defineField('givenName');
const [familyName, familyNameAttr] = defineField('givenName');

const formDetails = ref({
  givenName,
  familyName
});

const submitForm = handleSubmit(() => {
  console.log('submitForm', formDetails.value);
})
</script>

<template>
  <header>
    <h2>VeeValidate</h2>
    <a href="https://vee-validate.logaretm.com/v4/">VeeValidate website and documentation</a>
  </header>

  <p>
    VeeValidate is a validation library for Vue.js that provides a simple and flexible way to validate form fields.
  </p>

  <div>
    <dl>
      <dt>Documentation</dt>
      <dd>Clear as broken into two parts. Component level and Composition API level. With good live coding examples</dd>

      <dt>Update frequency</dt>
      <dd></dd>

      <dt>Tree shakeable</dt>
      <dd></dd>

      <dt>Other notes</dt>
      <dd>Uses 3rd party validation schemas</dd>
    </dl>

    <pre>
      <code>
        const schema = toTypedSchema({
          ...
        });

        const {defineField, handleSubmit, errors} = useForm({validationSchema: schema});

        const [givenName, givenNameAttr] = defineField('givenName');
        const [familyName, familyNameAttr] = defineField('givenName');
        const [emailAddress, emailAddressAttr] = defineField('givenName');
        const [phoneNumber, phoneNumberAttr] = defineField('givenName');
        const [cssColour, cssColourAttr] = defineField('givenName');
        const [frameworks, frameworksAttr] = defineField('givenName');

        const submit = handleSubmit(
          () => {/* Handle form submission */},
          () => {/* Handle invalid form submission */}
        )
      </code>
    </pre>
  </div>

  <testing-form @submit-form="submitForm" v-model:form-details="formDetails" v-bind="givenNameAttr" />

  <section>
    <p>Is form valid: {{ meta.valid }}</p>

    <div v-if="errorBag.length > 0">
      <h3>Validation Errors:</h3>
      <span>{{ errors }}</span>
    </div>
  </section>
</template>
