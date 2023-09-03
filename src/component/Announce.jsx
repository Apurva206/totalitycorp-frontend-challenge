import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

function Announce() {
  const [announceStyle, setAnnounceStyle] = useState(
    'bg-SlateGrey font-bold text-white flex items-center justify-center'
  );

  const handleClose = () => {
    setAnnounceStyle(announceStyle + ' Hidden');
  };

  return (
    <div className={announceStyle}>
      <h2 className="text-center md:text-left">Hurry up, it's 50% off now</h2>
      <AiFillCloseCircle className="cursor-pointer pl-[5px]" onClick={handleClose} />
    </div>
  );
}

export default Announce;

