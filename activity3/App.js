import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,ScrollView} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const MORNING = [
  {
    id: '11',
    title: 'checking the time',
  },
  {
    id: '12',
    title: 'scroll on social media',
  },
  {
    id: '13',
    title: 'making a coffee',
  },
  {
    id: '14',
    title: 'cooking breakfast',
  },
  {
    id: '15',
    title: 'eat my breakfast',
  },
  {
    id: '16',
    title: 'taking a bath',
  },
    {
    id: '17',
    title: 'skin care',
  },
  {
    id: '18',
    title: 'straightening my hair',
  },
    {
    id: '19',
    title: 'wearing a clothes',
  },
  {
    id: '10',
    title: 'go outside to feel the fresh air',
  },
];

const AFTERNOON = [
  {
    id: '21',
    title: 'preparing a recipe',
  },
  {
    id: '22',
    title: 'cooking my meal',
  },
  {
    id: '23',
    title: 'eat my meal',
  },
  {
    id: '24',
    title: 'open my phone',
  },
  {
    id: '25',
    title: 'play online games',
  },
  {
    id: '26',
    title: 'trashtalking a kid',
  },
  {
    id: '27',
    title: 'admiring my self',
  },
  {
    id: '28',
    title: 'go to the toilet',
  },
  {
    id: '29',
    title: 'drink enough water',
  },
  {
    id: '20',
    title: 'nap time',
  },
];

const EVENING = [
  {
    id: '31',
    title: 'checking the time',
  },
  {
    id: '32',
    title: 'washing my body',
  },
  {
    id: '33',
    title: 'go to the gym',
  },
  {
    id: '34',
    title: 'prepare my meal',
  },
  {
    id: '35',
    title: 'sleep',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <Text style={styles.todo}>TO DO LIST</Text>
    <Text style={styles.morning}>MORNING</Text>
      <FlatList
        data={MORNING}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

    <Text style={styles.afternoon}>AFTERNOON</Text>
    <FlatList
        data={AFTERNOON}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

    <Text style={styles.evening}>EVENING</Text>
    <FlatList
        data={EVENING}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'pink',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
  todo: {
    marginTop: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    color: 'pink',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  morning: {
    marginTop: 16,
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  afternoon: {
    marginTop: 16,
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  evening: {
    marginTop: 16,
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;