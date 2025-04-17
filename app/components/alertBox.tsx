import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const AlertBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.alertTextWrapper}>
                <Text style={styles.arlertTitle}>News, Subscriptions and Social</Text>
                <Text style={styles.alertDetails}>Stay updated with a place for everything, including newsletters and alerts.</Text>
            </View>
            <View style={styles.closeButtonWrapper}>
                <Icon name="close" size={24} color="#4B4BB9" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#DBDCF1',
        padding: 20,
        position: 'relative',borderRadius:10,
    },
    alertTextWrapper: {
        gap:10,
    },
    arlertTitle: {
        fontSize: 18,
        fontWeight:600,
        color:'#4B4BB9',
    },
    alertDetails: {
        fontSize: 16,
        fontWeight: 400,
        color:'#4B4BB9',
    },
    closeButtonWrapper: {
        position: 'absolute',
        top: 5,
        right: 10,
        cursor:'pointer',
    }
});

export default AlertBox;