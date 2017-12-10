import React, { Component } from 'react';
import { Container, Card, CardItem, Text, Footer, FooterTab, Button, Body, Left, Content, Right, Icon } from 'native-base';

export default class Side extends Component {
  render() {
    return (
      <Container>
          <Content>
            <Card>
              <CardItem>
                  <Body>
                    <Text>No Notifications</Text>
                  </Body>
              </CardItem>
             </Card>
           </Content>
           <Footer style={{ backgroundColor: 'white' }}>
          <FooterTab style={{ backgroundColor: 'white' }}>
            <Button >
              <Text style={{ fontSize: 12, color: '#009DF7', fontWeight: 'bold' }}>All</Text>
            </Button>
            <Button>
              <Text style={{ fontWeight: 'bold' }}>Mentions</Text>
            </Button>
          </FooterTab>
          <Right>
              <Icon style={{ marginRight: 10, color: '#009DF7' }} name='settings' />
          </Right>
        </Footer>
      </Container>
    );
  }
}
