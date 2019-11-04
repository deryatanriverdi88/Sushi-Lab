import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log(props.sushi.img_url)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(e) => props.handleClick(e, props.sushi)}>
        { 
          props.eaten.includes(props.sushi) ?
            null
          :
            <img alt={props.sushi.img_url} src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi