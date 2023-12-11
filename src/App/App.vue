<template>
  <MainLayout>
    <router-view :key="componentKey" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </MainLayout>
</template>
<script lang="ts" src="./App.ts"></script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
  background: white;
  * {
    box-sizing: border-box;
  }
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  .main {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    main {
      flex: 1;
    }
  }
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.2s;
}

.fade-leave-to,
.fade-enter-active {
  opacity: 0;
}
</style>
