import { FC } from 'react';
import { View } from 'react-native';
export const AppProvider: FC<any> = ({ children }) => {
  return <View style={{ flex: 1, backgroundColor: '#000' }}>{children}</View>;
};
