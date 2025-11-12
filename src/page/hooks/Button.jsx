import React from "react";

function Button({ onClick }) {
  console.log("Button render bo‘ldi");
  return (
    <button onClick={onClick} className="mt-1 p-2 bg-[#2563eb] text-white rounded-md cursor-pointer ">
      Click
    </button>
  );
}

export default React.memo(Button);
