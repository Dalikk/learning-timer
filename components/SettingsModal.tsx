import { View, Text, Modal, Button, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

interface SettingsModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  initialMinutes: number;
  setInitialMinutes: React.Dispatch<React.SetStateAction<number>>;
  initialSeconds: number;
  setInitialSeconds: React.Dispatch<React.SetStateAction<number>>;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  visible,
  setVisible,
  initialMinutes,
  setInitialMinutes,
  initialSeconds,
  setInitialSeconds,
}) => {
  const [minutesInput, setMinutesInput] = useState<string>(
    initialMinutes.toString(),
  );
  const [secondsInput, setSecondsInput] = useState<string>(
    initialSeconds.toString(),
  );
  console.log(minutesInput);

  const btnOkHandler = () => {
    setVisible(false);
    setInitialMinutes(Number(minutesInput));
    setInitialSeconds(Number(secondsInput));
  };
  return (
    <Modal transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: '#fff',
            width: 300,
            borderRadius: 5,
            padding: 20,
          }}
        >
          <View
            style={{
              marginBottom: 20,
              paddingBottom: 2,
              borderBottomWidth: 1,
              borderBottomColor: '#787878',
            }}
          >
            <Text style={{ fontSize: 36, fontWeight: 'bold' }}>Settings</Text>
          </View>
          <View style={styles.settingsItems}>
            <View style={styles.inputRow}>
              <Text>Minutes: </Text>
              <TextInput
                inputMode={'numeric'}
                placeholder={''}
                style={styles.textInput}
                defaultValue={initialMinutes.toString()}
                value={minutesInput}
                onChangeText={(text) => {
                  const filteredText = text.replace(/[^0-9]/g, '');
                  setMinutesInput(filteredText);
                }}
              />
            </View>
            <View style={styles.inputRow}>
              <Text>Seconds: </Text>
              <TextInput
                inputMode={'numeric'}
                placeholder={''}
                style={styles.textInput}
                defaultValue={initialSeconds.toString()}
                value={secondsInput}
                onChangeText={(text) => {
                  const filteredText = text.replace(/[^0-9]/g, '');
                  setSecondsInput(filteredText);
                }}
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <View style={{ width: 100, marginTop: 30 }}>
              <Button
                title={'ok'}
                onPress={() => {
                  btnOkHandler();
                }}
              ></Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 135,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  settingsItems: {
    gap: 10,
  },
});

export default SettingsModal;
