import { bottom } from '@popperjs/core'
import { tns } from 'tiny-slider/src/tiny-slider'

// Each slider needs a selector for its container (ID or class). Next, list the properties of a particular slider inside {}

export const slider = tns({
  container: '.portfolio-slider',
  controls: true,
  controlsContainer: document.querySelector('.portfolio-slider-controls'),
  nav: false,
  navPosition: bottom,
  navAsThumbnails: true,
  items: 1,
  responsive: {
    768: {
      items: 2,
      nav: true
    },
    992: {
      items: 3
    }
  },
  mouseDrag: true,
  swipeAngle: false,
  speed: 400
})
