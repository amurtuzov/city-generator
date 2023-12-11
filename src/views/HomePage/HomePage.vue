<template>
  <div class="auth">
    <div
      class="auth__title hover:text-pink-200 transition-all transition-duration-200"
    >
      {{ 12 }}
    </div>
    <div class="auth__title">{{ version }}</div>
    <div
      class="border-1 surface-border flex gap-2 border-round flex w-full gap-2 p-4 fl align-items-center"
    >
      <Dropdown
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
        class="flex align-items-center h-5rem w-12rem"
      />
      <Dropdown
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
        class="flex align-items-center h-5rem w-12rem"
      />
      <InputText size="large" class="flex align-items-center h-5rem" />
      <TextAreaComponent autoResize class="flex align-items-center h-5rem" />
      <AppButton
        class="p-button-lg"
        label="Submit"
        icon="pi pi-check"
        @click="toggleTheme"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>
