import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import foods from './data/foods.json';

class App extends Component {
  state = {
    foods: foods,
  }
  render() {
    return (
      <div className="App">
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
