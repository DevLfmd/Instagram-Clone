/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { App } from './src/App';
import { LogBox } from 'react-native';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
