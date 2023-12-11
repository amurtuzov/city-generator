<template>
  <div class="home pt-8 pb-8 w-full p-5 grid grid-nogutter">
    <h1
      class="text-center text-gray-900 font-bold mt-0 mb-5 md:mb-6 xl:mb-7 text-6xl md:text-7xl col-12"
    >
      Blog Post Titles
    </h1>
    <div
      class="text-center text-gray-900 text-xl md:text-2xl col-10 col-offset-1 mb-6 md:mb-8 xl:mb-10"
    >
      This tool creates powerful and catchy titles for articles and blogs. Enter
      the word in the field below and click the Generate button.
    </div>
    <div
      class="home__form w-full grid grid-nogutter col-12 justify-content-center mb-8"
    >
      <div class="home__form-wrapper w-full flex flex-column gap-5">
        <div class="flex flex-column lg:flex-row gap-5">
          <Dropdown
            v-model="params.size"
            :options="sizes"
            placeholder="Size or Significance"
            class="flex-grow-1 h-4rem align-items-center"
          />
          <Dropdown
            v-model="params.terrain"
            :options="terrains"
            placeholder="Terrain Type"
            class="flex-grow-1 h-4rem align-items-center"
            @change="
              () => {
                console.log(params)
              }
            "
          />
        </div>
        <div class="flex gap-5 flex-column w-full">
          <InputText
            v-model="params.keywords"
            size="large"
            class="flex align-items-center h-4rem"
            placeholder="Inspiration Keywords"
          />
          <TextAreaComponent
            v-model="params.description"
            autoResize
            class="flex align-items-center"
            rows="5"
            placeholder="Short Description"
          />
        </div>
        <AppButton
          class="p-button-lg w-full flex align-items-center justify-content-center h-4rem"
          :disabled="isLoading"
          @click="generate"
        >
          <i v-if="isLoading" class="pi pi-spin pi-spinner" />
          <span v-if="!isLoading" class="px-3 font-bold">Generate</span>
        </AppButton>
      </div>
    </div>
    <div
      class="home__how text-gray-900 grid grid-nogutter m-auto text-lg line-height-3 pt-8 border-top-1 border-primary"
    >
      <div class="text-primary font-bold text-4xl mb-5 col-12">
        How it works
      </div>
      <div class="col-12 lg:col-6">
        <p class="lg:p-2 mb-5">
          When writing a blog, the title or headline is the most important
          aspect. This is what’s going to entice readers to read or share your
          post. If the title isn’t good, your article isn’t going anywhere. If
          you need help crafting a great blog title, our title generator service
          is what you need!
        </p>
        <p class="lg:p-2 mb-5">
          This tool will not only help you title an existing blog post but can
          also help you generate ideas for future posts. This could be an
          invaluable tool for people who make their living writing on the
          internet.
        </p>
        <p class="lg:p-2 mb-5">
          If you are worried about cost, don’t be: our tool is completely free
          to use as much as you like. The title ideas it produces don’t cost
          anything and are free from any royalty restrictions. Plus, you don’t
          need to give us your email or any other information.
        </p>
        <p class="font-bold lg:p-2 mb-5">
          Blog title generator: How does it work?
        </p>
        <p class="lg:p-2 mb-5">
          This page has a text box. In this box, you’ll want to put the main
          keyword for your blog post. Similarly, if you haven’t written a post
          yet, using a keyword related to the topic you want to write about
          would be a great idea.
        </p>
      </div>
      <div class="col-12 lg:col-6">
        <p class="lg:p-2 mb-5">
          Keep in mind, however, that you must use only Latin characters and
          cannot use spaces. Once you’ve entered a good keyword, hit the
          GENERATE button. Our server will then generate thousands of blog title
          ideas for you related to that keyword. You’ll see a relatively small
          list at first, but if you scroll down and hit the GENERATE MORE
          button, you’ll get additional ideas.
        </p>
        <p class="lg:p-2 mb-5">
          Next to each title idea will be two buttons: a COPY button and a STAR
          button. The COPY button will copy that title idea so you can paste it
          somewhere. Meanwhile, the STAR button will save that title to a list.
          You can access the list by hitting the SAVED IDEAS button.
        </p>
        <p class="lg:p-2 mb-5">
          You don’t need to worry about losing your saved ideas if you hit the
          GENERATE MORE button again or even do another keyword search. Feel
          free to jump around!
        </p>
        <p class="lg:p-2 mb-5">
          When you have compiled a good list, hit the SAVED IDEAS button and
          then the DOWNLOAD button. You’ll receive a text file with all your
          saved ideas. Hit the DELETE ALL button to clear your list and start
          the process again.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./HomePage.ts"></script>
<style lang="scss" scoped>
.home {
  background: rgba(255, 255, 255, 0.1);
  &__form {
    &-wrapper {
      max-width: 450px;
      @include screen($lg) {
        max-width: 700px;
      }
    }
  }
  &__how {
    max-width: 1000px;
  }
}
</style>
