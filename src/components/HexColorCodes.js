

function HexColorCodes(props) {
    return (
    props.painting === '' ? null 
    :
        
        <ul className="colors">
            { 
                props.listHexCodes.length === 0 ? 
                <p className="noHexCodes" >Unfortunately, there are currently no color codes available for this painting</p> 
                : 
                props.listHexCodes.map( function(hexCode) {
                return(
                                            
                    <li key={`${hexCode}`} style={{
                        backgroundColor: `${hexCode}`}
                    }
                    >   
                        <div className="hexColorCodes"> {hexCode} </div>  
                    </li>
                )
            })}
        </ul>
    )

}

 
export default HexColorCodes

