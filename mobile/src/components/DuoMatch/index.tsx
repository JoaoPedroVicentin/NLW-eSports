import { Modal, View, ModalProps, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles';
import { THEME } from '../../theme';
import { CheckCircle } from 'phosphor-react-native';
import { Heading } from '../Heading';

interface Props extends ModalProps {
    discord: string,
    onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
    return (
        <Modal transparent statusBarTranslucent {...rest}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
                        <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500} />
                    </TouchableOpacity>

                    <CheckCircle size={64} weight='bold' color={THEME.COLORS.SUCCESS} />

                    <Heading name="Let`s Play!" subtitle='Agora é só jogar' style={{alignItems: 'center', marginTop: 24}}/>

                    <Text style={styles.label}>
                        Adicione no Discord
                    </Text>

                    <Text style={styles.discord}>
                        {discord}
                    </Text>
                </View>
            </View>
        </Modal>
    );
}