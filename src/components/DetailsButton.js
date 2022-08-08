import React from 'react'
import { useState } from 'react';
import PopUp from './PopUp';
function DetailsButton() {
    const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
  };

  return (
    <div>
      <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
        Details
        </button>
      {/* 👇️ show component on click */}
      {isShown && <PopUp />}
    </div>
  );
}

export default DetailsButton