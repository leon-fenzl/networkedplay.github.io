import React from "react"
import {items} from "./burgerItems.js"
function BurgerMenu(isOpen,onChange){
  return(
    <div className={'burgerMenu ${isOpen && "open"}'}>
      <div  className="burgerItens" onClick={()=> onChange(false)}>
        {items.map((item,index)=><a href={item.itemLink} key={index} >
              {item.itemText}
            </a>)}
      </div>
    </div>
  )
}
export default BurgerMenu;