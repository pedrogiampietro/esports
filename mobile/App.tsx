import { StatusBar, View } from 'react-native';
import { Background } from './src/components/Background';
// 2, 1:28:11
export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </Background>
  );
}
