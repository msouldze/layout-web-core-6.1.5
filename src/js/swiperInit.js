const createSwiper = (swiper) => {
  const sliderIdentifier = swiper.dataset.id
  return new Swiper(`.swiper-${sliderIdentifier}`, {
    pagination: {
      el: `.swiper-${sliderIdentifier} .swiper-pagination`,
      type: 'bullets',
      clickable: 'true'
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto'
      }
    }
  })
}
export const initialize = () => {
  const swipers = document.querySelectorAll('.swiper')
  swipers.forEach((swiper) => createSwiper(swiper))
}
