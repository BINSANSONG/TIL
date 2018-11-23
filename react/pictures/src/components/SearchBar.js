import React, { Component } from 'react'

class SearchBar extends Component {
  state = { keyword: '' }

  removeBadWords(word){
    return word.replace('fuck','****');
  }

  removeBadWords2=(input)=>{
    this.setState({keyword:input.replace(/fuck/i,'NOPE')});
  }

  onFormSubmit =(event)=>{
    event.preventDefault();
    this.props.onUserSubmit(this.state.keyword);
  }

  render() {
    return (
      <div className="ui segment container">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label htmlFor="keyword">Search!</label>
          <input
           id="keyword" 
           type="text"
          //  onChange={e => this.setState({ keyword: e.target.value })}
           onChange={e=>this.removeBadWords2(e.target.value)}
          // onChange={e=>console.log(e.target.value)}
          //  value={this.removeBadWords(this.state.keyword)}
           value={this.state.keyword}
          />
        </form>
        {/* <input value={this.state.keyword}/> */}
        {/* <button onClick={this.removeBadWords2}>this</button> */}
      </div>
    )
  }
}
export default SearchBar;