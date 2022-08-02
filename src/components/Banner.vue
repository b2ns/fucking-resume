<script setup>
import { toRefs } from 'vue';
import Icon from './Icon.vue';

const props = defineProps(['title', 'icon']);
const { title, icon } = toRefs(props);
</script>

<template>
  <div>
    <div class="banner flex">
      <div class="banner__main flex flex-middle">
        <Icon class="banner__icon" :icon="icon" />
        <p class="banner__title">{{ title }}</p>
      </div>
      <div class="flex flex-vertical flex-item-1">
        <div class="flex-item-1" />
        <div class="banner__line" />
      </div>
    </div>
    <div class="banner__body">
      <slot />
    </div>
  </div>
</template>

<style lang="less">
.banner {
  overflow: hidden;
  &__main {
    position: relative;
    width: var(--banner-width);
    height: var(--banner-height);
    margin-left: -4mm;
    padding-left: 6mm;
    background-color: var(--primary-color);
    color: var(--text-color-invert);
    font-size: var(--fs-lg);
    transform: skewX(var(--banner-deg));
    transition: background-color var(--transition-time);
  }
  &__icon {
    margin-right: 3mm;
    font-size: 4mm;
    transform: skewX(calc(-1 * var(--banner-deg)));
  }
  &__title {
    transform: skewX(calc(-1 * var(--banner-deg)));
  }
  &__line {
    height: calc(var(--banner-height) / 2);
    margin-left: 3mm;
    margin-right: -4mm;
    background-color: var(--default-color);
    transform: skewX(var(--banner-deg));
  }
  &__body {
    padding: var(--banner-padding);
  }
}
</style>
