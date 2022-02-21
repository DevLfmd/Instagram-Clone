import React from 'react';
import { Portal } from 'react-native-portalize';
import { launchImageLibrary } from 'react-native-image-picker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { Divider, Button } from 'react-native-elements';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextInput from '../components/TextInput';
import { Modalize } from 'react-native-modalize';
import FullScreenModal from '../components/FullScreenModal';
import ImageViewer from "react-native-image-zoom-viewer";

type TProps = { modalizeRef: any; };

export function AddPost({ modalizeRef }: TProps) {
    const [imageToUpload, setImageToUpload] = React.useState<string>('');
    const [imageComment, setImageComment] = React.useState<string>('');
    const [showPreview, setShowPreview] = React.useState<boolean>(false);

    /*
    * Adicionar nova foto
    */
    const pickPhoto = async() => {
        await launchImageLibrary(
            {
                mediaType: 'photo',
                maxHeight: 600,
                maxWidth: 800
            }, (res) => {
                if(!res.didCancel) {
                    setShowPreview(true);
                    setImageToUpload(res.uri !== undefined? res.uri : '');
                }
            }
        )
    };

    /**
     * Evento para quando o usuário
     * cancelar o envio do post
     */
    const onSwipeDown = () => {
        setShowPreview(false);
        setImageComment('');
    };

    return (
        <>
            <Portal>
                <Modalize
                    ref={modalizeRef}
                    HeaderComponent={
                        <React.Fragment>
                            <View style={styles.header}>
                                <Text style={styles.headerTxt}>Criar novo</Text>
                            </View>
                            <Divider />
                        </React.Fragment>
                    }
                    withHandle={true}
                    handlePosition="inside"
                    modalHeight={0.50 * Number(Dimensions.get('screen').height)}
                >
                    <Button
                        icon={<FontAwesomeIcon style={styles.icon} name="table" size={25} />}
                        title="Publicação do feed"
                        type="clear"
                        buttonStyle={styles.button}
                        titleStyle={{ color: '#000' }}
                        iconPosition="left"
                        onPress={pickPhoto}
                    />
                    <Divider />
                    <Button
                        icon={<FontAwesomeIcon style={styles.icon} name="circle-notch" size={25} />}
                        title="Story"
                        type="clear"
                        buttonStyle={styles.button}
                        titleStyle={{ color: '#000' }}
                        iconPosition="left"
                        onPress={pickPhoto}
                    />
                    <Divider />
                </Modalize>
            </Portal>
            {imageToUpload !== '' ? (
                <FullScreenModal visible={showPreview}>
                    <View style={styles.previewTopButtonContainer}>
                        <TouchableOpacity onPress={() => setShowPreview(false)}>
                            <Text style={styles.topButton}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowPreview(false)}>
                            <Text style={styles.topButton}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                    <ImageViewer
                        enableSwipeDown
                        swipeDownThreshold={200}
                        onSwipeDown={onSwipeDown}
                        imageUrls={[{ url: imageToUpload }]}
                        footerContainerStyle={styles.footerContainerStyle}
                        backgroundColor="#000000"
                        index={0}
                    />
                    <TextInput 
                        value={imageComment} 
                        onChange={(value) => setImageComment(value)}
                        keyboardType="default"
                        placeholder="Digite um comentário para a imagem"
                    />
                </FullScreenModal>
            ) : (<></>)}
            
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 25
    },
    headerTxt: { fontWeight: 'bold', fontSize: 18 },
    button: {
        width: 100 + '%',
        padding: 12,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    icon: { marginRight: 10 },
    footerContainerStyle: {
        backgroundColor: "#000000AA",
        left: 0,
        right: 0,
        bottom: 0,
    },
    previewTopButtonContainer: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'black' },
    topButton: { 
        fontSize: 20, 
        padding: 10, 
        color: '#FFFF', 
        backgroundColor: 'black' 
    }
});
