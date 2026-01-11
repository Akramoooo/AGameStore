import IconCloseEye from "~/icons/base/IconCloseEye.vue";
import IconOpenEye from "~/icons/base/IconOpenEye.vue";

export const usePasswordToggle = () => {
  const isPassOpen = ref(false);
  const passIcon = computed(() => {
    return isPassOpen.value ? IconOpenEye : IconCloseEye;
  });

  const inputType = computed(() => {
    return isPassOpen.value ? "text" : "password";
  });

  const togglePass = () => {
    isPassOpen.value = !isPassOpen.value;
  };

  return { isPassOpen, passIcon, inputType, togglePass };
};
