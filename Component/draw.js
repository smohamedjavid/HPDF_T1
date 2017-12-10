import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Card, CardItem, Text, Icon, Right, List, Footer, FooterTab, Button, Left, Thumbnail, Body } from 'native-base';

export default class Side extends Component {
  render() {
    return (
      <Container>
         <Card>

           <CardItem style={{ paddingTop: 28 }}>
              <Left>
                <Thumbnail source={require("../img/elon.jpg")} />
              </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Elon Musk</Text>
              <Text note>@elonmusk</Text>
            </Body>
            <Right>
              <Icon active name="ios-arrow-down-outline" />
            </Right>
          </CardItem>
          <CardItem style={{ borderBottomWidth: 4 }} >
            <Left>
              <Text>86</Text>
              <Text note>Followers</Text>
            </Left>
            <Left>
              <Text>47</Text>
              <Text note>Following</Text>
            </Left>
          </CardItem>
          <CardItem>
              <Icon name="ios-person-outline" />
              <Text>Profile</Text>
          </CardItem>
          <CardItem>
               <Icon name="ios-list-box-outline" />
               <Text>Lists</Text>
          </CardItem>
          <CardItem>
                <Icon name="ios-flash-outline" />
                <Text>Moments</Text>
          </CardItem>
          <CardItem style={{ elevation: 1, borderBottomWidth: 4 }}>
                 <Icon name="ios-browsers-outline" />
                 <Text>Highlights</Text>
          </CardItem>

          <CardItem style={{ elevation: 1, borderBottomWidth: 4 }}>
                  <Icon name="ios-open-outline" />
                  <Text>Twitter Ads</Text>
          </CardItem>
          <CardItem>
                   <Text>Settings and privacy</Text>
          </CardItem>
          <CardItem>
                   <Text>Help Centre</Text>
          </CardItem>
        </Card>
        <Footer style={{ backgroundColor: 'white' }} >
          <FooterTab style={{ backgroundColor: 'white' }} >
            <Left>
              <Button transparent>
                <Icon style={{ marginLeft: 20, color: '#009DF7' }} name="ios-moon" />
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon style={{ marginRight: 20, color: '#009DF7' }} name="ios-qr-scanner" />
              </Button>
            </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
// <CardItem cardBody>
    //<Image source={{ uri: 'https://nodeassets.nbcnews.com/images/non-rev/footer-logo-xfinity.svg' }} style={{ height: 16, width: null, flex: 1 }} />
 //</CardItem>
