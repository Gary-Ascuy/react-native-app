import React from 'react'
import { StyleSheet, Text, ScrollView, Button, Image, View } from 'react-native'

const uri = 'https://i.skyrock.net/7116/90677116/pics/3214765273_1_2_cYHKRLJl.png'

export default function Profile({ navigation }: { navigation: any }) {
  return (
    <ScrollView>
      <View style={style.container}>
        <Image style={style.image} source={{ uri }}></Image>

        <Text style={style.sectionTitle}>Gary Ascuy Anturiano</Text>
        <Text style={style.sectionContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        <Text style={style.sectionContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 50,
  },
  image: {
    width: 500 / 2,
    height: 430 / 2,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20,
  },
  sectionContent: {
    padding: 20,
    paddingTop: 0,
    textAlign: "justify"
  },
})
