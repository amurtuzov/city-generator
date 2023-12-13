<template>
  <div class="flex justify-content-start">
    <AppButton
      @click="toggle"
      rounded
      text
      class="bg-yellow-100 focus:shadow-none flex align-items-center gap-2 p-1 pr-3 pl-3"
    >
      <i class="pi pi-star-fill text-yellow-500 text-xl" />
      <span class="text-base text-gray-900">Saved ideas</span>
      <AppBadge
        :value="favorites.length"
        class="bg-white text-yellow-500 text-base w-2rem h-2rem flex justify-content-center align-items-center m-0"
      />
      <i
        class="pi pi-angle-down text-gray-900 text-xl transition-transform transition-duration-100 transition-ease-in-out"
        :class="{ 'rotate-180': isSavedIdeasOpen }"
      />
    </AppButton>
    <OverlayPanel
      ref="overlayPanelRef"
      :style="{ width: '400px', height: '400px' }"
      :pt="{
        content: 'p-2 h-full flex flex-column gap-2 max-h-full',
      }"
    >
      <FavoritesItems />
    </OverlayPanel>
  </div>
  <AppDialog
    v-model:visible="dialogVisibility"
    :style="{ width: '100vw', margin: 0, height: '80vh' }"
    class="bg-white"
    header="Saved ideas"
    position="bottom"
    :modal="true"
    :draggable="false"
    dismissableMask
    :pt="{
      header: 'p-3',
      content:
        'flex flex-column justify-content-between flex-grow-1 pr-3 pl-3 pb-3 gap-4',
    }"
  >
    <FavoritesItems />
  </AppDialog>
</template>
<script lang="ts" src="./FavoritesToggler.ts"></script>
