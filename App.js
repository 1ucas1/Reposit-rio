import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	const [valor1, setValor1] = useState("20");
	const [valor2, setValor2] = useState("3");
	const[ resultado, setResultado]= useState();	
	function somar(){
		let r = parseFloat(valor1) + parseFloat(valor2);
		setResultado(r);
	}
	
	function multiplicar(){
		let r = parseFloat(valor1) * parseFloat(valor2);
		setResultado(r);
	}
	
	function subtrair(){
		let r = parseFloat(valor1) - parseFloat(valor2);
		setResultado(r);
	}
	
	function dividir(){
		let r = parseFloat(valor1) / parseFloat(valor2);
		setResultado(r);
	}
	
	function esponeciacao(){
		let r = Math.pow(parseFloat(valor1), parseFloat(valor2));
		setResultado(r);
	}

  return (
    <View style={styles.container}>
      <Text style={styles.tituloinicial}>Aula de APP</Text>
		  <View style={styles.bloco}>
			  <Text style={styles.titulo}>Calculadora Simples</Text>
		  </View>
		  
		  <View style={styles.bloco}>
			  <Text>VALOR 1: </Text>
			  <TextInput 
			  style={styles.input}
			  value={valor1}
			  onChangeText={(valor) => setValor1(valor)}
			  keyboardType="numeric"
			  />
		  </View>
		  
		  <View style={styles.bloco}>
			  <Text>VALOR 2: </Text>
			  <TextInput 
			    style={styles.input}
			    value={valor2}
			    onChangeText={(valor) => setValor2(valor)}
			    keyboardType="numeric"
			  />
		  </View>
		  
		  <View style={styles.bloco2}>
			    <TouchableOpacity 
				style={styles.botao}
				onPress={somar}
				>
		    		<Text style={styles.textoBotao}>SOMAR</Text>
			    </TouchableOpacity>
		  </View>
		  
		  <View style={styles.bloco2}>
			    <TouchableOpacity 
				style={styles.botao}
				onPress={multiplicar}
				>
		    		<Text style={styles.textoBotao}>MULTIPLICAÇÃO</Text>
			    </TouchableOpacity>
		  </View>
		  
		  <View style={styles.bloco2}>
			    <TouchableOpacity 
				style={styles.botao}
				onPress={dividir}
				>
		    		<Text style={styles.textoBotao}>DIVIDIR</Text>
			    </TouchableOpacity>
		  </View>
		  
		  <View style={styles.bloco2}>
			    <TouchableOpacity 
				style={styles.botao}
				onPress={subtrair}
				>
		    		<Text style={styles.textoBotao}>SUBTRAÇÃO</Text>
			    </TouchableOpacity>
		  </View>
		  
		  <View style={styles.bloco2}>
			    <TouchableOpacity 
				style={styles.botao}
				onPress={esponeciacao}
				>
		    		<Text style={styles.textoBotao}>ESPONENCIAÇÃO</Text>
			    </TouchableOpacity>
		  </View>
		  
		  <View style={styles.bloco}>
				<Text style={styles.titulo}>
					Resultado: {resultado}
				</Text>
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
		marginTop: 18,
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
		borderRadius:10,
		textAlign: 'center'
	},
	botao:{
		backgroundColor:'#008000',
		width: '28%',
		borderRadius:5
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