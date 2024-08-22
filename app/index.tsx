import { Text, View } from 'react-native';
import TimerButton from '@/components/TimerButton';
import FinishModal from '@/components/FinishModal';
import { useState } from 'react';

export default function Index() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <View
      style={{
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TimerButton setModalVisible={setModalVisible} />
      <FinishModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
