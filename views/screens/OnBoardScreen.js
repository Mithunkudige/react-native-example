import React from 'react';
import { Text, View, StyleSheet, Image, StatusBar, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';

const OnBoardScreen = ({ navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
            <StatusBar translucent backgroundColor={COLORS.tranparent} barStyle="dark-content" hidden />
            <Image source={require('../../assets/onboardImage.jpg')} style={style.image} />
            <View style={style.indecatorContainer}>
                <View style={style.indecator}></View>
                <View style={style.indecator}></View>
                <View style={style.indecator}></View>
            </View>
            <View style={{paddingTop: 10, paddingHorizontal: 20}}>
                <View>
                    <Text style={style.title}>Find your</Text>
                    <Text style={style.title}>sweet home</Text>
                </View>
                <View style={{paddingTop: 10}}>
                    <Text style={style.subTitle}>
                    Each Authentication API endpoint is configured with a bucket that defines the request limit and rate
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', paddingHorizontal: 20, paddingBottom: 20}}>
                <Pressable onPress={ () => navigation.navigate('HomeScreen')}>
                    <View style={style.btn}>
                        <Text style={{color: COLORS.white}}>Get Started</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    image: {
        height: 420,
        width: '100%',
        borderBottomLeftRadius: 100,
    },
    indecatorContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indecator: {
        backgroundColor: COLORS.grey,
        width: 20,
        height: 3,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: COLORS.dark,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default OnBoardScreen;
