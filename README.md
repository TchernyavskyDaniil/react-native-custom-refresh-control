# React Native Custom Refresh Control

This module include custom react native refresh control.

## Installation

```
$ npm install --save react-native-custom-refresh-control
```

## Usage

`import { CustomRefreshControl } from 'react-native-custom-refresh-control';`

All parameters are optional.

### Props from React Native: style, children. https://github.com/facebook/react-native/issues/11784

## Basic Usage

ScrollView

```javascript
<ScrollView
  refreshControl={
    <CustomRefreshControl callback={() => {}} callbackError={e => {}} />
  }
>
```

FlatList

```javascript
<FlatList
  refreshControl={
    <CustomRefreshControl callback={() => {}} callbackError={e => {}} />
  }
>
```

## Props

| Prop                     | Type      | Default | Description                                                                                           | Required |
| ------------------------ | --------- | ------- | ----------------------------------------------------------------------------------------------------- | -------- |
| **`callbackError`**    | `function`  | `() => {}`  | In case of error setClearedInterval function with catched error                                                           | No       |
| **`callback`**      | `function`  | `null`  | Your callback, for example, for data processing during a refresh                                                      | No       |
| **`callbackParams`**| `any`  | `undefined`    | Any set of parameters when calling prop callback | No       |
| **`delay`**    | `number`  | `null`  | Set duration of refresh, regardless of prop callback                                                         | No       |
| **`delayCallback`**      | `function`  | `() => {}`  | With the correct prop duration, you can specify a callback for setTimeout                                                      | No       |
| **`controlParams`**| `object`  | `{}`    |Other parameters for refresh control (style, colors, etc) | No       |

## Built With

* [React-Native](https://facebook.github.io/react-native/)
* [Prop-Types](https://github.com/facebook/prop-types)
* [React](https://github.com/facebook/react)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

