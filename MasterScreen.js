import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppHeader from './AppHeader'; // Assuming the AppHeader component is in a separate file

// Data for each of the master buttons
const mastersData = [
  { id: '1', name: 'Journal Master', icon: 'book-outline' },
  { id: '2', name: 'Ledger Master', icon: 'server-outline' },
  { id: '3', name: 'Item Master', icon: 'cube-outline' },
  { id: '4', name: 'Unit of Measure', icon: 'cellular-outline' },
  { id: '5', name: 'Price List/Rate', icon: 'pricetags-outline' },
  { id: '6', name: 'Tax Master', icon: 'cash-outline' },
  { id: '7', name: 'Batch/Lot/Serial', icon: 'list-outline' },
  { id: '8', name: 'Customer Master', icon: 'people-outline' },
  { id: '9', name: 'Vendor/Supplier', icon: 'business-outline' },
  { id: '10', name: 'Warehouse/Godown', icon: 'home-outline' },
  { id: '11', name: 'Route/Beat', icon: 'location-outline' },
  { id: '12', name: 'Salesman/Employee', icon: 'person-outline' },
  { id: '13', name: 'Transporter/Vehicle', icon: 'car-outline' },
  { id: '14', name: 'Bank Master', icon: 'wallet-outline' },
  { id: '15', name: 'Scheme/Discount', icon: 'ticket-outline' },
   { id: '16', name: 'Scheme/Disco1unt', icon: 'ticket-outline' }
];

const MastersScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Masters</Text>
        <Text style={styles.subtitle}>Welcome back! Here's your business overview</Text>

        {/* Grid of Master Buttons */}
        <View style={styles.gridContainer}>
          {mastersData.map((item) => (
            <TouchableOpacity key={item.id} style={styles.itemContainer}>
              <Ionicons name={item.icon} size={35} color="#1e3a8a" />
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#f3f4f6', // Subtle gray background for the content area
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20, // Overlap with the header for a smooth transition
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '31%', // Roughly 1/3 of the container width
    aspectRatio: 1, // Keep items square
    backgroundColor: '#e0f7fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  itemName: {
    marginTop: 10,
    textAlign: 'center',
    color: '#1e3a8a',
    fontWeight: '600',
    fontSize: 12,
  },
});

export default MastersScreen;
