import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Pressable, ScrollView, Image, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';


const { width } = Dimensions.get("screen");

const DetailScreen = ({ navigation, route }) => {
    const house = route.params;


    const InteriorImage = ({image}) => {
        return (
            <Image source={image} style={style.interiorImage} />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <View style={style.imageContainer}>
                    <ImageBackground style={style.backGroundImage} source={house.image}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10,}}>
                            <Pressable onPress={()=>navigation.navigate('HomeScreen')}>
                                <Text style={{ color: COLORS.white, borderRadius: 10, backgroundColor: COLORS.dark, padding: 10 }}>Back</Text>
                            </Pressable>
                            <Text style={{color: COLORS.white, backgroundColor: COLORS.dark, padding: 10, borderRadius: 10}}>Heart</Text>
                        </View>
                    </ImageBackground>
                    <View style={style.virtualBtn}>
                        <Text style={{color: COLORS.white}}>Virtual Tour</Text>
                    </View>
                </View>
                <View style={style.detailContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, marginBottom: 6}}>
                        <Text style={{fontWeight: 'bold'}}>{house.title}</Text>
                        <Text>$23,098</Text>
                    </View>
                    <Text style={{ color: COLORS.grey }}>{house.details}</Text>                    
                </View>                
                <FlatList
                    horizontal
                    contentContainerStyle={{ marginTop: 20, paddingLeft: 20}}
                    data={house.interiors}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <InteriorImage image={item} />}
                    keyExtractor={(_, key) => key.toString()}
                />                                
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    imageContainer: {
        elevation: 10,
        marginHorizontal: 20,
        height: 350,
        marginTop: 20,
        alignItems: 'center',
    },
    backGroundImage: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden'
    },
    virtualBtn: {
        width: 120,
        top: -20,
        backgroundColor: COLORS.dark,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    detailContainer: {
        flex: 1,
        marginTop: 30,
        paddingHorizontal: 20,
    },
    interiorImage: {
        width: width / 3 - 20,
        height: 80,
        marginRight: 20,
        borderRadius: 10,
    }
});

export default DetailScreen;