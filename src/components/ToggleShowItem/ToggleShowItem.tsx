import { useState } from "react";

export function ToggleShowItem() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && (
        <div role="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et odit
          accusantium natus repudiandae sint ullam fugiat velit vel officiis. Id
          magnam blanditiis veniam facere porro!
        </div>
      )}
    </>
  );
}
