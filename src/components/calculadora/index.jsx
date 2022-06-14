import React, { Component } from "react";
import Boton from "./boton";

class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
    };
  }
   async insertCharacter(character) {
    const { display } = this.state;
    const dLast = display.substring( display.length -1);
    if (
      (dLast === "+" || dLast === "/" || dLast === "*" || dLast === "-") &&
      (character === "+" ||
        character === "/" ||
        character === "*" ||
        character === "-")
    ) {
      await this.setState({
        display: display.substring(0, display.length - 1) + character,
      });}
      else
      await this.setState((prevState) => ({
        display: prevState.display + character,
      }));

    }
  async resolver() {
    const { display } = this.state;
    const dLast = display.substring( display.length -1);
    if 
      (dLast !== "+" && dLast !== "/" && dLast !== "*" && dLast !== "-") 
    {
        let displayeval = "" + eval(this.state.display);
        displayeval = (displayeval === "Infinity") ? "0": displayeval

        await this.setState({ display : displayeval});
      }
    }
     
  borrar() {
    if (this.state.display.length > 0)
      this.setState((prevState) => ({
        display: prevState.display.substring(0, prevState.display.length - 1),
      }));
  }
  click =  (character) => {
    if (character === "DEL") {
       this.borrar();
    } else if (character === "=") {
       this.resolver();
    }else{
         this.insertCharacter(character)
    }   
    }
  render() {
    const { display } = this.state;
    return (
      <div
        style={{
          width: "400px",
          height: "600px",
        }}
      >
        <div className=" card-deck bg-white">
            
          <div className="card-header bg-primary"
          style={{transform:"skewX(5deg) translateX(-4px)"}}>
          <h4 className=" m-1 text-start text-warning border-bottom border-white"
          style={{transform:"skewX(5deg) "}}
           >Calculadora</h4>
            <input
              className="form-control bg-white border-primary text-primary opacity-75 text-end"
              placeholder="empecemos a calcular"
              readOnly
              type="text"
              name="input"
              id=""
              value={display}
              
            />
          </div>
          <div className="card-body border border-primary ">
          <div className="row justify-content-left">
            <Boton character={1} className="col-3" onClick={this.click} />
            <Boton character={2} className="col-3" onClick={this.click} />
            <Boton character={3} className="col-3" onClick={this.click} />
            <Boton character={"+"} className="col-3" onClick={this.click} />
          </div>
          <div className="row justify-content-around">
            <Boton character={4} className="col-3" onClick={this.click} />
            <Boton character={5} className="col-3" onClick={this.click} />
            <Boton character={6} className="col-3" onClick={this.click} />
            <Boton character={"-"} className="col-3" onClick={this.click} />
          </div>
          <div className="row justify-content-around">
            <Boton character={7} className="col-3" onClick={this.click} />
            <Boton character={8} className="col-3" onClick={this.click} />
            <Boton character={9} className="col-3" onClick={this.click} />
            <Boton character={"/"} className="col-3" onClick={this.click} />
          </div>
          <div className="row justify-content-around">
            <Boton character={0} className="col-3" onClick={this.click} />
            <Boton character={"*"} className="col-3" onClick={this.click} />
            <Boton character={"DEL"} className="col-3" onClick={this.click} />
            <Boton character={"="} className="col-3" onClick={this.click} />
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculadora;
