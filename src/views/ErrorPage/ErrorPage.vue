<template>
  <div class="not-found">
    <div class="not-found__wrapper">
      <span class="not-found__code">404</span>
      <router-link :to="{ name: 'home' }" class="not-found__link">
        to main
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./ErrorPage.ts"></script>
