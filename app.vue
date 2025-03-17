<script setup lang="ts">
const items = ref([
  {
    label: 'Icons',
    icon: 'i-lucide-smile',
    content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
  },
  {
    label: 'Colors',
    icon: 'i-lucide-swatch-book',
    content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
  }
])
</script>

<template>
  <div class="container mx-auto bg-gray-200 mt-5">
      <div>
        <NuxtLayout>
          <NuxtPage/>
        </NuxtLayout>
      </div>

    <UAccordion :items="items" />
      <UBadge>Badge</UBadge>
      <UButton color="primary" variant="subtle">Button</UButton>
  </div>
</template>
