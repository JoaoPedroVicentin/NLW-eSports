import { StatusBar } from 'react-native'
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter'

import { Background } from './src/components/Background';
import { Routes } from './src/Routes';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoade] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoade ?  <Routes /> : <Loading />}
    </Background>
  );
}
