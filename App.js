import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput ,TouchableOpacity } from 'react-native';

export default function App() {

  const [ validCode, setValidCode ] = useState('');
  const [ validStatus, setValidStatus ] = useState({ text: '', color: 'transparent', nextBtn: 'none' });

  const judgeInputValue = () => {
    validCode.length === 4?
      ( validCode === '1234'? 
        setValidStatus({text: '驗證成功', color: 'green', nextBtn: 'flex'}):
        setValidStatus({text: '驗證失敗', color: 'red', nextBtn: 'none'})
      ):
    setValidStatus({text: '請輸入四碼驗證碼', color: '#f2c702', nextBtn: 'none'});
  }

  return (
    <View style={styles.container}>
      <Text 
        style={[styles.textStyle, {color: '#222'}]}>
          在新裝置登入需要完成安全驗證。
      </Text>
      <Text 
        style={[styles.textStyle, {color: '#bbb'}]}>          
          驗證綁定手機: 09xx-xxx-xxx
      </Text>
      <View style={styles.inputWrap}>
        <TextInput 
          style={styles.inputStyle}
          maxLength={4} 
          placeholder={'輸入簡訊驗證碼'}
          onChangeText={(text) => setValidCode(text)}
          keyboardType={'numeric'}
          secureTextEntry={true}
          autoFocus={true}
          value={validCode}
        />
        <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={() => judgeInputValue()}>
          <Text 
            style={styles.buttonTextStyle}>
              驗證
          </Text>
        </TouchableOpacity>
      </View>
      <Text 
        style={{color: validStatus.color, fontSize: 18, marginTop: 4, width: '100%', padding: 6, textAlign: 'right'}}>
          { validStatus.text }
      </Text>
      <TouchableOpacity 
        style={[styles.buttonNextStep, {display: validStatus.nextBtn}]}>
        <Text style={styles.buttonNextStepText}> 
          下一步
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 25,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    marginTop: 60,
  },
  inputWrap: {
    width: '100%',
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: "row",
  },
  inputStyle: {
    flex: 3/4,
    backgroundColor: 'white',
    color: '#000',
    fontSize: 22,
    paddingLeft: 12,
  },
  buttonStyle: {
    flex: 1/4,
    color: '#000',
    borderLeftWidth: 2,
    borderLeftColor: '#ccc',
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    lineHeight: 40,
  },
  buttonNextStep: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 6,
    paddingVertical: 12,
    marginTop: 16,
  },
  buttonNextStepText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  }
});
