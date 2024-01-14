<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from '@/components/layout/HeaderComponent.vue';
import FooterComponent from '@/components/layout/FooterComponent.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <header>
      <HeaderComponent />
    </header>
    <main class="flex-grow">
      <div class="p-4">
        <RouterView />
      </div>
    </main>
    <footer class="bg-amber-600">
      <FooterComponent />
    </footer>
  </div>
</template>
