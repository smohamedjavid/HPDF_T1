import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class Timeline extends Component {
  render() {
    return (
      <Container>
      <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require("../img/tanmai.jpg")} />
                <Body>
                  <Text>Tanmai Gopal</Text>
                  <Text note>@tanmaigo</Text>
                </Body>
              </Left>
              <Right>
               <Text note>3h</Text>
              </Right>
            </CardItem>
            <CardItem>
                  <Text>IMAD is Back!</Text>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: 'https://pbs.twimg.com/media/DPPHcTcU8AAnJTb.png:large' }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
              <Button transparent>
                <Icon name="ios-chatbubbles-outline" />
                <Text>8</Text>
              </Button>
              </Left>
              <Body>
              <Button transparent>
                <Icon name="ios-git-compare-outline" />
                <Text>17</Text>
              </Button>
              </Body>
               <Right>
              <Button transparent>
               <Icon name="ios-heart-outline" />
               <Text>12</Text>
              </Button>
              </Right>
              <Right>
              <Button transparent>
               <Icon name="ios-mail-outline" />
              </Button>
              </Right>
            </CardItem>
          </Card>

      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("../img/sandip.png")} />
            <Body>
              <Text>Sandip Devarkonda</Text>
              <Text note>@dsandip</Text>
            </Body>
          </Left>
          <Right>
           <Text note>17h</Text>
          </Right>
        </CardItem>
        <CardItem>
              <Text>Do you need an autosaving?</Text>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: 'https://pbs.twimg.com/media/DPE2hi7UIAAGcG7.png:large' }} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Left>
          <Button transparent>
            <Icon name="ios-chatbubbles-outline" />
            <Text>1</Text>
          </Button>
          </Left>
          <Body>
          <Button transparent>
            <Icon name="ios-git-compare-outline" />
            <Text>4</Text>
          </Button>
          </Body>
           <Right>
          <Button transparent>
           <Icon name="ios-heart-outline" />
           <Text>12</Text>
          </Button>
          </Right>
          <Right>
          <Button transparent>
           <Icon name="ios-mail-outline" />
          </Button>
          </Right>
        </CardItem>
      </Card>

      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("../img/hasuraed.jpg")} />
            <Body>
              <Text>Hasura Education</Text>
              <Text note>@HasuraEd</Text>
            </Body>
          </Left>
          <Right>
           <Text note>1d</Text>
          </Right>
        </CardItem>
        <CardItem>
            <Text>And the Hasura team lands in #Udaipur for the #RajasthanHackathon3 starting tomorrow at 8am! 1500 hackers building some crazy cool things! Can’t wait! #FridayFeeling #hackathon #digifest</Text>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: 'https://pbs.twimg.com/media/DP9rl7sVwAAMlq-.jpg:large' }} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Left>
          <Button transparent>
            <Icon name="ios-chatbubbles-outline" />
            <Text>5</Text>
          </Button>
          </Left>
          <Body>
          <Button transparent>
            <Icon name="ios-git-compare-outline" />
            <Text>24</Text>
          </Button>
          </Body>
          <Right>
          <Button transparent>
           <Icon name="ios-heart-outline" />
           <Text>31</Text>
          </Button>
          </Right>
          <Right>
          <Button transparent>
           <Icon name="ios-mail-outline" />
          </Button>
          </Right>
        </CardItem>
      </Card>
      </Content>
        </Container>
    );
  }
}
