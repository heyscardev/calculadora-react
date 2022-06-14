import { Component } from "react";

class botonCacluladora extends Component{

    render(){
        const {character, className} = this.props
        return (
            <div className={`p-2 ${className}`}>
            <div className={"ratio ratio-1x1"}>
                <button onClick={()=>{this.props.onClick(character)}} className="btn btn-outline-primary shadow-sm">{character}</button>
            </div>
            </div>
            
        )
    }
}
export default botonCacluladora;