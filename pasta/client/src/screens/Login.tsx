import React from 'react';
import { useForm,  } from 'react-hook-form';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  Pressable, 
  Dimensions
} from 'react-native';
import Input from '../components/Input';
import Picker from '../components/Picker';

export function Login() {
  const { 
    register, 
    handleSubmit, 
    control,
    formState: { errors } 
  } = useForm();

  /**
   * Login
   * @param data 
   */
  const onSubmit = (data: any) => console.warn(data);

  return (
    <View style={styles.container}>
      <View style={styles.langContainer}>

        <Picker 
          name="language"
          control={control}
        />
      </View>
      <View style={styles.fieldsContainer}>
        <Image source={require('../assets/imgs/icon.png')} style={styles.image} />
        
        <Input 
          control={control} 
          name="login" 
          placeholder="Número de telefone, email ou nome de usuário"
        />
        
        <Input 
          control={control} 
          name="password"
          placeholder="Senha"
        />
        
        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonTitle}>Entrar</Text>
        </Pressable>
        <Pressable onPress={() => null}>
          <Text style={styles.grayText}>
            Esqueceu seus dados de login? 
            <Text style={styles.textBold}>
              {` Obtenha ajuda para entrar`}
            </Text>.
          </Text>
        </Pressable>
      </View>
      <View style={styles.dontHasAccountContainer}>
        <Pressable onPress={() => null}>
          <Text style={styles.grayText}>Não tem uma conta ? 
            <Text style={styles.textBold}>{` Cadastre-se`}</Text>.
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  fieldsContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 0.80 * Dimensions.get('window').width
  },
  dontHasAccountContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: 'gray',
    borderTopWidth: 1,
    width: Dimensions.get('window').width,
    height: 45,
    justifyContent: 'center',
  },
  langContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  image: {
    width: 200,
    height: 58,
    marginBottom: 20,
    backgroundColor: 'transparent'
  },
  buttonTitle: {
    color: '#FFF',
    fontFamily: 'Montserrat'
  },
  grayText: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    textAlign: 'center',
    color: '#888b8e',
    fontWeight: '900',
    marginTop: 10
  },
  textBold: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#032c55'
  },
  button: {
    width: 100 + '%',
    height: 40,
    backgroundColor: '#b2dffc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
});