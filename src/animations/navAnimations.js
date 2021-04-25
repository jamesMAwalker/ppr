import gsap from "gsap"

export const navMenuOpen = (menu, shade, mTime = .3, sTime = .3) => {
  gsap.to(menu, mTime, {
    ease: "expo.in",
    x: "-35vh",
  })
  gsap.to(shade, sTime, {
    ease: "expo.in",
    delay: mTime * 2,
    scaleX: 0,
  })
}
export const navMenuClose = (menu, shade, mTime = .4, sTime = .5) => {
  gsap.to(shade, sTime, {
    ease: "expo.in",
    scaleX: 1,
  })
  gsap.to(menu, mTime, {
    ease: "expo.in",
    delay: mTime,
    x: "0",
  })
}