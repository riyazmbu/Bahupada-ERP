import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppFooter = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('dashboard');

  const footerItems = [
    { name: 'dashboard', icon: 'grid', },
    { name: 'cart', icon: 'cart' },
    { name: 'transactions', icon: 'server' },
    { name: 'inventory', icon: 'cube' },
    { name: 'profile', icon: 'person' },
  ];

  return (
    <View style={styles.footerContainer}>
      {/* Group of five icons for the bottom navigation */}
      <View style={styles.iconGroup}>
        {/* Left side icons (Grid, Transactions, Cart, Cube) */}
        <TouchableOpacity 
          style={activeTab === 'dashboard' ? styles.activeIcon : styles.inactiveIcon} 
          onPress={() => setActiveTab('dashboard')}>
          <Ionicons 
            name={activeTab === 'dashboard' ? 'grid' : 'grid-outline'} 
            size={24} 
            color={activeTab === 'dashboard' ? '#1e3a8a' : '#9ca3af'} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.inactiveIcon} 
          onPress={() => setActiveTab('transactions')}>
          <Ionicons 
            name={activeTab === 'transactions' ? 'cash-sharp' : 'cash-outline'} 
            size={24} 
            color={activeTab === 'transactions' ? '#1e3a8a' : '#9ca3af'} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.inactiveIcon} 
          onPress={() => setActiveTab('cart')}>
          <Ionicons 
            name={activeTab === 'cart' ? 'cart-sharp' : 'cart-outline'} 
            size={24} 
            color={activeTab === 'cart' ? '#1e3a8a' : '#9ca3af'} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.inactiveIcon} 
          onPress={() => setActiveTab('inventory')}>
          <Ionicons 
            name={activeTab === 'inventory' ? 'cube-sharp' : 'cube-outline'} 
            size={24} 
            color={activeTab === 'inventory' ? '#1e3a8a' : '#9ca3af'} />
        </TouchableOpacity>

      </View>

      {/* Right side icons (Reports, Profile, Settings) */}
      <View style={styles.iconGroup}>
        <TouchableOpacity 
          style={styles.inactiveIcon} 
          onPress={() => setActiveTab('reports')}>
          <Ionicons 
            name={activeTab === 'reports' ? 'stats-chart-sharp' : 'stats-chart-outline'} 
            size={24} 
            color={activeTab === 'reports' ? '#1e3a8a' : '#9ca3af'} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.inactiveIcon} 
          onPress={() => setActiveTab('profile')}>
          <Ionicons 
            name={activeTab === 'profile' ? 'person-circle-sharp' : 'person-circle-outline'} 
            size={24} 
            color={activeTab === 'profile' ? '#1e3a8a' : '#9ca3af'} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.inactiveIcon} 
          onPress={() => setActiveTab('settings')}>
          <Ionicons 
            name={activeTab === 'settings' ? 'settings-sharp' : 'settings-outline'} 
            size={24} 
            color={activeTab === 'settings' ? '#1e3a8a' : '#9ca3af'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 15, // Space between icons
  },
  activeIcon: {
    backgroundColor: '#eff6ff',
    borderRadius: 10,
    padding: 10,
  },
  inactiveIcon: {
    padding: 10,
  },
});

export default AppFooter;
