import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

export function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily:"Amatic_Regular"}}>Hello, World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
