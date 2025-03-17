<script setup lang="ts">
import { getSettingsDataUrl } from '~/api/api';

const { url, headers } =  getSettingsDataUrl();
const { data: settingsData, error } = useFetch(url, {
  headers,
});

if (error.value) {
  console.error('Error fetching settings data:', error.value);
}

const items = ref(settingsData.value?.data.top)
</script>

<template>
    <UNavigationMenu
        highlight
        highlight-color="primary"
        orientation="horizontal"
        :items="items"
        class="data-[orientation=horizontal]:border-b border-(--ui-border) data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48"
    />
</template>
