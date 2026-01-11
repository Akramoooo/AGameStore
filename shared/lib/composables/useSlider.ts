export const useSlider = (
  itemsLength: ComputedRef<number>,
  stepDistance: number = 1,
  repeatable: boolean = true
) => {
  const currentIndex = ref(0);
  let timer: ReturnType<typeof setInterval> | null = null;

  // События на кнопки
  const handleNext = () => {
    nextSlide();

    if (timer) startAutoplay();
  };

  const handlePrev = () => {
    nextSlide();

    if (timer) startAutoplay();
  };

  // Переключатели
  const nextSlide = () => {
    if (currentIndex.value < itemsLength.value - 1) {
      currentIndex.value += stepDistance;
      return;
    }

    if (repeatable) currentIndex.value = 0;
  };

  const prevSlide = () => {
    if (currentIndex.value >= stepDistance) {
      currentIndex.value -= stepDistance;
      return;
    }

    if (repeatable) currentIndex.value = itemsLength.value - 1;
  };

  // Авто слайдинг
  const startAutoplay = () => {
    stopAutoplay();

    timer = setInterval(nextSlide, 8000);
  };

  const stopAutoplay = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  return {
    nextSlide,
    prevSlide,
    currentIndex,
    startAutoplay,
    stopAutoplay,
    handleNext,
    handlePrev,
  };
};
