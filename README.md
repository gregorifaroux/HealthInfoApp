# HealthInfoApp

React Native App to display a mini knowledge base on health related information.

## To install

```
$ npm install
```

## To start

```
$ npm start
```

This will start a development server for you.

## Technologies

![UI Kitten Logo](https://akveo.github.io/react-native-ui-kitten/images/Group-142x.png)

- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo CLI](https://reactnative.dev/docs/getting-started)
- [UI Kitten](https://akveo.github.io/react-native-ui-kitten/)

## Code Details

- `App.js`: app provider with the light and dark themes

### Navigation

- `src/navigation/Navigation`: creates the drawer and top navigation bar. We use `RootNavigation` and a reference to toggle the drawer from the `TopNavigation` buttons.
- `src/navigation/RootNavigation`: See [Navigating without the navigation prop](https://reactnavigation.org/docs/navigating-without-navigation-prop/)
- `src/navigation/TopNavigation`: App title and menu/action icons.

### Screens

- `src/screems/HomeScreen.js`: Home screen example
- `src/screems/FAQScreen.js`: FAQ
