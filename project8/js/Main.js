import React from "react"
import { Image, ImageBackground, View, Text, FlatList } from "react-native"
import Header from './Header'

const array = [
    { image: require('../image/part1/gaiIconWithDog.png'), name: 'Kate Winslet', number: 180, title: "Isn't five-month-old Teddy cute? 😏 😏", timeOnline: 't1', imageContent: require('../image/partOfFlatList/arrayImage1.png') },
    { image: require('../image/part1/gaiIconWithDog.png'), name: 'Kate Winslet', number: 186, title: "It's a joy to work with dogs. Life is great.", timeOnline: 't1', imageContent: require('../image/partOfFlatList/flatListImageContain2.png') },
    { image: require('../image/part1/gaiIconWithDog.png'), name: 'Kate Winslet', number: 186, title: "Does your dog bite?", timeOnline: 't1', imageContent: require('../image/partOfFlatList/arrayImage1.png') },
    { image: require('../image/part1/gaiIconWithDog.png'), name: 'Kate Winslet', number: 186, title: "Does your dog bite?", timeOnline: 't1', imageContent: require('../image/partOfFlatList/flatListImageContain2.png') },
    { image: require('../image/part1/gaiIconWithDog.png'), name: 'Angela', number: 186, title: "Does your dog bite?", timeOnline: 't1', imageContent: require('../image/partOfFlatList/arrayImage1.png') },
    { image: require('../image/part1/gaiIconWithDog.png'), name: 'Tim Noyes', number: 186, title: "Does your dog bite?", timeOnline: 't1', imageContent: require('../image/partOfFlatList/flatListImageContain2.png') },
    { image: require('../image/part1/gaiIconWithDog.png'), name: 'Christine', number: 686, title: "Does your dog bite?", imageContent: require('../image/partOfFlatList/arrayImage1.png') }]




const Main = () => {
    const headerComponent = () => {
        return (
            <Header />
        )
    }

    const renderItem1 = ({ item, index }) => {
        return (
            <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image resizeMode='contain' style={{}} source={item.image} />
                    <View style={{ marginLeft: 8 }}>
                        <Text style={{ fontSize: 16, color: 'black', marginRight: 5 }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.4)' }}>Followers</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.7)' }}>{item.title}</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Image source={item.imageContent} style={{ width: '100%' }}></Image>
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row', marginLeft: 0 }}>
                        <Image style={{}} resizeMode='contain' source={require('../image/part3/Share.png')} />
                        <Text style={{marginLeft: 2}}>100</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image style={{}} resizeMode='contain' source={require('../image/part3/Share.png')} />
                        <Text style={{marginLeft: 2}}>200</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image style={{}} resizeMode='contain' source={require('../image/part3/Share.png')} />
                        <Text style={{marginLeft: 2}}>300</Text>
                    </View>
                    <View style={{ flex: 3, flexDirection: 'row', justifyContent:'flex-end'}}>
                        <Image style={{}} resizeMode='contain' source={require('../image/part3/Share.png')} />
                    </View>
                </View>

            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ height: '80%' }}
                showsHorizontalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={headerComponent}
                data={array}
                renderItem={renderItem1} >

            </FlatList>
        </View>

    )

}

export default Main