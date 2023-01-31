import { useState } from 'react'
import Glyphicon from '@strongdm/glyphicon'

export const First = () => {
  const [isShown, setIsShown] = useState();
  const toggleState = () => setIsShown(!isShown);

  console.log(isShown);

  return (
    <>
      {!isShown ?
        <button onClick={toggleState}>Click <Glyphicon glyph='star' /></button> : <h1>Hello World!</h1>
      }
    </>
  )
}