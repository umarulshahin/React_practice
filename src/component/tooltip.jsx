

import React from 'react'


const Tooltip =((props,ref)=> {
  const{
    showTooltip,
  }=props
  return (

        <label ref={ref} className={showTooltip ? 'show-tooltip' : 'hide-tooltip'}>
            This is {props.isActive ? 'Active': 'Non Active'} tooltip
        </label>
    
  );
});

export default React.forwardRef(Tooltip);