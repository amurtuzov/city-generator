<template>
  <div class="flex-grow-1" style="height: 85%">
    <ScrollPanel
      style="width: 100%; height: 100%"
      :pt="{
        wrapper: {
          style: {
            'border-right': favorites.length
              ? '10px solid var(--primary-50)'
              : '',
          },
          class: 'p-0',
        },
        content: 'p-0 pr-1 h-full w-full',
        bary: {
          class: 'hover:bg-primary-400 bg-primary-300 opacity-100',
        },
      }"
    >
      <div class="w-full h-full flex flex-column gap-2">
        <template v-if="favorites.length">
          <ListItem
            v-for="item in favorites"
            :key="item"
            :item="item"
            favorites
          />
        </template>
        <div v-else class="m-auto font-bold text-gray-900 border-round-top-sm">
          No saved ideas
        </div>
      </div>
    </ScrollPanel>
  </div>
  <div class="flex justify-content-between flex-shrink-0">
    <AppButton
      class="p-button-lg w-full h-3rem text-base w-5"
      label="Download"
      :disabled="!favorites.length"
      @click="downloadFavorites"
    />
    <AppButton
      class="p-button-lg w-full h-3rem bg-white text-gray-900 text-base w-5"
      label="Delete all"
      :disabled="!favorites.length"
      @click="confirmRemoveAllFavorites"
    />
  </div>
</template>
<script lang="ts" src="./FavoritesItems.ts"></script>
