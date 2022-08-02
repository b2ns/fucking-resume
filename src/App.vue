<script setup>
import { ref } from 'vue';
import Resume from './Resume.vue';

const themes = [
  '#e22b2b',
  '#e22bdf',
  '#8a2be2',
  '#0050a0',
  '#2b71e2',
  '#2bb7e2',
  '#2be24d',
  '#e28b2b',
  '#888',
  '#000',
];

const currentTheme = ref(themes[3]);

const changeTheme = (theme) => {
  currentTheme.value = theme;
  document.documentElement.style.setProperty('--primary-color', theme);
};
changeTheme(currentTheme.value);

const print = () => window.print();
</script>

<template>
  <div class="">
    <Resume />

    <div class="toolbox">
      <!-- print button -->
      <button class="toolbox__print-btn" @click="print">print to pdf</button>
      <!-- theme colors -->
      <div v-for="theme in themes" :key="theme" class="text-center">
        <span
          :class="{ selected: currentTheme === theme }"
          class="toolbox__theme-dot"
          :style="{ backgroundColor: theme }"
          @click="changeTheme(theme)"
        ></span>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.toolbox {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1;
  &__print-btn {
    padding: 10px 20px;
    background-color: var(--primary-color);
    color: var(--text-color-invert);
    border: 0;
    cursor: pointer;
  }
  &__theme-dot {
    display: inline-block;
    width: 35px;
    height: $width;
    margin-top: 20px;
    border-radius: 50%;
    cursor: pointer;
    transition: box-shadow var(--transition-time);
    &.selected {
      box-shadow: 0 0 15px 5px var(--primary-color);
    }
  }
  @media print {
    /* hide the button while printing */
    & {
      visibility: hidden;
    }
  }
}
</style>
