import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Footer, FooterTab, Button, Icon } from 'native-base';

export default class Messages extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/794285789240623104/Cyio02cd_400x400.jpg' }} />
              </Left>
              <Body>
                <Text>Tanmai Gopal</Text>
                <Text note>Im hosting a party tonight at ITC Chola</Text>
              </Body>
              <Right>
                <Text note>3:14 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/875603699694948354/vR77CGM9_400x400.jpg' }} />
              </Left>
              <Body>
                <Text>Hasura</Text>
                <Text note>Keep it going</Text>
              </Body>
              <Right>
                <Text note>12:36 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
        <Footer style={{ backgroundColor: 'white' }}>
       <FooterTab style={{ backgroundColor: 'white' }}>
         <Button >
           <Text style={{ fontSize: 12, color: '#009DF7', fontWeight: 'bold' }}>Inbox</Text>
         </Button>
         <Button>
           <Text style={{ fontWeight: 'bold' }}>Requests</Text>
         </Button>
       </FooterTab>
     </Footer>
      </Container>
    );
  }
}
