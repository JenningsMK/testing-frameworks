<script setup lang="ts">
  import { faker } from '@faker-js/faker'

  const emits = defineEmits(['submit-form']);

  const [modelValue] = defineModel<{
    givenName: string;
    familyName: string;
    emailAddress: string;
    phoneNumber: string;
    cssColour: string;
    frameworks: string[];
  }>('formDetails', { required: true });

  function handleSubmit() {
    emits('submit-form');
  }

  function fill() {
    modelValue.value = {
      givenName: faker.person.firstName(),
      familyName: faker.person.lastName(),
      emailAddress: faker.internet.email(),
      phoneNumber: faker.phone.number(),
      cssColour: '',
      frameworks: [],
    }
  }
</script>

<template>
  <form @submit.prevent="() => handleSubmit()" novalidate>
    <fieldset>
      <legend>Personal details</legend>
      <div>
        <label for="given-name">Given Name</label>
        <input v-model="modelValue.givenName" id="given-name" type="text" />
      </div>

      <div>
        <label for="family-name">Family Name</label>
        <input v-model="modelValue.familyName" id="family-name" type="text" />
      </div>

      <div>
        <label for="email-address">Email address</label>
        <input v-model="modelValue.emailAddress" id="email-address" type="email" />
      </div>

      <div>
        <label for="phone-number">Phone number</label>
        <input v-model="modelValue.phoneNumber" id="phone" type="tel" />
      </div>
    </fieldset>


    <fieldset>
      <legend>Dev questions</legend>

      <div>
        <label for="favourite-colour">Favorite CSS colour</label>
        <select v-model="modelValue.cssColour" id="favourite-colour">
          <option value="">Select a color</option>
          <option value="aliceblue">Alice Blue</option>
          <option value="antiquewhite">Antique White</option>
          <option value="aqua">Aqua</option>
          <option value="aquamarine">Aquamarine</option>
          <option value="azure">Azure</option>
          <option value="beige">Beige</option>
          <option value="bisque">Bisque</option>
          <option value="black">Black</option>
          <option value="blanchedalmond">Blanched Almond</option>
          <option value="blue">Blue</option>
          <option value="blueviolet">Blue Violet</option>
          <option value="brown">Brown</option>
          <option value="burlywood">Burlywood</option>
          <option value="cadetblue">Cadet Blue</option>
          <option value="chartreuse">Chartreuse</option>
          <option value="chocolate">Chocolate</option>
          <option value="coral">Coral</option>
          <option value="cornflowerblue">Cornflower Blue</option>
          <option value="cornsilk">Cornsilk</option>
          <option value="crimson">Crimson</option>
          <option value="cyan">Cyan</option>
          <option value="darkblue">Dark Blue</option>
          <option value="darkcyan">Dark Cyan</option>
          <option value="darkgoldenrod">Dark Goldenrod</option>
          <option value="darkgray">Dark Gray</option>
          <option value="darkgreen">Dark Green</option>
          <option value="darkkhaki">Dark Khaki</option>
          <option value="darkmagenta">Dark Magenta</option>
          <option value="darkolivegreen">Dark Olive Green</option>
          <option value="darkorange">Dark Orange</option>
          <option value="darkorchid">Dark Orchid</option>
          <option value="darkred">Dark Red</option>
          <option value="darksalmon">Dark Salmon</option>
          <option value="darkseagreen">Dark Sea Green</option>
          <option value="darkslateblue">Dark Slate Blue</option>
          <option value="darkslategray">Dark Slate Gray</option>
          <option value="darkturquoise">Dark Turquoise</option>
          <option value="darkviolet">Dark Violet</option>
          <option value="deeppink">Deep Pink</option>
          <option value="deepskyblue">Deep Sky Blue</option>
          <option value="dimgray">Dim Gray</option>
          <option value="dodgerblue">Dodger Blue</option>
          <option value="firebrick">Fire Brick</option>
          <option value="floralwhite">Floral White</option>
          <option value="forestgreen">Forest Green</option>
          <option value="fuchsia">Fuchsia</option>
          <option value="gainsboro">Gainsboro</option>
          <option value="ghostwhite">Ghost White</option>
          <option value="gold">Gold</option>
          <option value="goldenrod">Goldenrod</option>
          <option value="gray">Gray</option>
          <option value="green">Green</option>
          <option value="greenyellow">Green Yellow</option>
          <option value="honeydew">Honeydew</option>
          <option value="hotpink">Hot Pink</option>
          <option value="indianred">Indian Red</option>
          <option value="indigo">Indigo</option>
          <option value="ivory">Ivory</option>
          <option value="khaki">Khaki</option>
          <option value="lavender">Lavender</option>
          <option value="lavenderblush">Lavender Blush</option>
          <option value="lawngreen">Lawn Green</option>
          <option value="lemonchiffon">Lemon Chiffon</option>
          <option value="lightblue">Light Blue</option>
          <option value="lightcoral">Light Coral</option>
          <option value="lightcyan">Light Cyan</option>
          <option value="lightgoldenrodyellow">Light Goldenrod Yellow</option>
          <option value="lightgray">Light Gray</option>
          <option value="lightgreen">Light Green</option>
          <option value="lightpink">Light Pink</option>
          <option value="lightsalmon">Light Salmon</option>
          <option value="lightseagreen">Light Sea Green</option>
          <option value="lightskyblue">Light Sky Blue</option>
          <option value="lightslategray">Light Slate Gray</option>
          <option value="lightsteelblue">Light Steel Blue</option>
          <option value="lightyellow">Light Yellow</option>
          <option value="lime">Lime</option>
          <option value="limegreen">Lime Green</option>
          <option value="linen">Linen</option>
          <option value="magenta">Magenta</option>
          <option value="maroon">Maroon</option>
          <option value="mediumaquamarine">Medium Aquamarine</option>
          <option value="mediumblue">Medium Blue</option>
          <option value="mediumorchid">Medium Orchid</option>
          <option value="mediumpurple">Medium Purple</option>
          <option value="mediumseagreen">Medium Sea Green</option>
          <option value="mediumslateblue">Medium Slate Blue</option>
          <option value="mediumspringgreen">Medium Spring Green</option>
          <option value="mediumturquoise">Medium Turquoise</option>
          <option value="mediumvioletred">Medium Violet Red</option>
          <option value="midnightblue">Midnight Blue</option>
          <option value="mintcream">Mint Cream</option>
          <option value="mistyrose">Misty Rose</option>
          <option value="moccasin">Moccasin</option>
          <option value="navajowhite">Navajo White</option>
          <option value="navy">Navy</option>
          <option value="oldlace">Old Lace</option>
          <option value="olive">Olive</option>
          <option value="olivedrab">Olive Drab</option>
          <option value="orange">Orange</option>
          <option value="orangered">Orange Red</option>
          <option value="orchid">Orchid</option>
          <option value="palegoldenrod">Pale Goldenrod</option>
          <option value="palegreen">Pale Green</option>
          <option value="paleturquoise">Pale Turquoise</option>
          <option value="palevioletred">Pale Violet Red</option>
          <option value="papayawhip">Papaya Whip</option>
          <option value="peachpuff">Peach Puff</option>
          <option value="peru">Peru</option>
          <option value="pink">Pink</option>
          <option value="plum">Plum</option>
          <option value="powderblue">Powder Blue</option>
          <option value="purple">Purple</option>
          <option value="red">Red</option>
          <option value="rosybrown">Rosy Brown</option>
          <option value="royalblue">Royal Blue</option>
          <option value="saddlebrown">Saddle Brown</option>
          <option value="salmon">Salmon</option>
          <option value="sandybrown">Sandy Brown</option>
          <option value="seagreen">Sea Green</option>
          <option value="seashell">Seashell</option>
          <option value="sienna">Sienna</option>
          <option value="silver">Silver</option>
          <option value="skyblue">Sky Blue</option>
          <option value="slateblue">Slate Blue</option>
          <option value="slategray">Slate Gray</option>
          <option value="snow">Snow</option>
          <option value="springgreen">Spring Green</option>
          <option value="steelblue">Steel Blue</option>
          <option value="tan">Tan</option>
          <option value="teal">Teal</option>
          <option value="thistle">Thistle</option>
          <option value="tomato">Tomato</option>
          <option value="turquoise">Turquoise</option>
          <option value="violet">Violet</option>
          <option value="wheat">Wheat</option>
          <option value="white">White</option>
          <option value="whitesmoke">White Smoke</option>
          <option value="yellow">Yellow</option>
          <option value="yellowgreen">Yellow Green</option>
        </select>
      </div>

      <fieldset class="frameworks">
        <legend>Have you heard off any of these</legend>

        <div>
          <label for="frameworks-vue">
            Vue
          </label>
          <input v-model="modelValue.frameworks" type="checkbox" id="frameworks-vue" value="vue" name="frameworks" />
        </div>

        <div>
          <label for="frameworks-react">
            React
          </label>
          <input v-model="modelValue.frameworks" type="checkbox" id="frameworks-react" value="react" name="frameworks" />
        </div>

        <div>
          <label for="frameworks-svelte">
            Svelte
          </label>
          <input v-model="modelValue.frameworks" type="checkbox" id="frameworks-svelte" value="svelte" name="frameworks" />
        </div>
      </fieldset>
    </fieldset>

    <button type="submit">Submit</button>

    <button @click="() => fill()" type="button">Fill</button>
  </form>
</template>

<style>
  fieldset {
      margin-bottom: var(--spacing);

      div {
          margin-bottom: var(--spacing);
      }

      label {
          display: block;
      }

      input, select {
          padding: .3rem .8rem;
      }

      &.frameworks {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing);
          margin-bottom: 0;

          label {
              display: inline-block;
          }
      }
  }

  button {
      padding: .5rem 1rem;
      margin-right: .5rem;
      font-size: 1.2rem;
  }

</style>
