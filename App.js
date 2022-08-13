import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloinicial}>Aula de APP</Text>
		  <View style={styles.bloco}>
			  <Text style={styles.titulo}>Calculadora Simples</Text>
		  </View>
		  
		  <View style={styles.bloco}>
			  <Text>Valor 1:</Text>
			  <TextInput style={styles.input}/>
		  </View>
		  
		  <View style={styles.bloco}>
			  <Text>Valor 2:</Text>
			  <TextInput style={styles.input}/>
		  </View>
		  
		  <View style={styles.bloco2}>
			  <TouchableOpacity style={styles.botao}>
		    		<Text style={styles.textoBotao}>Somar</Text>
			  </TouchableOpacity>
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
	bloco:{
		marginTop: 20,
		width:'80%',
		marginLeft:'10%',
		
	},
	bloco2:{
		marginTop: 20,
		width:'80%',
		marginLeft:'10%',
		alignItems:'center',
	},
	titulo: {
		fontSize: 30,
		textAlign:'center'
	},
	input:{
		borderWidth:2,
		fontSize:20,
		borderRadius:20,
	},
	botao:{
		backgroundColor:'#008000',
		width: '28%',
		borderRadius:20
	},
	textoBotao:{
		color:'#fff',
		fontSize:20,
		textAlign:'center'
	},
	tituloinicial:{
		textAlign: 'center'
	}
});
