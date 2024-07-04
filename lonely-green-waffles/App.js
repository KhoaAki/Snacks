// App.js
import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // For icons

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Home Screen Component
function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Hello 👋</Text>
        <Text style={styles.userName}>Tran Tuan Khoa</Text>
        <Image 
          style={styles.profilePic} 
          source={{uri: 'https://cdn.glitch.global/c69337a1-a1fd-4ee0-b666-1632f9580033/anh-anime-den-trang-dep_104426602-762x1024.jpg?v=1702797707270'}} 
        />
        
      </View>
      <Text style={styles.userName}>Your Insights</Text>
      {/* Insights Section */}
      <View style={styles.insightsContainer}>
        <View style={styles.insightBox}>
          <Image style={styles.icon} source={{uri: 'https://cdn.glitch.global/c69337a1-a1fd-4ee0-b666-1632f9580033/Screenshot%202024-07-04%20214339.png?v=1720104282095'}} />
          <Text style={styles.insightText}>Scan new</Text>
          <Text style={styles.insightCount}>Scanned 483</Text>
        </View>
        <View style={styles.insightBox}>
          <Image style={styles.icon} source={{uri: 'https://cdn.glitch.global/c69337a1-a1fd-4ee0-b666-1632f9580033/Screenshot%202024-07-04%20214351.png?v=1720104278604'}} />
          <Text style={styles.insightText}>Counterfeits</Text>
          <Text style={styles.insightCount}>Counterfeited 32</Text>
        </View>
        <View style={styles.insightBox}>
          <Image style={styles.icon} source={{uri: 'https://cdn.glitch.global/c69337a1-a1fd-4ee0-b666-1632f9580033/Screenshot%202024-07-04%20214401.png?v=1720104276727'}} />
          <Text style={styles.insightText}>Success</Text>
          <Text style={styles.insightCount}>Checkouts 8</Text>
        </View>
        <View style={styles.insightBox}>
          <Image style={styles.icon} source={{uri: 'https://cdn.glitch.global/c69337a1-a1fd-4ee0-b666-1632f9580033/Screenshot%202024-07-04%20214411.png?v=1720104277760'}} />
          <Text style={styles.insightText}>Directory</Text>
          <Text style={styles.insightCount}>History 26</Text>
        </View>
      </View>

      {/* Explore More Button */}
      <TouchableOpacity style={styles.exploreMoreButton}>
        <Text style={styles.exploreMoreText}>Explore More</Text>
        <Ionicons name="arrow-forward" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}

// Scan Screen Component
function ScanScreen({ navigation }) {
  return (
    <View style={styles.scanContainer}>
      <ImageBackground 
        source={{uri: 'https://cdn.glitch.global/c69337a1-a1fd-4ee0-b666-1632f9580033/Screenshot%202024-07-04%20215923.png?v=1720105234735'}} 
        style={styles.backgroundImage}
      >
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Product Name */}
        <View style={styles.productNameContainer}>
          <Text style={styles.productName}>Lauren's Orange Juice</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Scan" 
          component={ScanScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="scan" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles for the App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
  },
  userName: {
    fontSize: 20,
    marginVertical: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  insightsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  insightBox: {
    width: 170,
    height: 200,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F8F8FB',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  insightText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,

  },
  insightCount: {
    fontSize: 14,
    color: '#888',

  },
  exploreMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  exploreMoreText: {
    fontSize: 16,
    marginRight: 5,
  },
  scanContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  productNameContainer: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
  },
  icon: {
    width: 50,
    height: 50,
  },
});