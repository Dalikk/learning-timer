import { View, Text, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';

export default function TimerButton() {
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

  const stopTimer = () => {
    console.log('Timer stopped');
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setRunning(false);
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
      >
        <Text style={{ textAlign: 'center', fontSize: 36 }}>
          {minutes}:{seconds < 10 && 0}
          {seconds}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
