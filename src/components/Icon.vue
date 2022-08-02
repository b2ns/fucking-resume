<script setup>
import { watch, ref } from 'vue';

const props = defineProps(['icon']);
const icon = ref(props.icon);
const type = ref('fas');
watch(
  () => props.icon,
  (newVal) => {
    /*
     * fontawesome(6) icon type
     * solid: .fas, .fa-solid
     * regular: .far, .fa-regular
     * brands: .fab, .fa-brands
     */
    // regular or brands
    if (/^(r|b)-/.test(newVal)) {
      type.value = 'fa' + newVal[0];
      icon.value = newVal.slice(2);
    } else {
      // default solid
      type.value = 'fas';
      icon.value = newVal;
    }
  },
  { immediate: true }
);
</script>

<template>
  <i v-if="icon" class="faicon" :class="[type, `fa-${icon}`]" />
</template>
