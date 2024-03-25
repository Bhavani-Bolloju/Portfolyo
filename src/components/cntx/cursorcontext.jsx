/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const cursorContext = createContext({
  hoverClass: false,
  handleCursor: () => {}
});

const CursorContextProvider = function (props) {
  const [cursorClass, setCursorClass] = useState(false);

  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  // const { cursorClass } = useContext(cursorContext);

  useEffect(() => {
    const updateCursorPosition = function (e) {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  const classValue = cursorClass ? "custom-cursor active" : "custom-cursor";

  const handleCursor = function () {
    setCursorClass((prev) => !prev);
  };

  const value = {
    cursorClass,
    handleCursor
  };

  return (
    <cursorContext.Provider value={value}>
      {props.children}
      <div className={classValue} style={{ left: cursorX, top: cursorY }}>
        <div className="dot"></div>
      </div>
    </cursorContext.Provider>
  );
};

export default CursorContextProvider;
