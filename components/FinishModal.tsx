import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Vibration,
} from 'react-native';
import React from 'react';

interface FinishModalProps {
  finishModalVisible: boolean;
  setFinishModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const FinishModal: React.FC<FinishModalProps> = ({
  finishModalVisible,
  setFinishModalVisible,
}) => {
  const onPressHandler = () => {
    setFinishModalVisible(false);
    Vibration.cancel();
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={finishModalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>It's time</Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => onPressHandler()}
          >
            <Text style={styles.textStyle}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    paddingHorizontal: 70,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 0,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'black',
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
  modalText: {
    fontSize: 36,
    marginBottom: 15,
  },
});

export default FinishModal;
