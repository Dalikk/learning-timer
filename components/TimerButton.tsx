import { View, Text, TouchableOpacity, Vibration } from 'react-native';
import React, { useRef, useState } from 'react';
import { schedulePushNotification } from '@/app/_layout';

interface TimerButtonProps {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimerButton: React.FC<TimerButtonProps> = ({ setModalVisible }) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(2);
  const [isRunning, setRunning] = useState<boolean>(false);
  const intervalIdRef = useRef<any>(null);
  const startTimer = () => {
    setMinutes(2);
    setSeconds(0);
    console.log('Timer started');
    setRunning(true);
    intervalIdRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          setMinutes((prev) => {
            if (prev === 0) {
              stopTimer();
              return 0;
            } else return prev - 1;
          });
          return 59;
        } else {
          return prev - 1;
        }
      });
    }, 100);
  };

  const stopTimer = async () => {
    console.log('Timer stopped');
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setRunning(false);
    setModalVisible(true);
    await schedulePushNotification();
    vibrate();
  };

  const vibrate = () => {
    const PATTERN = [1000, 1500, 1000, 1500, 1000, 1500];
    Vibration.vibrate(PATTERN);
  };

  return (
    <View
      style={{
        backgroundColor: 'gray',
        width: 200,
        height: 200,
        borderRadius: 100,
      }}
    >
      <TouchableOpacity
        style={{ flex: 1, justifyContent: 'center' }}
        onPress={() => {
          !isRunning ? startTimer() : stopTimer();
        }}
        disabled={isRunning}
      >
        {isRunning ? (
          <Text style={{ textAlign: 'center', fontSize: 36 }}>
            {minutes}:{seconds < 10 && 0}
            {seconds}
          </Text>
        ) : (
          <Text style={{ textAlign: 'center', fontSize: 36 }}>Start</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TimerButton;
