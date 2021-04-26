import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const heroZoomOut = (el, dur = 3) => {
  gsap.from(el, dur, {
    ease: "power2.out",
    scale: 1.2,
  })
}