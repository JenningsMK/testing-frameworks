<script setup lang="ts">
import testingForm from '@/components/testing-form.vue';
import IntoSection from '@/components/intro-section.vue';
import PageHeader from '@/components/page-header.vue';
import {useForm} from 'vee-validate';
import {toTypedSchema} from '@vee-validate/zod';
import {z} from 'zod';
import {ref} from "vue";

import { validationMessages } from '@/validation-messages.ts';
const { givenName: givenNameMess, familyName: familyNameMess, emailAddress, frameworks, phoneNumber, cssColour} = validationMessages

// Creates a typed schema for vee-validate
const schema = toTypedSchema(
    z.object({
      givenName: z.string().nonempty(givenNameMess.required).min(2, givenNameMess.minLength),
      familyName: z.string().nonempty(familyNameMess.required),
      emailAddress: z.string().email(emailAddress.inValid),
      phoneNumber: z.string().regex(/^[0-9]{10}$/).nonempty(phoneNumber.inValid),
      cssColour: z.string().nonempty(cssColour.required),
      frameworks: z.array(z.string()).nonempty(frameworks.required),
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
  <PageHeader>
    <template #title>
      VeeValidate
    </template>
    <a href="https://vee-validate.logaretm.com/v4/">VeeValidate website and documentation</a>
  </PageHeader>

  <IntoSection cite-link="https://vee-validate.logaretm.com/v4/">
    <template #into>
      VeeValidate is a validation library for Vue.js that provides a simple and flexible way to validate form fields.
    </template>

    <template #code>
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
    </template>
  </IntoSection>

  <testing-form @submit-form="submitForm" v-model:form-details="formDetails" v-bind="givenNameAttr" />

  <section>
    <p>Is form valid: {{ meta.valid }}</p>

    <div v-if="errorBag.length > 0">
      <h3>Validation Errors:</h3>
      <span>{{ errors }}</span>
    </div>
  </section>
</template>
