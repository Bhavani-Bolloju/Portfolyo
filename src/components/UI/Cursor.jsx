import React, { useEffect, useRef } from "react";
import classes from "./Cursor.module.scss";

const Cursor = function () {
  const cursorRef = useRef(null);

  //   useEffect(() => {
  //     const updateCursorPosition = (event) => {
  //       cursorRef.current.style.top = `${event.clientY}px`;
  //       cursorRef.current.style.left = `${event.clientX}px`;
  //     };

  //     document.addEventListener("mousemove", updateCursorPosition);

  //     return () => {
  //       document.removeEventListener("mousemove", updateCursorPosition);
  //     };
  //   }, []);

  return (
    <>
      <div class="mouse-cursor cursor-outer"></div>
      <div class="mouse-cursor cursor-inner"></div>
    </>
  );
};

export default Cursor;
