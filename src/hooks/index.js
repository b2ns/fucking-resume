import { onMounted, onBeforeUnmount } from 'vue';

export const useEventListener = (event, handler, opts, target = window) => {
  onMounted(() => {
    target.addEventListener(event, handler, opts);
  });
  onBeforeUnmount(() => {
    target.removeEventListener(event, handler, opts);
  });
};
