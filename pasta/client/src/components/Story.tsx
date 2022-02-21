import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Avatar } from 'react-native-elements';
import { FlatList, Dimensions } from 'react-native';
import { TStory } from '../types/index';

// Components
import PhotoViewerModal from './PhotoViwer';

export const Component: React.FC<TStory> = ({ images }) => {
    const [photoViewerConfig, setPhotoViewerConfig] = React.useState({ 
        selectedPhotoIndex: 1, 
        isShowed: false 
    });
    
    const onPressPhoto = (index: number) => setPhotoViewerConfig({ 
        selectedPhotoIndex: index, 
        isShowed: true 
    });

    return (
        <View style={styles.story}>
            <FlatList
                data={images}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => `topSearchItemKey${index}`}
                renderItem={({ item, i }: any) => (
                    <View style={styles.storyContainer}>
                        {(item.id === 0) ? (
                            <React.Fragment>
                                <View style={styles.addHistory}>
                                    <Avatar key={item.id}
                                        onPress={() => onPressPhoto(i)}
                                        size='medium'
                                        rounded
                                        avatarStyle={styles.addHistoryAvatar}
                                        source={{ uri: item.uri }}
                                    >
                                        <Avatar.Accessory 
                                            size={20} 
                                            style={{ 
                                                backgroundColor: '#0095f6', 
                                                borderWidth: 2, 
                                                borderColor: '#FFFF' 
                                            }}
                                            name="add"
                                        />
                                    </Avatar>
                                </View>
                                <Text style={{ fontSize: 12 }}>Seu story</Text>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <LinearGradient
                                    colors={['#CA1D7E', '#E35157', '#F2703F']}
                                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                                    style={styles.linearGradient}
                                >
                                    <Avatar key={item.id}
                                        onPress={() => onPressPhoto(i)}
                                        size='medium'
                                        rounded
                                        avatarStyle={styles.avatar}
                                        source={{ uri: item.uri }}
                                    />
                                </LinearGradient>
                                <Text style={{ fontSize: 12 }}>Seu story</Text>
                            </React.Fragment>
                        )}
                    </View>
                )}
            />
            <PhotoViewerModal
                imageNames={images.map( (item) => item.uri )}
                selectedImageIndex={photoViewerConfig.selectedPhotoIndex}
                visible={photoViewerConfig.isShowed}
                onSwipeDown={() => setPhotoViewerConfig({ 
                    ...photoViewerConfig, 
                    isShowed: false 
                })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    story: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        borderColor: 'black',
        height: 90,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#8080806b'
    },
    storyContainer: { 
        marginRight: 10, 
        display: 'flex', 
        alignItems: 'center',
        height: 100 + '%',
        width: 64
    },
    linearGradient: { 
        height: 56,
        width: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        borderRadius: 82 / 2,
        marginLeft: 2,
        marginRight: 10
    },
    avatar: { 
        width: 100 + '%', 
        height: 100 + '%', 
        borderRadius: 500, 
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#FFFF',
    },
    addHistory: {
        height: 56,
        width: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        borderRadius: 82 / 2,
        marginLeft: 2,
        marginRight: 10
    },
    addHistoryAvatar: {
        width: 100 + '%', 
        height: 100 + '%', 
        borderRadius: 500, 
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#FFFF',
    },
    touchableOpacity: { 
        display: 'flex', 
        flexDirection: 'row', 
        width: Dimensions.get('window').width, 
        height: 264 
    },
});

export default Component;