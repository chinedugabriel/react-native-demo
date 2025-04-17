import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBox = ()=> {
    return (
        <View style={styles.searchWrapper}>

            <View style={styles.iconWrapper}>
                <Icon name="search" size={24} color="#848389" />
            </View>

            <TextInput placeholder='Search'  defaultValue='Search' style={styles.inputBox} />
            
            <View style={styles.iconWrapper}>
                <Icon name="microphone" size={24} color="#848389" />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    searchWrapper: {
        backgroundColor: '#E9E9EB',
        borderRadius:10,
        flexDirection: 'row',
        paddingHorizontal: 10,
        gap:10,
    },
    iconWrapper: {
        paddingVertical: 10,
    },
    inputBox: {
        flex: 1,
        fontSize: 20,
        color: "#848389",
    }
});

export default SearchBox;