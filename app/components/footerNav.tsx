import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const FooterNav = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.textTitle}>
                    Update Just Now
                </Text>
                <Text style={styles.textDetails}>
                    73 Unread
                </Text>
            </View>
            <View style={styles.iconWrapper}>
                <Icon name='pencil-square-o' color='#0079FE' size={30} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 20,
        position: 'relative',
        backgroundColor: '#F7F7F7',
    },
    textWrapper: {
        gap: 2,
        
    },
    textTitle: {
        textAlign: 'center',
        
    },
    textDetails: {
        textAlign: 'center',
    },
    iconWrapper: {
        position: 'absolute',
        right: 10,
        top: 20,
    }
});

export default FooterNav;