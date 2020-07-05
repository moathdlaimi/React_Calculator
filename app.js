class Screen extends React.Component {
    render = () => {
      return (
      <div className="row-one screen">
        <h1 id="result">{this.props.value.length > 99 ? ' Long Number ' : this.props.value}</h1>
      </div>
      )

    }
}

class Buttons extends React.Component {
      render = () => {
        return (
          <div className="row-two buttons">
            <button className="light-color" onClick={f => this.props.onClick(f.target.name)} type="button" name="AC">AC</button>
            <button className="light-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name="C">C</button>
            <button className="light-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name="neg">+/-</button>
            <button className="medium-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name="/">/</button>
            <button className="dark-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name="7">7</button>
            <button className="dark-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name="8">8</button>
            <button className="dark-color" onClick={f => this.props.onClick(f.target.name)} type="button" name="9">9</button>
            <button className="medium-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name="*">x</button>
            <button className="dark-color" onClick={f => this.props.onClick(f.target.name)} type="button" name="4">4</button>
            <button className="dark-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name="5">5</button>
            <button className="dark-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name="6">6</button>
            <button className="medium-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name="-">-</button>
            <button className="dark-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name="1">1</button>
            <button className="dark-color" onClick={f => this.props.onClick(f.target.name)} type="button" name="2">2</button>
            <button className="dark-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name="3">3</button>
            <button className="medium-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name="+">+</button>
            <button className="dark-color"  onClick={f => this.props.onClick(f.target.name)} id="zero" value="0" type="button" name="0">0</button>
            <button className="dark-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name=".">.</button>
            <button className="medium-color"  onClick={f => this.props.onClick(f.target.name)} type="button" name="=">=</button>

          </div>
        )

    }
}


class App extends React.Component {
    state = {
      value:""
    }

    click = (button) => {

        if(button === "AC"){
            this.reset()
        }
        else if (button === "C") {
            this.backspace()

        }
        else if (button === "=") {
            this.calc()
        }
        else if (button === "neg") {
          this.setState ({
            value:(this.state.value * -1)
          })
        }
        else {
          this.setState ({
            value:this.state.value + button
          })
          console.log((this.state.value));
        }

    }



    reset = () =>{
      this.setState ({
        value:""
      })
    }

    backspace = () => {
      this.setState({
        value: this.state.value.toString().slice(0,-1)
      })
    }

    calc = () => {
      this.setState({
          value:eval(this.state.value)

      })
    }

  render = () => {
    return(
          <div className="calculator">
            <Screen value={this.state.value}></Screen>
            <Buttons onClick={this.click}></Buttons>
          </div>

        )
    }

}

ReactDOM.render( <App></App> , document.querySelector('main'));
