import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Dimensions,
    Platform,
    KeyboardAvoidingView
} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import Emoji from 'react-native-emoji';
import Icon from 'react-native-vector-icons/Ionicons';

import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Modalize } from 'react-native-modalize';
import { Host, Portal } from 'react-native-portalize';

type TProps = {};

const Component: React.FC<TProps> = () => {
    const modalizeRef = React.useRef<Modalize>(null);
    const [comment, setComment] = React.useState<string>('');

    const addComment = () => {

    };


    const onAddComment = () => {
      modalizeRef.current?.open();
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Portal>
                <Modalize 
                    ref={modalizeRef}
                    HeaderComponent={
                        <View style={{ 
                            width: 100 + '%', 
                            height: 50,
                            backgroundColor: 'white',
                            borderBottomWidth: 1,
                            borderBottomColor: '#80808091',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Emoji name=":heart:" style={{ fontSize: 30 }} />
                            <Emoji name=":raised_hands:" style={{ fontSize: 30 }} />
                            <Emoji name=":fire:" style={{ fontSize: 30 }} />
                            <Emoji name=":clap:" style={{ fontSize: 30 }} />
                            <Emoji name=":cry:" style={{ fontSize: 30 }} />
                            <Emoji name=":heart_eyes:" style={{ fontSize: 30 }} />
                            <Emoji name=":open_mouth:" style={{ fontSize: 30 }} />
                            <Emoji name=":joy:" style={{ fontSize: 30 }} />
                            <Text>{String.fromCodePoint(10084)}</Text>
                        </View>
                    }
                    scrollViewProps={{ showsVerticalScrollIndicator: false }}
                    withHandle={false}
                    modalHeight={0.15 * Number(Dimensions.get('screen').height)}
                >                    
                    <View style={styles.commentArea}>
                        <View style={styles.commentContainer}> 
                            <Avatar 
                                onPress={() => null}
                                size='small'
                                rounded
                                avatarStyle={styles.avatar}
                                source={{ uri: 'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1' }}
                            />
                            <TextInput 
                                placeholder="Pode comentar ..."
                                style={styles.input}
                                keyboardType="default"
                                autoFocus={true}
                                value={comment}
                                onChangeText={(comment: string) => setComment(comment)}
                                onSubmitEditing={addComment}
                            />    
                        </View>
                        <TouchableWithoutFeedback onPress={() => null}>
                            <Button 
                                title="Publicar"
                                disabled={comment.length === 0 ? true : false}
                                disabledTitleStyle={{ color: '#b1defc'}}
                                onPress={() => null}
                                type="clear"
                            />
                        </TouchableWithoutFeedback>
                    </View>
                </Modalize>
            </Portal>
            <TouchableWithoutFeedback onPress={onAddComment}>
                <View style={styles.commentIconContainer}>
                    <View style={styles.commentContainer}> 
                        <Avatar 
                            onPress={() => null}
                            size='small'
                            rounded
                            avatarStyle={styles.avatar}
                            source={{ uri: 'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1' }}
                        />
                        <Text style={styles.caption}> Adicione um comentário... </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Emoji name=":heart:" style={{ fontSize: 16 }} />
                        <Emoji name=":raised_hands:" style={{ fontSize: 16 }} />
                        <Icon name="add-circle-outline" size={16} color="#80808091" style={{ marginLeft: 4 }} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 4
    },
    commentArea: { 
        height: 50, 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    commentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 4
    },
    commentIconContainer: { 
        display: 'flex' , 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    caption: {
        marginLeft: 10,
        fontSize: 16,
        color: '#80808091'
    },
    avatar: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#99939338'
    },
    input: {
        width: 90 + '%'
    },
    iconContainer: { 
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'center'
    }
});

export default Component;