import React from 'react'
import Accordion from './Accordion'
import { useState, useReducer } from 'react'
import { ReducerAccordion } from './ReducerAccordion';
import { initialParam } from './ReducerAccordion';
import { questionnare } from './questionnaire';



function Container() {
    
    // const [selected, setSelected] = useState(0);
    // const [isVisible, setVisibility] = useState(false);
    const [classname, setClassname] = useState('');
    const [state, dispatch] = useReducer(ReducerAccordion, initialParam);

    function handleClick(e){
     
      dispatch({
        type:"verified",
        id: e,
        active: (state.selected===e)? !state.isVisible : false
      })
    //  (selected===e)?setVisibility(!isVisible) : setVisibility(false)
    //  setSelected(e)
     console.log(e)

     if (state.isVisible===true){
        setClassname("visible")
     }
     else {
        setClassname("invisible")
     }
    }

    const contentAccordion = questionnare.map((item, index) => {
      return(
        <Accordion key={index+1} message={item} istoggle={state.isVisible} classname={classname} selected={state.selected} n={index+1} toggleVisibility={()=>handleClick(index+1)} />
      )
      
    })

  return (
    <div>
      {contentAccordion}
    </div>
  )
}

export default Container
