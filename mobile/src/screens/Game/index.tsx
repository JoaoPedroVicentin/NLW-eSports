import { useState, useEffect } from 'react'
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { Entypo } from '@expo/vector-icons'
import { styles } from './styles';
import { GameParams } from '../../types/navigation';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import {DuoMatch} from "../../components/DuoMatch/index"

export function Game() {

    const route = useRoute()
    const game = route.params as GameParams
    const navigation = useNavigation()
    const [duos, setDuos] = useState<DuoCardProps[]>([])
    const [ discordDuoSelected, setDiscordDuoSelected ] = useState('')

    function handleGoBack() {
        navigation.goBack()
    }

    async function getDiscordUser(adsId: string){
        fetch(`http://192.168.1.37:3333/ads/${adsId}/discord`)
            .then(response => response.json())
            .then(data => setDiscordDuoSelected(data.discord))
    }

    useEffect(() => {
        fetch(`http://192.168.1.37:3333/games/${game.id}/ads`)
            .then(response => response.json())
            .then(data => setDuos(data))
    }, [])


    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo name='chevron-thin-left' color={THEME.COLORS.CAPTION_300} size={20} />
                    </TouchableOpacity>

                    <Image source={logoImg} style={styles.logo} />
                    <View style={styles.right} />
                </View>

                <Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode="cover" />

                <Heading title={game.name} subtitle='Conecte-se e comece a jogar!' />

                <FlatList data={duos} 
                keyExtractor={item => item.id} 
                renderItem={({ item }) => (
                    <DuoCard onConnect={() => getDiscordUser(item.id)} data={item} />
                )} 
                horizontal 
                style={styles.containerList} 
                contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]} 
                showsHorizontalScrollIndicator={false} 
                ListEmptyComponent={() => (
                    <Text style={styles.emptyListText}> Não há anúncios publicados ainda </Text>
                    )}
                 />
                 <DuoMatch onClose={() => setDiscordDuoSelected('')} visible={discordDuoSelected.length > 0} discord={discordDuoSelected} />
            </SafeAreaView>
        </Background>
    );
}