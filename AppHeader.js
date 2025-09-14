import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        {/* Left Side: Back Arrow */}
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Middle Section: Logo and Text */}
        <View style={styles.appInfoContainer}>
          {/* You would replace this with your actual app logo image */}
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }} 
            style={styles.logo}
          />
          <View>
            <Text style={styles.title}>FMCG ERP</Text>
            <Text style={styles.subtitle}>Distributor Panel</Text>
          </View>
        </View>

        {/* Right Side: Icons */}
        <View style={styles.iconGroup}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="sunny-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="person-circle-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#1e3a8a', // Solid background color
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  appInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1, // Allows it to take up available space
    marginLeft: 15,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#d1d5db',
    fontSize: 12,
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    // Optional: Add padding for a larger touch target
    padding: 5,
  },
});

export default AppHeader;
