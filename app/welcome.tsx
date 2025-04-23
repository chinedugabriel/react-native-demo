import { StyleSheet, View, Text, Image } from "react-native";
import { Router } from "expo-router";
import { useRouter } from "expo-router";

const WecomeScreen = () => {
    const router = useRouter();
    setTimeout(() => {
        router.navigate('./components/news');
    },3000);
    return (
        <View style={styles.container}>
            <View style={styles.userImgWrapper}>
                <Image source={{uri: 'https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?t=st=1745293655~exp=1745297255~hmac=ddb04384a04768a4c72065fc9503df3489440e992062b0d9af19bf6e69fcaab9&w=740'}} style={styles.userImg} />
            </View>
            <View style={styles.userTextWrapper}>
                <Text style={styles.userText}>
                    Welcome Back <Text> Mr James</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        height: '100%',
        // backgroundColor: 'red',
        // justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        paddingTop: '30%',

    },
    userImgWrapper : {
        borderRadius: '100%',
        width: 250,
        height: 250,
        overflow: 'hidden',
        paddingTop: 26,
        backgroundColor: 'white',
    },
    userImg : {
        // borderRadius: '50%',
        height: '100%',
        width: '100%',
    },
    userTextWrapper : {

    },
    userText : {
        fontSize: 26,
    }
});

export default WecomeScreen;