import React from 'react';
import { View, StyleSheet } from 'react-native';

import { RoundedButton } from '../../components/roundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
      <View style={styles.view}>
        <View>
          <RoundedButton style={styles.buttons} size={50} title="10" onPress={() => onChangeTime(10)} />
        </View>
        <View>
          <RoundedButton style={styles.buttons} size={50} title="15" onPress={() => onChangeTime(15)} />
        </View>
        <View>
          <RoundedButton style={styles.buttons} size={50} title="20" onPress={() => onChangeTime(20)} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    flex: 1,
    paddingBottom: 45,
    justifyContent: 'center',
  },
  buttons: {
    margin: 10,
  }
});
