import React, { useEffect, useRef } from "react"

export const CustomCursor = ({ cursorState }) => {
  console.log("cursorState: ", cursorState)
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  const cursorStyle = cursorState === "open" ? "" : "focused"

  useEffect(() => {
    const onMouse = (e) => {
      const { clientX, clientY } = e
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      ringRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }

    document.addEventListener("mousemove", onMouse)
    return () => {
      document.removeEventListener("mousemove", onMouse)
    }
  }, [cursorRef])

  return (
    <>
      <div className={"custom-cursor"} ref={cursorRef}>
        <div className={`dot ${cursorStyle}`} />
      </div>
      <div className={`ring ${cursorStyle}`} ref={ringRef} />
    </>
  )
}
