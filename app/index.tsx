import { TouchableOpacity, View } from 'react-native';
import TimerButton from '@/components/TimerButton';
import FinishModal from '@/components/FinishModal';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import SettingsModal from '@/components/SettingsModal';

export default function Index() {
  const [finishModalVisible, setFinishModalVisible] = useState<boolean>(false);
  const [settingsModalVisible, setSettingsModalVisible] =
    useState<boolean>(false);
  const [initialMinutes, setInitialMinutes] = useState<number>(30);
  const [initialSeconds, setInitialSeconds] = useState<number>(0);
  const [resetButtonClicked, setResetButtonClicked] = useState<boolean>(false);

  const settingsPressHandler = () => {
    setSettingsModalVisible(true);
  };

  return (
    <View
      style={{
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          position: 'absolute',
          zIndex: 10,
          top: 50,
          opacity: 0.7,
          width: '100%',
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setResetButtonClicked(true);
            }}
          >
            <Ionicons name={'refresh-outline'} size={30} color={'gray'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              settingsPressHandler();
            }}
          >
            <Ionicons name={'settings-outline'} size={30} color={'gray'} />
          </TouchableOpacity>
        </View>
      </View>
      <TimerButton
        setFinishModalVisible={setFinishModalVisible}
        initialMinutes={initialMinutes}
        initialSeconds={initialSeconds}
        resetButtonClicked={resetButtonClicked}
        setResetButtonClicked={setResetButtonClicked}
      />
      <FinishModal
        finishModalVisible={finishModalVisible}
        setFinishModalVisible={setFinishModalVisible}
      />
      <SettingsModal
        visible={settingsModalVisible}
        setVisible={setSettingsModalVisible}
        initialMinutes={initialMinutes}
        setInitialMinutes={setInitialMinutes}
        initialSeconds={initialSeconds}
        setInitialSeconds={setInitialSeconds}
      />
    </View>
  );
}
