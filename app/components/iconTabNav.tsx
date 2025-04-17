import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const IconTabNav = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconWrapper}>
                <Icon name="user-o" size={24} color="#848389"/>
            </View>
            
            <View style={styles.iconWrapper}>
                <Icon name="shopping-cart" size={24} color="#848389" />
                
                
            </View>
            <View style={styles.iconWrapperActive}>
                <Icon name="commenting-o" size={24} color="white" />
                <Text style={styles.iconText}>Updates</Text>
            </View>
            <View style={styles.iconWrapper}>
                <Icon name="bullhorn" size={24} color="#848389"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 0,
    },
    iconWrapper:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: '#E9E9EB',
        cursor:'pointer',
    },
    iconWrapperActive: {
        backgroundColor: '#4B4BB9',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        paddingHorizontal: 25,
        borderRadius: 15,
        cursor:'pointer',
    },
    iconText: {
    color: 'white',
    }
});

export default IconTabNav;