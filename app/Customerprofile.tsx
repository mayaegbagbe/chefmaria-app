import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Link } from "expo-router";
import { useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CustomerScreen() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [dob, setDob] = useState<Date>(new Date());
  const [displayDob, setDisplayDob] = useState('');
  const [address, setAddress] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDob(selectedDate);
      setDisplayDob(selectedDate.toLocaleDateString());
    }
  };

  const showMode = () => {
    setShowDatePicker(true);
  };

  const handleSubmit = () => {
    setFirstName('');
    setSurname('');
    setMiddleName('');
    setDob(new Date());
    setDisplayDob('');
    setAddress('');
    setShowDatePicker(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Customer Screen!</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.formContainer}>
          <View style={styles.FormView}>
            <Text style={styles.formInstructionsText}>Please fill the following with the appropriate information</Text>

            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput style={styles.formInput} value={firstName} onChangeText={setFirstName} placeholder="e.g. John" />

            <Text style={styles.inputLabel}>Surname</Text>
            <TextInput style={styles.formInput} value={surname} onChangeText={setSurname} placeholder="e.g. Doe" />

            <Text style={styles.inputLabel}>Middle Name</Text>
            <TextInput style={styles.formInput} value={middleName} onChangeText={setMiddleName} placeholder="e.g. Ethan" />

            <Text style={styles.inputLabel}>Date of Birth</Text>
            <Pressable onPress={showMode}>
              <View pointerEvents="none">
                <TextInput
                  style={styles.formInput}
                  placeholder="Select Date of Birth"
                  value={displayDob}
                  editable={false}
                />
              </View>
            </Pressable>
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dob}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                textColor='black'
                onChange={handleDateChange}
              />
            )}

            <Text style={styles.inputLabel}>Home Address</Text>
            <TextInput style={styles.formInput} value={address} onChangeText={setAddress} placeholder="e.g. 123 Red Street" />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Link href={'/order'} asChild>
        <Pressable style={styles.orderButton}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Place your Order</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollViewContent: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 100,
  },
  FormView: {
    backgroundColor: '#FFEBEE',
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  orderButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#D32F2F',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    zIndex: 10,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    marginTop: 10,
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#E57373',
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#FFF8E1',
    width: '100%',
    color: '#333',
  },
  formInstructionsText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputLabel: {
    fontSize: 14,
    color: '#D32F2F',
    marginBottom: 5,
    alignSelf: 'flex-start',
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#C62828',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});