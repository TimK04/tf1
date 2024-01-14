<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="bg-yellow-200">Header</header>
    <main class="flex-grow">
      <RouterView />
    </main>
    <footer class="bg-amber-600">Footer</footer>
  </div>
</template>
