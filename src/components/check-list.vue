<script setup lang="ts">
  import { frameworkCapabilities } from '@/framework-capabilities.ts';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const frameworkName = frameworkCapabilities[route.name];
  const capabilityType = frameworkName.type;
  const capabilityOnChange = frameworkName.onChangeValidation
    ? 'Supported'
    : 'Not supported';
  const capabilityTreeShakeable =  frameworkName.treeShakeable ? 'Yes' : 'No'
  const capabilityDocumentation = frameworkName.documentation;
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>On Change validation</th>
        <th>Tree shakeable</th>
        <th>Documentation</th>
      </tr>
    </thead>

    <tbody>
    <tr>
      <td>{{ capabilityType }}</td>
      <td>{{ capabilityOnChange }}</td>
      <td>{{ capabilityTreeShakeable }}</td>
      <td>{{ capabilityDocumentation }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style>
table {
    width: 100%;
    border: 1px solid #ccc;
    text-align: center;
    padding: 1rem 0;
    margin-bottom: var(--spacing);
}
</style>
