import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
  }

  handleInput = (e) => {
    const { search } = this.props;
    const word = e.target.value;

    search(word)
    this.setState({
      search: word,
    })
  }

  render () {
    return(
    <div>
      <input type="text" value={this.state.search} onChange={this.handleInput} />
    </div>
    );
  }
}

  export default Search;