import React, { Component, useState }  from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';


function App(){

  const [img,setImage]= useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('Quer saber qual é a sua sorte? ') 
  let frases = [
    "A vida é uma jornada, não um destino. — Ralph Waldo Emerson",
    "O que você planta agora, colherá mais tarde. — Og Mandino",
    "A verdadeira felicidade está na própria casa, entre as alegrias da família. — Léon Tolstói",
    "A melhor maneira de prever o futuro é criá-lo. — Peter Drucker",
    "A alegria está na jornada, não no destino. — Anônimo",
    "A mente é tudo. O que você pensa, você se torna. — Buda",
    "A sabedoria começa na admiração. — Sócrates",
    "A persistência é o caminho do êxito. — Charles Chaplin",
    "A simplicidade é a sofisticação máxima. — Leonardo da Vinci",
    "A gratidão transforma o que temos em suficiente. — Anônimo",
  ];

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setTextoFrase(frases[numeroAleatorio])
    setImage(require('./src/biscoitoAberto.png'))

  };

  function reiniciarBiscoito(){
    
    setTextoFrase('Bem-vindo ao Biscoito da Sorte. Abra-o para ganhar conhecimento')
    setImage(require('./src/biscoito.png'))
  }

  return(
    <View style={styles.container}>
      <Image source={img} style={styles.imagem}/>
      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
        <View style={styles.btnArea}>
          <Text style={[styles.textoBotao, {color: 'black'}]} >Abrir biscoito!</Text>     
        </View>  
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {borderColor: 'black'}, { margin: 15 } ]}onPress={ reiniciarBiscoito }>
        <View style={[styles.btnArea ]}>
          <Text style={[styles.textoBotao, {color: 'black'}]} >Fechar biscoito!</Text>     
        </View>  
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    alignItems: 'center',
    height:230,
    width: 230,
  },
  textoFrase:{
    fontSize: 23,
    color: 'orange',
    margin: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  botao:{
    width:230,
    height: 50,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius:27,
  },

  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao:{
    color:'orange',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
})
export default App;