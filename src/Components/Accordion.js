import React, { useEffect } from 'react'
import { useState } from 'react';

function Accordion({message, istoggle, classname, toggleVisibility, selected, n}) {
  const [containerHeight, setContainerHeight] = useState(50);
  const ArrowUp = () => <span>&#9650;</span>; // Unicode character for arrow up
  const ArrowDown = () => <span>&#9660;</span>;

  useEffect(() => {
    const contentHeight = document.querySelectorAll('.content')[n-1].scrollHeight + 50;
    setContainerHeight(((selected===n) && istoggle===false) ? contentHeight : 50);
  }, [containerHeight, istoggle, n, selected])

  return (
    <div className={`container ${((selected===n) && istoggle===false)?'flexy':'container'}`} style={{ height: `${containerHeight}px` }}>
        <button onClick={toggleVisibility}><h4>{message.question}</h4>{((selected===n) && istoggle===false)? <ArrowUp /> : <ArrowDown />}</button>
        <ol className={`content ${((selected===n))? ((istoggle===false)?'visible':'invisible') : 'invisible' }`}>
           {message.answer.map(item => {return <li key={n} className='more_content'>{item.content}</li>})}
        </ol>
    </div>
  )
}

export default Accordion