import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, SearchForm, Submit, Span, Input } from './Searchbar.styled';

export default class Searchbar extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

  }



  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <Submit>
            <Span>Search</Span>
          </Submit>
        </SearchForm>

        <Input
        class="input"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
        >

        </Input>
      </Header>
    );
  }
}

