import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const heroZoomOut = (el, dur = 3) => {
  gsap.from(el, dur, {
    ease: "power2.out",
    scale: 1.2,
  })
}

export const lowSlideUpFadeIn = (el, opDur = 5, yDur = 5) => {
  gsap.from(el, opDur, {
    delay: 2,
    ease: "expo.out",
    opacity: 0,
  })
  gsap.from(el, yDur, {
    ease: "power2.inOut",
    y: "5vh",
  })
}