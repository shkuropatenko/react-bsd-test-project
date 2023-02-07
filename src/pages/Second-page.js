import { useState } from 'react';
import Glyphicon from '@strongdm/glyphicon';
import { Graphic } from '../components/graphic';

export const Second = () => {
  const [showLine, setShowLine] = useState(false);
  const toggleState = () => setShowLine(!showLine);

  return (
    <>
      <div>
        <Graphic showLine={showLine} />
      </div>
      <button onClick={toggleState} className='btn'>Draw <Glyphicon glyph='star' /></button>
    </>
  )
}