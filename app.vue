<script setup lang='ts'>
import { useTheme } from 'vuetify';

const theme = useTheme();

// theme.global.name.value = 'light';
theme.global.name.value = 'dark';
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style scoped>

</style>
