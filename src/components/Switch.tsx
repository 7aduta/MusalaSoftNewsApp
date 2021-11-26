import React, {FC, useRef, useState, useCallback, memo, useMemo} from 'react';
import {
  StyleSheet,
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
  I18nManager
} from 'react-native';
import {Colors} from '../constants/styleConstants';
interface ISwitch {
  isActive?: boolean;
  onValueChange?: (status: boolean) => void;
  thumbStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
const Switch: FC<ISwitch> = ({
  contentContainerStyle,
  onValueChange,
  thumbStyle,
  isActive = false,
}) => {
  const slideInOut = useRef(new Animated.Value(isActive ? 1 : 0)).current;
  const [active, setActive] = useState(isActive);

  const toggleActive = useCallback(() => {
    setActive((e) => !e);
    onValueChange && onValueChange(active);
    Animated.spring(slideInOut, {
      toValue: active ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }, [active, isActive]);

  const translate = {
    transform: [
      {
        translateX: slideInOut.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 18.5],
        }),
      },
    ],
  };
  // return useMemo(
  //   () =>
    return (
      <TouchableWithoutFeedback onPress={toggleActive}>
        <View
          style={[
            styles.container,
            contentContainerStyle,
            {borderColor: active ? Colors.minColor : Colors.grayDark},
          ]}>
          <Animated.View
            style={[
              styles.thumb,
              translate,
              thumbStyle,
              !active && {backgroundColor: Colors.grayDark},
            ]}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  //   ),
  //   [active, translate],
  // );
};

export default Switch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: 40,
    height: 18,
    borderRadius: 50,
    padding: 3,
    justifyContent: 'center',
    alignItems:I18nManager.isRTL ?'flex-end':'flex-start'
  },
  thumb: {
    width: 15,
    height: 15,
    borderRadius: 25,
    backgroundColor: Colors.minColor,
  },
});
