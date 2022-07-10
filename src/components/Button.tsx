import {MouseEventHandler} from 'react'

const Button = (props:{children:string,handleClick?:Function})=>{
    return(
        <button style={{height:"36px",padding:"4px 8px"}} onClick={props.handleClick as MouseEventHandler}>{props.children}</button>
    )
};

export default Button
