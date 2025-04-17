import { StyleSheet, View, Text, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const MessageList = () => {
    return (
        <View>
            <View style={styles.statusTextwrapper}>
                <View style={{borderBottomWidth:1, paddingVertical: 5,}}>
                    <Text>NEW MESSAGES</Text>
                </View>
            </View>
            <ScrollView style={{height: '37%',}}>
                <View style={styles.Container}>
                    <View style={styles.column1}>
                        <View style={styles.blueDotStatusIcon}></View>
                        <View style={styles.messageIconStatus}>
                            <Icon name='star' size={24} color='#FFFFFF' />
                        </View>
                    </View>
                    <View style={styles.Column2}>
                        <View style={styles.textWrapper}>
                            <Text style= {styles.TextTitle}>no-reply@krispcall.com</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                        </View>
                        <View style= {styles.timeIconWrapper}>
                            <Text>8:1 AM</Text>
                            <Icon name='arrow-circle-o-right' size={24} color='#8A898E' />
                        </View>
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.column1}>
                        <View style={styles.blueDotStatusIcon}></View>
                        <View style={styles.messageIconStatus}>
                            <Icon name='star' size={24} color='#FFFFFF' />
                        </View>
                    </View>
                    <View style={styles.Column2}>
                        <View style={styles.textWrapper}>
                            <Text style= {styles.TextTitle}>no-reply@krispcall.com</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                        </View>
                        <View style= {styles.timeIconWrapper}>
                            <Text>8:1 AM</Text>
                            <Icon name='arrow-circle-o-right' size={24} color='#8A898E' />
                        </View>
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.column1}>
                        <View style={styles.blueDotStatusIcon}></View>
                        <View style={[styles.messageIconStatus,{backgroundColor: '#ACC7E5'}]}>
                            <Icon name='building' size={24} color='#FFFFFF' />
                        </View>
                    </View>
                    <View style={styles.Column2}>
                        <View style={styles.textWrapper}>
                            <Text style= {styles.TextTitle}>no-reply@krispcall.com</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                        </View>
                        <View style= {styles.timeIconWrapper}>
                            <Text>8:1 AM</Text>
                            <Icon name='arrow-circle-o-right' size={24} color='#8A898E' />
                        </View>
                    </View>
                </View>

                <View style={styles.Container}>
                    <View style={styles.column1}>
                        <View style={styles.blueDotStatusIcon}></View>
                        <View style={styles.messageIconStatus}>
                            <Icon name='star' size={24} color='#FFFFFF' />
                        </View>
                    </View>
                    <View style={styles.Column2}>
                        <View style={styles.textWrapper}>
                            <Text style= {styles.TextTitle}>no-reply@krispcall.com</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                        </View>
                        <View style= {styles.timeIconWrapper}>
                            <Text>8:1 AM</Text>
                            <Icon name='arrow-circle-o-right' size={24} color='#8A898E' />
                        </View>
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.column1}>
                        <View style={styles.blueDotStatusIcon}></View>
                        <View style={[styles.messageIconStatus,{backgroundColor: '#ACC7E5'}]}>
                            <Icon name='building' size={24} color='#FFFFFF' />
                        </View>
                    </View>
                    <View style={styles.Column2}>
                        <View style={styles.textWrapper}>
                            <Text style= {styles.TextTitle}>no-reply@krispcall.com</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                        </View>
                        <View style= {styles.timeIconWrapper}>
                            <Text>8:1 AM</Text>
                            <Icon name='arrow-circle-o-right' size={24} color='#8A898E' />
                        </View>
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.column1}>
                        <View style={styles.blueDotStatusIcon}></View>
                        <View style={[styles.messageIconStatus,{backgroundColor: '#ACC7E5'}]}>
                            <Icon name='building' size={24} color='#FFFFFF' />
                        </View>
                    </View>
                    <View style={styles.Column2}>
                        <View style={styles.textWrapper}>
                            <Text style= {styles.TextTitle}>no-reply@krispcall.com</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                        </View>
                        <View style= {styles.timeIconWrapper}>
                            <Text>8:1 AM</Text>
                            <Icon name='arrow-circle-o-right' size={24} color='#8A898E' />
                        </View>
                    </View>
                </View>
                <View style={styles.Container}>
                    <View style={styles.column1}>
                        <View style={styles.blueDotStatusIcon}></View>
                        <View style={styles.messageIconStatus}>
                            <Icon name='star' size={24} color='#FFFFFF' />
                        </View>
                    </View>
                    <View style={styles.Column2}>
                        <View style={styles.textWrapper}>
                            <Text style= {styles.TextTitle}>no-reply@krispcall.com</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                        </View>
                        <View style= {styles.timeIconWrapper}>
                            <Text>8:1 AM</Text>
                            <Icon name='arrow-circle-o-right' size={24} color='#8A898E' />
                        </View>
                    </View>
                </View>
                                <View style={styles.Container}>
                    <View style={styles.column1}>
                        <View style={styles.blueDotStatusIcon}></View>
                        <View style={[styles.messageIconStatus,{backgroundColor: '#ACC7E5'}]}>
                            <Icon name='building' size={24} color='#FFFFFF' />
                        </View>
                    </View>
                    <View style={styles.Column2}>
                        <View style={styles.textWrapper}>
                            <Text style= {styles.TextTitle}>no-reply@krispcall.com</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                            <Text style= {styles.subTextDetails}>. Daily Usage Report</Text>
                        </View>
                        <View style= {styles.timeIconWrapper}>
                            <Text>8:1 AM</Text>
                            <Icon name='arrow-circle-o-right' size={24} color='#8A898E' />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    statusTextwrapper: {
        color: "#EBEBEB",
        paddingStart: 20,
    },
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        width: '100%',
        justifyContent:'space-between',
    },
    column1: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    blueDotStatusIcon: {
        height: 10,
        width: 10,
        backgroundColor: '#007AFF',
        borderRadius:'50%',
    },
    messageIconStatus: {
        padding: 15,
        backgroundColor: '#EE71D7',
        borderRadius: 10,
    },
    Column2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 13,
    },
    textWrapper: {
        gap: 2,
    },
    TextTitle: {
        fontSize: 16,
        fontWeight: 600,
    },
    subTextDetails: {
        fontWeight: 400,
    },
    timeIconWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        // paddingVertical: 0,
        // paddingBlockEnd:30,
        
    }
    

});

export default MessageList;