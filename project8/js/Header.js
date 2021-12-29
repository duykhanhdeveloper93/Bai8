
import React from "react"
import { Image, ImageBackground, View, Text } from "react-native"


const Header = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground  style={{ flex: 1, width: '100%', height: 180 }} source={require('../image/part1/imageBackGround1.png')} >
                <View style={{ flex: 2 }}>

                </View>
                <View style={{ flex: 3 }}>
                    <View style={{ flexDirection: 'row', flex: 1, marginHorizontal: 20 }}>
                        <View style={{ flex: 7 }}>
                            <Image resizeMode='contain' source={require('../image/part1/Left.png')}>
                            </Image>
                        </View>

                        <View style={{ flex: 3, justifyContent: 'space-between', flexDirection: 'row' }}>

                            <Image resizeMode='contain' source={require('../image/part1/pen.png')} />

                            <Image resizeMode='contain' source={require('../image/part1/category.png')} />

                            <Image resizeMode='contain' source={require('../image/part1/more.png')} />

                        </View>

                    </View>
                </View>
                <View style={{ flex: 5 }} />
                <Image resizeMode='contain' style={{ position: 'absolute', bottom: -60, right: 20 }} source={require('../image/part1/Dog2.png')} />

            </ImageBackground>


            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flex: 1 }}>
                    {/* Line 1 */}
                    <Text style={{ fontSize: 24, color: 'black', marginTop: 10, flex: 1 }}>Kate Winslet</Text>
                    {/* Line 2 */}
                    <View style={{ flexDirection: 'row', marginTop: 10, flex: 1 }}>
                        <View style={{ flexDirection: 'row', flex: 2 }}>
                            <Text style={{ fontSize: 16, color: 'black', marginRight: 5 }}>9868</Text>
                            <Text style={{ fontSize: 13, color: 'rgba(0, 0, 0, 0.4)', marginTop: 1 }}>Followers</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 2 }}>
                            <Text style={{ fontSize: 16, color: 'black', marginRight: 5 }}>9868</Text>
                            <Text style={{ fontSize: 13, color: 'rgba(0, 0, 0, 0.4)', marginTop: 1 }}>Following</Text>
                        </View>
                        <View style={{  flex: 3 }}></View>
                    </View>
                    {/* Line 3 */}
                    <Text style={{ fontSize: 13, color: 'rgba(0, 0, 0, 0.7)', flex: 1, marginTop: 10 }}>A dog is the only thing that loves you more than you love yourself.</Text>
                    {/* Line 4 */}
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 10 }}>
                        <Text style={{ fontSize: 13, color: 'black', flex: 4 }}>My pet</Text>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Image source={require('../image/part1/gaiIconWithDog.png')} />
                                <Image source={require('../image/part1/DogIconSmall.png')} />
                            </View>
                            <Image style={{ flex: 1 }} resizeMode='contain' source={require('../image/part1/addButton.png')} />

                        </View>
                    </View>
                    {/* Line 5 */}
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 10, borderBottomWidth: 0.3, borderColor: 'grey' }}>
                        <View style={{ flex: 4, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 16, color: '#FA6650' }}>Dynamic</Text>
                                <Image style={{ alignSelf: 'center', marginTop: 5, width: '30%' }} resizeMode='cover' source={require('../image/part1/headerIconOrange.png')} />
                            </View>
                            <Text style={{ flex: 1, fontSize: 16, color: 'black' }}>Answer</Text>
                            <Text style={{ flex: 1, fontSize: 16, color: 'black' }}>Article</Text>
                            <Text style={{ flex: 1, fontSize: 16, color: 'black' }}>Video</Text>
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>

                </View>
            </View>

        </View>
    )
}

export default Header