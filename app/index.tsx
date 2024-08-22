import { Text, View } from 'react-native';
import TimerButton from '@/components/TimerButton';

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TimerButton />
    </View>
  );
}
