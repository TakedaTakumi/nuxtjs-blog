<script setup lang='ts'>
import { useTheme } from 'vuetify';

const theme = useTheme();

const value = ref(true);

watch(value, () => {
  theme.global.name.value = value.value ? 'light' : 'dark';
});

value.value = false;
</script>

<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>
      <lazy-app-title />
    </v-app-bar-title>

    <template #append>
      <v-switch
        v-model="value"
        label="☀"
        color="primary"
      />
    </template>
  </v-app-bar>
</template>

<style scoped>

</style>
