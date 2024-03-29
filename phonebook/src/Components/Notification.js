const Notification = ({message}) => {
    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    if(message === null) {
        return null
    }
    console.log(message.includes("Added"))
    if(message.includes('Added')) {
        
        return(
            <div style={successStyle}>
                {message}
            </div>
        )
    }
    else{
    return(
        <div style={errorStyle}>
            {message}
        </div>
    )
    }
}
export default Notification