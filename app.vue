<script setup lang='ts'>
import { useTheme } from 'vuetify';

const theme = useTheme();

theme.global.name.value = 'light';
// theme.global.name.value = 'dark';
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <v-main>
      <NuxtPage />
    </v-main>
  </NuxtLayout>
</template>

<style scoped>

</style>
