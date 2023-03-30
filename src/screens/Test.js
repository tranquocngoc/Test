import axios from 'axios';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

const Test = () => {
  const [data, setData] = useState([]);

  const fetchRandom = async () => {
    try {
      const res = await axios.get(
        'https://random-data-api.com/api/users/random_user?size=10',
      );
      setData(res.data);
    } catch (err) {
      console(err);
    }
  };

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <View style={styles.image}>
          <Image style={styles.avatar} source={{uri: item.item.avatar}} />
        </View>
        <View style={styles.title}>
          <Text style={styles.txtName} numberOfLines={1}>
            {item.item.fist_name + '' + item.item.last_name}
          </Text>
          <Text style={styles.txtJobTitle} numberOfLines={1}>
            {item.item.employment.title}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headers}>
        <TouchableOpacity onPress={fetchRandom} style={styles.btnFetchRandom}>
          <Text style={styles.txtFetchRandom}>Fetch Random</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.uid}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={{paddingHorizontal: 20}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1f5dc',
  },
  headers: {justifyContent: 'center', alignItems: 'center', paddingBottom: 10},
  btnFetchRandom: {
    backgroundColor: 'red',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  txtFetchRandom: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  body: {flex: 1},
  avatar: {width: 150, height: 150, margin: 8},
  txtName: {fontWeight: 'bold', paddingVertical: 4},
  txtJobTitle: {paddingVertical: 4},
  image: {
    flex: 1,
  },
  item: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
