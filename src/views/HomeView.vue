<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useF1Service } from '@/composables/use.f1.service';

const drivers = ref([]);

onMounted(async () => {
  console.log('HomeView mounted');
  drivers.value = await useF1Service.getDrivers();
});
</script>

<template>
  <h1>Home sweet home</h1>
  <pre>{{ drivers }}</pre>
</template>
