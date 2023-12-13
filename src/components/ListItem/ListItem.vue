<template>
  <div
    class="p-2 bg-primary-100 border-round text-gray-900 flex flex-row justify-content-between align-items-center"
  >
    <span>{{ item }}</span>
    <div class="flex flex-row gap-3">
      <AppButton
        aria-label="Copy to clipboard"
        icon="pi pi-copy"
        title="Copy to clipboard"
        text
        raised
        class="bg-white transition-all border-1 border-transparent hover:border-cyan-800 p-1 min-w-max w-2rem h-2rem focus:shadow-none"
        iconClass="text-xl text-gray-900"
        :label="copyButtonLabel"
        @click="copyToClipBoard(item)"
      />
      <AppButton
        v-if="favorites"
        aria-label="Remove from favorites"
        icon="pi pi-times"
        title="Remove from favorites"
        text
        raised
        class="bg-white transition-all border-1 border-transparent hover:border-cyan-800 p-1 min-w-max w-2rem h-2rem focus:shadow-none"
        iconClass="text-xl text-gray-900"
        @click="removeFromFavorites(item)"
      />
      <AppButton
        v-else
        aria-label="Add to favorites"
        :icon="`pi ${
          checkIfIncludesInFavorites(item) ? 'pi-star-fill' : 'pi-star'
        }`"
        title="Add to favorites"
        text
        raised
        class="bg-white transition-all border-1 border-transparent hover:border-cyan-800 p-1 w-2rem h-2rem focus:shadow-none"
        @click="toggleFavorites(item)"
        :iconClass="`text-xl ${
          checkIfIncludesInFavorites(item) ? 'text-yellow-500' : 'text-gray-900'
        }`"
      />
    </div>
  </div>
</template>
<script lang="ts" src="./ListItem.ts"></script>
