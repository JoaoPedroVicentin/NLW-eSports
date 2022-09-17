import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps {
    name: string,
    subtitle: string
}

export function Heading({name, subtitle, ...rest}: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.title} {...rest}>
            {name}
        </Text>

        <Text style={styles.subtitle}>
            {subtitle}
        </Text>
    </View>
  );
}