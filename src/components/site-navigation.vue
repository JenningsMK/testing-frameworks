<template>
<nav>
  <ul>
    <li>
      <router-link :to="{ name: 'joi' }">Joi</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'regie' }">Regie</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'vee' }">VeeValidate</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'vest'}">Vest</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'yup'}">Yup</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'zod'}">Zod</router-link>
    </li>
  </ul>
</nav>
</template>
