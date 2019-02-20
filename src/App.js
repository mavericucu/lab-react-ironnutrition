import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import foods from './data/foods.json';
import Form from './components/Form';


class App extends Component {
  state = {
    foods: foods,
    isVisible: false,
  }

  handleClick = (newFood) => {
    const foodList = [...foods, newFood];

    this.setState({
      foods: foodList,
    })
  }


  handleToggle = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    })
  } 

  render() {
    return (
      <div className="App">
        <div>
        <button onClick={this.handleToggle}>Add a Dish</button>
        {this.state.isVisible ? <Form addToList={this.handleClick} /> : null }
        </div>
        <div>
          {this.state.foods.map((food, i) => 
          <FoodBox 
          key={i} 
          name={food.name} 
          cal={food.calories} 
          imgUrl={food.image}
          />
          )}
        </div>
      </div>
    );
  }
}

export default App;
