import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Image: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Chat: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Status: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
          Calls: {
            screens: {
              TabFourScreen: 'four',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
