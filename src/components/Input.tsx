import React,{ChangeEventHandler} from 'react'

const Input = (props:{handleSearchValueChange?:Function,placeholder:string}) :React.ReactElement => {
   return (
        <div className="input-wrapper" style={{padding:"4px 8px"}}>
            <input
                style={{height:"28px",outline:"null",border:"1px solid",padding:"4px 8px",borderRadius:"4px",fontWeight:"800"}}
                onChange={props.handleSearchValueChange as ChangeEventHandler}  
                type="text"
                placeholder={props.placeholder} />
        </div>
   )
};

export default Input;
