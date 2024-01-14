<script lang="ts" setup>

</script>

<template>
  <div class="bg-red-600 p-4 text-white flex justify-between">
    <div class="font-bold text-xl">
      Tim F1 App!
    </div>
    <div class="flex gap-2">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contacts">Contacts</router-link>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply font-bold bg-white text-red-600 px-2 rounded-2xl;
}
</style>
```
