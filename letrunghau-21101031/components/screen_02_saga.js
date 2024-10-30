import React from 'react';
import { View, Image, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataRequest } from '../redux/actions/index';

export default function Screen_02({ navigation, route }) {
  const name = "haule";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 15 }}>
      <View
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image source={require('../Icon Button 12.png')} />
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image source={require('../Avatar 31.png')} />
          <View>
            <Text>Hi {name}</Text>
            <Text>Have a nice day</Text>
          </View>
        </View>
      </View>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '90%',
          padding: 10,
          borderRadius: 20,
          fontWeight: '700',
          color: 'gray',
        }}
        placeholder="Enter your name ..."
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ width: '300px', backgroundColor: 'red', padding: 15, margin: 3, borderRadius: 20 }}>
              <Text>{item.name}</Text>
            </View>
          )}
          contentContainerStyle={{ flex: 1, width: '100%' }}
          scrollEnabled={true}
        />
      )}
      <TouchableOpacity
        style={{ padding: 15, borderRadius: 100, backgroundColor: 'green' }}
        onPress={() => dispatch(fetchDataRequest())}
      >
        <Text style={{ color: 'white' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
