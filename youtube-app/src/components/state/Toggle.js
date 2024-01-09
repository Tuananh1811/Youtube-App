import React, { useState } from "react";
function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <div
      onClick={() => {
        setOn(true);
      }}
    >
      Toggle {on ? "On" : "Off"}
    </div>
  );
}
export default Toggle;