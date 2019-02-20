import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import foods from './data/foods.json';
import Form from './components/Form';
import Search from './components/Search'


class App extends Component {
  state = {
    foods: foods,
    foundFoods: foods,
    isVisible: false,
  }

  handleSearch = (word) => {
    const {foods} = this.state;
    this.setState({
      foundFoods: foods.filter(food => food.name.toLowerCase().includes(word.toLowerCase())),
    })
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
        <div><Search search={this.handleSearch}/></div>
        <div>
        <button onClick={this.handleToggle}>Add a Dish</button>
        {this.state.isVisible ? <Form addToList={this.handleClick} /> : null }
        </div>
        <div>
          {this.state.foundFoods.map((food, i) => 
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
