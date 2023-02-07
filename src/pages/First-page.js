import { useState } from 'react'
import Glyphicon from '@strongdm/glyphicon';

export const First = () => {
  const [isShown, setIsShown] = useState();
  const toggleState = () => setIsShown(!isShown);

  return (
    <div className='main-page'>
      {!isShown ?
        <button onClick={toggleState} className='btn'>Click <Glyphicon glyph='star' /></button>
        : <h1>Hello World!</h1>
      }
    </div>
  )
}