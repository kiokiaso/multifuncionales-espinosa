
const BotonMultiuso=(props)=>{
    console.log(props)
    const style={
        backgroundColor:props.color,
        color:'white',
        border:'none',
        padding:props.padding,
        borderRadius:props.borderRadius
    }
    return(
        <button style={style} onClick={props.onclickHandler}>Click!</button>
    )
}

export default BotonMultiuso