import React from "react";
const ManyRendering = ({ onClick }) => {
  return (
    <>
      {Array.from({ length: 100 }, (_, i) => {
        if (i === 99) {
          console.log("rendering last item: ", i);
        }
        return (
          <div key={i} onClick={onClick}>
            Hello, React!
          </div>
        );
      })}
    </>
  );
};
export default React.memo(ManyRendering);
