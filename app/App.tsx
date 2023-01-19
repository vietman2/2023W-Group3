import { StyleSheet, Text, View , Dimensions , Button , Alert} from 'react-native';
import  SelectDropdown  from 'react-native-select-dropdown'
import React from 'react';

const screenwidth = Dimensions.get('window').width;
const outcounts = ["0아웃", "1아웃", "2아웃"]
const hits = ["좌안","좌플", "좌월", "좌선", "우안","우플", "우월", "우선", "중안","중플", "중월"]
const runners = ["1루", "2루", "3루", "1·2루", "1·3루", "2·3루", "만루"]

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style = {styles.text}>아웃카운트 : </Text>
        <SelectDropdown
        data = {outcounts}
        onSelect = {(selectedItem, index) => {
          console.log(selectedItem);
        }}
        buttonTextAfterSelection = {(selectedItem, index) =>{
          return selectedItem
        }}
        rowTextForSelection = {(Item, index) =>{
          return Item
        }}
        onChangeSearchInputText={()=>{}}
        defaultButtonText = {'선택'}
        buttonStyle = {styles.buttonStyle}
        buttonTextStyle = {styles.text}
        />        
      </View>
      <View style={styles.box}>
        <Text style = {styles.text}>타구 : </Text>
        <SelectDropdown
        data = {hits}
        onSelect = {(selectedItem, index) => {
          console.log(selectedItem);
        }}
        buttonTextAfterSelection = {(selectedItem, index) =>{
          return selectedItem
        }}
        rowTextForSelection = {(Item, index) =>{
          return Item
        }}
        onChangeSearchInputText={()=>{}}
        defaultButtonText = {'선택'}
        />        
      </View>
      <View style={styles.box}>
        <Text style = {styles.text}>주자 : </Text>
        <SelectDropdown
        data = {runners}
        onSelect = {(selectedItem, index) => {
          console.log(selectedItem);
        }}
        buttonTextAfterSelection = {(selectedItem, index) =>{
          return selectedItem
        }}
        rowTextForSelection = {(Item, index) =>{
          return Item
        }}
        onChangeSearchInputText={()=>{}}
        defaultButtonText = {'선택'}
        />
      <Button
      title='GO!'
      onPress={()=>Alert.alert('Features coming soon...')}
      />
      </View>
      <View style = {styles.situationbox}>
        <Text>Not now</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  box: {
    marginTop: 30,
    alignItems : 'center',
    width : screenwidth - 40 ,
    height : 50,
    borderRadius : 15,
    color: 'grey',
    flexDirection: 'row',
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  buttonStyle: {
    width: 100,
    height: 40,
  },
  situationbox: {
    marginTop: 50,
    width: screenwidth-60,
    height: screenwidth-60,
    backgroundColor: "green",
    alignItems : "center",
    justifyContent : "center",
  }
});
