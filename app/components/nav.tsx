import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const Nav = () => {
    const router = useRouter();
    return (
    <View style={styles.container}>
        {/* <View style={{flexDirection:'row', alignItems:'center'}}>
            <Icon name='angle-left' size={24} color='#007AFF' />
            <Text style={ styles.textFont}> Yahoo!</Text>
        </View> */}
            
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon name='angle-left' size={24} color='#007AFF' />
                <Button onPress={() => router.navigate('../news')} title='Yahoo' />    
            </View> 
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon name='angle-left' size={24} color='#007AFF' />
                <Button onPress={() => router.navigate('../login')} title='Yahoo' />    
            </View> 
        
        <View style={styles.subMenuWrapper}>
            <Text style={[styles.textFont, styles.buttonSelect]}>Select</Text>
            <View style={styles.submenu}>
                <View style= {styles.subMenuItem}></View>
                <View style= {styles.subMenuItem}></View>
                <View style= {styles.subMenuItem}></View>
            </View>
        </View>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },
    subMenuWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    buttonSelect: {
        borderRadius: 30,
        backgroundColor: '#E9E9EB',
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontSize: 20,
    },
    submenu: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap:2,
        padding: 0,
        height: 40,
        width: 40,
        borderRadius: 50,
        backgroundColor: '#E9E9EB',

    },
    subMenuItem: {
      height: 5,
        width: 5,
      borderRadius: 50,
      backgroundColor: '#007AFF', 
    },
    textFont: {
        fontSize: 20,
        textAlign: 'center',
        color: '#007AFF',
    }
});


export default Nav;