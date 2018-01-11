
import { Navigation } from 'react-native-navigation';

import ListScreen from './ConversationListScreen';

export default function registerScreens(store, Provider){
  if(!ListScreen){
    console.log('list screen undefined');
  }
  Navigation.registerComponent('app.ListScreen', () => ListScreen, store, Provider);

}