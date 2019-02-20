import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    calories: '',
    imgUrl: '',
    quantity: 0,
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }


  handleClick = () => {
    const { calories, name, imgUrl } = this.state;
    const { addToList } = this.props;
    let newFood = {
      name,
      calories,
      imgUrl,
    }
    addToList(newFood)
    this.setState({
      name: '',
      calories: '',
      imgUrl: '',
    })
  }
  render () {
    const {name, calories, imgUrl} = this.state;
    return(
    <div>
      <label>Name of the dish</label>
      <input type="text" value={name} name='name' onChange={this.handleInput} />
      <label>Calories</label>
      <input type="text" value={calories} name='calories' onChange={this.handleInput} />
      <label>Image Url</label>
      <input type="text" value={imgUrl} name='imgUrl' onChange={this.handleInput} />
      <button onClick={this.handleClick}>Add</button>
    </div>
    );
  }
}

  export default Form;