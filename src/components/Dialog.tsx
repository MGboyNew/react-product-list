function FancyBorder(props:any){
    return (
        <div style={{backgroundColor:props.color,border:"1px solid",borderRadius:6 + "px"}}>
            {props.children}
        </div>
    );
}

export function Dialog(props:{title:string,message:string,children:any}){
    return (
        <FancyBorder color="blud">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            {props.children}
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}
export function WelcomDialog(){
   return (
      <Dialog title="Welcome" message="Thank you for vistiing our spacecraft" children={null}/>
   )
}
