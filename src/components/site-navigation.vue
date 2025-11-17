<template>
<nav class="site-navigation">
  <ul>
    <li>
      <router-link :to="{ name: 'joi' }">Joi</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'regie' }">Regie</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'veeValidate' }">VeeValidate</router-link>
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

<style>
.site-navigation {
  margin-bottom: var(--spacing);
}

.site-navigation ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding-left: 0;
    margin: 0;

    & li {
        flex-grow: 1;
    }

    & a {
        display: inline-block;
        padding: 0.5rem 1rem;
        text-decoration: none;
        transform-origin: left;
        transition: transform 0.2s ease-in-out;
        font-size: 1.2rem;
        font-weight: bold;

        &:hover, &:focus {
            transform: scale(1.2);
        }

        &.router-link-active {
            color: black;
        }
    }
}
</style>
