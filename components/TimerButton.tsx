import { View, Text, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';

export default function TimerButton() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const intervalIdRef = useRef(null);
  const startSecundomer = () => {
    // @ts-ignore
    intervalIdRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 59) {
          setMinutes((prev) => prev + 1);
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 1000);
  };
  const stopSecundomer = () => {
    // @ts-ignore
    clearInterval(intervalIdRef.current);
    // @ts-ignore
    intervalIdRef.current = null;
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
          intervalIdRef.current === null ? startSecundomer() : stopSecundomer();
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
