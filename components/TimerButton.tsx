import { View, Text, TouchableOpacity, Vibration } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { schedulePushNotification } from '@/app/_layout';

interface TimerButtonProps {
  setFinishModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  initialMinutes: number;
  initialSeconds: number;
  resetButtonClicked: boolean;
  setResetButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimerButton: React.FC<TimerButtonProps> = ({
  setFinishModalVisible,
  initialMinutes,
  initialSeconds,
  resetButtonClicked,
  setResetButtonClicked,
}) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  const [minutes, setMinutes] = useState<number>(initialMinutes);
  const [isRunning, setRunning] = useState<boolean>(false);
  const intervalIdRef = useRef<any>(null);
  useEffect(() => {
    if (resetButtonClicked) {
      console.log('Refresh action');
      stopTimer();
    }
    setResetButtonClicked(false);
  }, [resetButtonClicked]);
  const startTimer = () => {
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
    console.log('Timer started');
    setRunning(true);
    intervalIdRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          setMinutes((prev) => {
            if (prev === 0) {
              onTimeOut();
              return 0;
            } else return prev - 1;
          });
          return 59;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
  };

  const stopTimer = async () => {
    console.log('Timer stopped');
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setRunning(false);
  };

  const onTimeOut = async () => {
    stopTimer();
    setFinishModalVisible(true);
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
