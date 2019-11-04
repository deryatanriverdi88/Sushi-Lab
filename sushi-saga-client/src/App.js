import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


class App extends Component {

     
  state = {
    sushis: [], 
    eaten: [], 
    num1: 0,
    num2: 4, 
    budget: 30
  }

  fetchSushis =()=>{
    fetch('http://localhost:3000/sushis')
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushis: data
      })
    })
  }

  componentDidMount(){
   this.fetchSushis()
  }

  handleClick =(e, sushiObject)=>{


    // console.log('Click', sushiObject.price, this.state.bugdet)
    if(this.state.budget > 0){
      this.setState({
        eaten: [...this.state.eaten, sushiObject],
        budget: this.state.budget - sushiObject.price
      })
    }
    else {
      null
    }
  }

  moreSushi = () => {
    // console.log('more sushi')
      this.setState({
        num1: this.state.num1 + 4,
        num2: this.state.num2 + 4
      })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis.slice(this.state.num1, this.state.num2)}
                        handleClick={this.handleClick}
                        eaten={this.state.eaten}
                        moreSushi={this.moreSushi}
                        
        />
        <Table budget={this.state.budget}
               eaten ={this.state.eaten} />
      </div>
    );
  }
}

export default App;
