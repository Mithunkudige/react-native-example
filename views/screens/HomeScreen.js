import React, {useState} from 'react';
import { Text, View, StyleSheet, StatusBar, Image, Dimensions, Pressable } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import houses from '../../consts/houses';


const { width } = Dimensions.get("screen");

const HomeScreen = ({navigation}) => {


    const Card = ({house}) => {
        return (
            <Pressable onPress={()=>navigation.navigate('DetailScreen', house)}>
                <View style={style.card}>
                    <Image source={house.image} style={style.cardImage} />
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, marginBottom: 6}}>
                        <Text style={{fontWeight: 'bold'}}>{house.title}</Text>
                        <Text>$23,098</Text>
                    </View>
                    <Text style={{color: COLORS.grey}}>{house.details}</Text>
                </View>
            </Pressable>
        )
    };

    const CategoryContainer = () => {

        const [selected, setSelected] = useState(0);

        const category = ["Populer", "Recommended", "Nearest"];
        return (
            <View style={style.categoryContainer}>
                {category.map((list, index) => {
                    return (
                        <Pressable onPress={() => setSelected(index)}>
                            <Text style={[style.category, index === selected && style.categorySelected]}>{list}</Text>
                        </Pressable>
                    )
                })}
            </View>
        )
    };

    const ListOptions = () => {
        return (
            <View style={style.listOptionContainer}>
                <View style={style.listCard}>
                    <Image source={require('../../assets/house1.jpg')} style={style.cardImage} />
                    <Text style={{fontWeight: 'bold', paddingTop: 5}}>Title card</Text>
                </View>
                <View style={style.listCard}>
                    <Image source={require('../../assets/house2.jpg')} style={style.cardImage} />
                    <Text style={{fontWeight: 'bold', paddingTop: 5}}>Title card</Text>
                </View>
            </View>
        )
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <StatusBar />
            <View style={style.header}>
                <View>
                    <Text style={{color: COLORS.grey, fontSize: 16, fontWeight: 'bold'}}>Mithun</Text>
                    <Text style={{color: COLORS.dark, fontWeight: 'bold', fontSize: 17}}>Bangalore</Text>
                </View>
                <View>
                    <Image source={require('../../assets/person.jpg')} style={style.image} />
                </View>
            </View>
            <ScrollView>
                <View style={style.searchBar}>
                    <View style={style.searchPanel}>
                        <Text>Search panel</Text>
                    </View>
                </View>
                <ListOptions />
                <CategoryContainer />
                <FlatList
                    contentContainerStyle={ {paddingLeft: 20, paddingVertical: 20}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={houses}
                    renderItem={({ item }) => <Card house={item} />}
                    ketExtractor={item=>item.id}
                />
            </ScrollView>            
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    searchBar: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    searchPanel: {
        height: 50,
        backgroundColor: COLORS.light,
        flex: 1,
        flexDirection: 'row',
    },
    listOptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    listCard: {
        height: 200,
        width: width / 2 - 30,
        elevation: 15,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },
    cardImage: {
        height: 150,
        width: '100%',
        borderRadius: 10,
    },
    categoryContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    category: {
        color: COLORS.grey,
        fontWeight: 'bold',
        fontSize: 15,
    },
    categorySelected: {
        color: COLORS.dark,
    },
    card: {
        height: 250,
        width: width - 40,
        paddingHorizontal: 20,
        elevation: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
    },
    cardImage: {
        height: 120,
        width: '100%',
        borderRadius: 10
    }
});

export default HomeScreen;