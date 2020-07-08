//  IMPORTING LIBRARIES
import React from "react";
import './SearchBar.css';
import "semantic-ui-css/semantic.min.css";
import { Icon, Input } from 'semantic-ui-react';

//  DEFINING COMPONENT
class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    //For props searchbar in app
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
          <div className="search-bar fluid ui segment">
          <div className="ui huge icon input"> 
            <Input
            icon={<Icon name='search' inverted circular link />}
              value={this.state.term}
              placeholder={"search"}
              onChange={e => this.setState({ term: e.target.value })}
              type="text"
            />
            <i aria-hidden="true" className="search circular inverted link icon"></i>
               </div>
            </div>
          </div>
        </form>
      
    );
  }
}

//  EXPORTING COMPONENT
export default SearchBar;
