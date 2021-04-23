import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const slowScrollUpFadeIn = (el, opDelay = 2, yDelay = 3) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.from(el, opDelay, {
    scrollTrigger: {
      trigger: el,
      start: "top bottom-=20%",
    },
    opacity: 0,
    stagger: {
      amount: 0.75,
    },
  })
  gsap.from(el, yDelay, {
    scrollTrigger: {
      trigger: el,
      start: "top bottom-=20%",
    },
    y: "10vh",
    stagger: {
      amount: 0.5,
    },
  })
}