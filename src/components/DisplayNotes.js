function DisplayNotes(props) {
    console.log(props.listNotes)
        return(
            <ul className="notes">
                {props.listHexCodes.length === 0 ? 
                null
                : 
                 props.listNotes.map( function (triad) {
                    return (
                        <li key={Math.random()} >{triad}</li>
                    )
                })}
            
            </ul>
        )
    }
    
    export default DisplayNotes;