<script setup lang="ts">
import { getSettingsDataUrl } from '~/api/api';

const { url, headers } =  getSettingsDataUrl();
const { data: settingsData, error } = await useFetch(url, {
  headers,
});

if (error.value) {
  console.error('Error fetching settings data:', error.value);
}
</script>

<template>
  <div>
    <h1>Settings Data</h1>
    <pre>{{ settingsData }}</pre>
  </div>
</template>