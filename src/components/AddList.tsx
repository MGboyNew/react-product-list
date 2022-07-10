import Input from "./Input";
import Button from "./Button";

const AddList = (props:{handleGoodAddClick?:Function,handleGoodAddChange?:Function})=>{
    return(
        <div style={{display:"flex",alignItems:"center"}}>
            <Input handleSearchValueChange={props.handleGoodAddChange} placeholder={"add good"}/>
            <Button handleClick={props.handleGoodAddClick}>add good</Button>
        </div>
    );
}
export default AddList;
