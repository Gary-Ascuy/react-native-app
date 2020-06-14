import React from 'react'
import { StyleSheet, Button, Text, ScrollView } from 'react-native'

export default function Home({ navigation }: { navigation: any }) {
  return (
    <ScrollView>
      <Text style={style.header} >Application</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="About" onPress={() => navigation.navigate('About', { name: 'Jane' })} />
    </ScrollView>
  )
}

const style = StyleSheet.create({
  header: {
    textAlign: 'center',
    padding: 10,
    paddingBottom: 30,
  }
})
