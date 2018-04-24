import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    InteractionManager,
    Image,
    Button,
    ScrollView,
    Dimensions,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';
import { ImagePicker } from 'expo';

export default class Profile extends React.Component {

    state = {
        image: null,
    };

    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            marginTop: Expo.Constants.statusBarHeight
        }
    }

    static window = Dimensions.get('window');


    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }

    componentDidMount() {
        this.setThisState();
        // this._showImages();
    }


    async setThisState() {
        await AsyncStorage.getItem('username')
            .then((username) => {
                this.setState({ "username": username });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        let { image } = this.state;

        this.items = this._getImages();


        return (

            <View style={styles.wrapper}>

                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('./images/LL.png')}
                    />
                    <Text style={styles.headerText}>LifeLiner</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{this.state.username}s Profile</Text>



                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this._takePhoto}
                    >
                        <Text style={styles.text}>Take a photo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this._pickImage}
                    >
                        <Text style={styles.text}>Pick an image to upload</Text>
                    </TouchableOpacity>

                    {image &&
                        <Image source={{ uri: image }} style={{ width: 250, height: 200 }} />}

                  


                </View>

                <ScrollView style={styles.scrollContainer}>
                    <Text style={styles.titleImages}>Saved Images</Text>

                    <View style={styles.savedList}>

                        {
                        this.items.map((item, key) =>
                            (
                                    <Image source={{
                                uri: item
                            }} style={styles.savedListItem} />
                            ))
                    }
                    </View>

                    

                </ScrollView>
            </View>

        );
    }

    _showImages = async () => {

        return (
            <View>
                <Image source={{
                    uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Freact-test-2ce06195-95e0-4257-a32e-8d0289e97c71/ImagePicker/ce2845d3-c348-43a5-b491-51f70d846064.jpg"
                }} style={styles.savedListItem} />
            </View>
        )
    }

    _takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        // console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
            this._saveImage();
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        // console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
            this._saveImage();
        }
    }

    _saveImage = async () => {

        var users = require('../../users.json');

        for (var i = 0; i < users.length; i++) {
            if (users[i].username === this.state.username) {

                console.log("This is the logged in user: " + users[i].username)
                var exists = false;

                for (let picture of users[i].pictures) {
                    if (picture.uri === this.image) {
                        exists = true;
                        console.log(picture.uri);
                    }
                }

                if (exists === false) {
                    console.log("IMAGE THAT WANTS TO BE ADDED:")
                    console.log(this.image)

                    var jsonPush = new Object();
                    jsonPush = `{"uri": "${this.image}"}`;
                    users[i].pictures.push(jsonPush);
                    console.log(jsonPush);

                    // var fs = require("fs");
                    // fs.writeFile("../../users.json", JSON.stringify(jsonPush, null, 4), (err => {
                    //     if(err){
                    //         console.error(err);
                    //         return;
                    //     }
                    // // FUNGERAR EJ, KAN INTE IMPORTERA NODE.JS STANDARD LIBRARY.
                    // }))
                    console.log("Uploaded to array");
                    console.log(users[i].pictures);

                    console.log("\n\n LOOP OF IMAGES FROM ONE USER:")

                    for (let image of users[i].pictures) {
                        console.log(image);
                    }
                    break;
                }
            }
        }
    }

    _getImages = () => {

        var users = require('../../users.json');

        var images = [];

        for (var i = 0; i < users.length; i++) {
            if (users[i].username === this.state.username) {
                console.log("Hello Mr." + users[i].username + ", here are your images:");

                for (let image of users[i].pictures) {
                    console.log(image.uri);
                    images.push(image.uri);
                }
            }
        }

        return images;
    }
}





const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#74b9ff',
        alignItems: "center",
        paddingLeft: 40,
        paddingRight: 40,
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: '#74b9ff',
        marginTop: -180,
    },
    headerContainer: {
        marginTop: Expo.Constants.statusBarHeight,
        backgroundColor: "#0984e3",
        flexDirection: 'row',
        padding: 5,
    },
    text: {
        color: '#fff',
    },
    logo: {
        width: 25,
        height: 25,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 25,
    },
    titleImages: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center',
    },
    header: {
        backgroundColor: "#0984e3",
        marginTop: Expo.Constants.statusBarHeight,
        flexDirection: 'row',
        padding: 3,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
    },

    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#0984e3',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    savedList: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    savedListItem: {
        margin: 5,
        width: Dimensions.get('window').width / 2.2,
        height: Dimensions.get('window').width / 2.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    separator:
        {
            height: 2,
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
        },
});