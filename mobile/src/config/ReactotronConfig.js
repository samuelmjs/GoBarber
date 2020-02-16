import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronReduxSaga from 'reactotron-redux-saga';
import { AsyncStorage } from 'react-native';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.0.13' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronReduxSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
