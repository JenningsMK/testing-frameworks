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
      <router-link :to="{ name: 'useVue' }">useVue</router-link>
    </li>
    <li><a href="https://vestjs.dev/">Vest</a></li>
    <li><a href="https://github.com/jquense/yup">Yup</a></li>
    <li><a href="https://zod.dev/">Zod</a></li>
  </ul>
</nav>
</template>
