<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from '@/components/layout/HeaderComponent.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <header>
      <HeaderComponent />
    </header>
    <main class="flex-grow">
      <RouterView />
    </main>
    <footer class="bg-amber-600">Footer</footer>
  </div>
</template>
