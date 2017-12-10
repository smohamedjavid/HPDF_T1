import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Drawer, Left, Body, Thumbnail, Button, Title } from 'native-base';
import Home from './Component/home';
import Search from './Component/search';
import Not from './Component/notification';
import Messages from './Component/messages';
import Draw from './Component/draw';

const Styles = {
  headerStyle: {
    paddingTop: 24,
    backgroundColor: 'white'
  }
};

export default class twitter extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  async componentWillMount() {
  await Expo.Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  });

  this.setState({ fontsAreLoaded: true });
}

  render() {
    const { headerStyle } = Styles;
    return (
      <Drawer
        style={{ paddingRight: 35 }}
        ref={(ref) => { this.drawer = ref; }}
        content={<Draw navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
            <Container style={Styles.headerStyle} >
              <Header hasTabs>
              <Left>
                <Button onPress={() => this.openDrawer()} transparent>
                  <Thumbnail source={require("./img/elon.jpg")} style={{ height: 40, width: 40 }} />
                </Button>
              </Left>
              <Body>
                <Title >Home</Title>
              </Body>
              </Header>
                <Tabs>
                  <Tab heading={<TabHeading><Icon name="ios-home-outline" /></TabHeading>} >
                    <Home />
                  </Tab>
                  <Tab heading={<TabHeading><Icon name="ios-search-outline" /></TabHeading>} >
                    <Search />
                  </Tab>
                  <Tab heading={<TabHeading><Icon name="ios-notifications-outline" /></TabHeading>} >
                    <Not />
                  </Tab>
                  <Tab heading={<TabHeading><Icon name="ios-mail-outline" /></TabHeading>} >
                    <Messages />
                  </Tab>
                </Tabs>
            </Container>
      </Drawer>
    );
  }
}
