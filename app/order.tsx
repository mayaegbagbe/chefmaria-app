import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Modal, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Order() {
  const [registrationDate, setRegistrationDate] = useState<Date>(new Date());
  const [orderDate, setOrderDate] = useState<Date>(new Date());
  const [menuItem, setMenuItem] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [matriculationNumber, setMatriculationNumber] = useState('');
  const [displayRegistrationDate, setDisplayRegistrationDate] = useState('');
  const [showRegistrationDatePicker, setShowRegistrationDatePicker] = useState(false);
  const [showOrderDatePicker, setShowOrderDatePicker] = useState(false);
  const [showOrderFormModal, setShowOrderFormModal] = useState(false);

  const handleRegistrationDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowRegistrationDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setRegistrationDate(selectedDate);
      setDisplayRegistrationDate(selectedDate.toLocaleDateString());
    }
  };

  const handleOrderDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowOrderDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setOrderDate(selectedDate);
      // You might want a separate state for displaying the order date if needed elsewhere
      // For now, it will update the same displayRegistrationDate, which might be confusing.
      // Consider adding a new state like 'displayOrderDate' for clarity.
    }
  };

  const showRegistrationDateMode = () => {
    setShowRegistrationDatePicker(true);
  };

  const showOrderDateMode = () => {
    setShowOrderDatePicker(true);
  };

  return (
    <View style={redThemeStyles.container}>
      <View style={redThemeStyles.mainContentArea}>
        <Text style={redThemeStyles.headerTitle}>Order Form</Text>

        <Text style={redThemeStyles.inputLabel}>Enrollment Date</Text>
        <Pressable onPress={showRegistrationDateMode}>
          <View pointerEvents="none">
            <TextInput
              style={redThemeStyles.textInputStyle}
              placeholder="Select Enrollment Date"
              value={displayRegistrationDate}
              editable={false}
            />
          </View>
        </Pressable>
        {showRegistrationDatePicker && (
          <DateTimePicker
            testID="registrationDatePicker"
            value={registrationDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            textColor="red"
            onChange={handleRegistrationDateChange}
          />
        )}

        <Text style={redThemeStyles.inputLabel}>Student ID</Text>
        <TextInput
          keyboardType="numeric"
          style={redThemeStyles.textInputStyle}
          value={matriculationNumber}
          onChangeText={(text) => {
            if (text.startsWith('_') || text === '') {
              setMatriculationNumber(text);
            } else {
              setMatriculationNumber('_' + text);
            }
          }}
          placeholder="e.g. _231331612"
        />

        <Pressable style={redThemeStyles.orderButton} onPress={() => setShowOrderFormModal(true)}>
          <Text style={redThemeStyles.orderButtonText}>Place Order</Text>
        </Pressable>

        <Modal
          animationType="slide"
          transparent={true}
          visible={showOrderFormModal}
          onRequestClose={() => {
            setShowOrderFormModal(!showOrderFormModal);
          }}
        >
          <View style={redThemeStyles.modalBackground}>
            <View style={redThemeStyles.modalInnerContainer}>
              <Pressable style={redThemeStyles.modalCloseButton} onPress={() => setShowOrderFormModal(false)}>
                <Text style={redThemeStyles.modalCloseButtonText}>X</Text>
              </Pressable>
              <View style={redThemeStyles.formModalView}>
                <Text style={redThemeStyles.inputLabel}>Desired Date</Text>
                <Pressable onPress={showOrderDateMode}>
                  <View pointerEvents="none">
                    <TextInput
                      style={redThemeStyles.textInputStyle}
                      placeholder="Select Order Date"
                      value={orderDate.toLocaleDateString()}
                      editable={false}
                    />
                  </View>
                </Pressable>
                {showOrderDatePicker && (
                  <DateTimePicker
                    testID="orderDatePicker"
                    value={orderDate}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    textColor="red"
                    onChange={handleOrderDateChange}
                  />
                )}

                <Text style={redThemeStyles.inputLabel}>Item Selection</Text>
                <TextInput
                  style={redThemeStyles.textInputStyle}
                  value={menuItem}
                  onChangeText={setMenuItem}
                  placeholder="e.g. Special Burger"
                />

                <Text style={redThemeStyles.inputLabel}>Additional Notes</Text>
                <TextInput
                  style={redThemeStyles.textInputStyle}
                  value={specialInstructions}
                  onChangeText={setSpecialInstructions}
                  placeholder="e.g. No onions, extra cheese"
                />

                <Text style={redThemeStyles.inputLabel}>Payment Option</Text>
                <TextInput
                  style={redThemeStyles.textInputStyle}
                  value={paymentMethod}
                  onChangeText={setPaymentMethod}
                  placeholder="e.g. Credit Card, Mobile Pay"
                />

                <Pressable style={redThemeStyles.submitFormButton} onPress={() => setShowOrderFormModal(false)}>
                  <Text style={redThemeStyles.submitFormButtonText}>Confirm Order</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <Link href={'/'} asChild>
        <Pressable style={redThemeStyles.completeButton}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Finalize</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const redThemeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContentArea: {
    backgroundColor: '#FFCCCC', 
    padding: 25,
    borderRadius: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B0000', 
    marginBottom: 25,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 16,
    color: '#660000', 
    marginBottom: 5,
    fontWeight: '600',
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: '#CC3333',
    padding: 12,
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#FFF0F0', 
    width: '100%',
    color: '#330000', 
  },
  orderButton: {
    backgroundColor: '#CC0000',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  orderButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(153, 0, 0, 0.7)',
  },
  modalInnerContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    width: '90%',
    maxHeight: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 12,
  },
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#8B0000', 
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    zIndex: 1,
  },
  modalCloseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formModalView: {
    backgroundColor: '#FFEBEE',
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  submitFormButton: {
    backgroundColor: '#006400',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 25,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  submitFormButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  completeButton: {
    backgroundColor: '#B22222', 
    paddingHorizontal: 30,
    paddingVertical: 18,
    borderRadius: 12,
    position: 'absolute',
    bottom: 30,
    right: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
});