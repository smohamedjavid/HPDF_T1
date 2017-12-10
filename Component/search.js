import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

export default class Search extends Component {
  render() {
    return (
      <Container>
      <Header searchBar rounded style={{ backgroundColor: 'white' }} >
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" style={{ backgroundColor: 'white' }} />
        </Item>
        <Button transparent>
        <Icon name="ios-person-add-outline" />
        </Button>
      </Header>
      </Container>
    );
  }
}
