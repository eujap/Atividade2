import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";



export default function Form(){

const [num1, setNum1]= useState(null)
const [num2, setNum2]= useState(null)
const [mensagemNum, setMensagemNum]= useState("Preencha primeiro e uiltimo numero!")
const [numeroSorteado, setNumeroSorteado]= useState(null)
const [textButton, setTextButton ]= useState("Sortear")
const [erro, setErro] = useState("");

function NumeroAleatorioIntervalo(num1, num2){
    return Math.floor(Math.random() * (num2 - num1 +1)) + num1
}

function validacao(){
    if(num1 != null && num2 != null && num1 != num2){
        const novoNumeroSorteado = NumeroAleatorioIntervalo(parseInt(num1),parseInt(num2));  
        setNumeroSorteado(novoNumeroSorteado)           
        setMensagemNum("O Numero da Sorte é:")        
        setTextButton("Sortear Novamente? ")
        setNum1(null)
        setNum2(null)
        setErro(null)
        return
    }
    setNumeroSorteado(null)
    setTextButton("Sortear")
    setMensagemNum("Preencha primeiro e uiltimo numero!")
}


    return(
        <View>
            <View>
                <Text>Primeiro numero</Text>
                <TextInput
                    onChangeText={setNum1}
                    value={num1}
                    placeholder="Digite um numero inteiro"
                    keyboardType="numeric"
                />
                <Text>Ultimo numero</Text>
                <TextInput
                    onChangeText={setNum2}
                    value={num2}
                    placeholder="Digite um numero inteiro"
                    keyboardType="numeric"
                    />
                    <Button onPress={() =>{
                        if (num1 !== null && num2 !== null) {
                            validacao();
        } else {
            setErro("Campos não preenchidos");
        }
                    } } 
                    title={textButton} />
            </View>
            <View>{numeroSorteado !== null ? (
          <Text>{mensagemNum} {numeroSorteado}</Text>
        ) : (
          <Text>{mensagemNum}</Text> )}</View>
          <View>
    <Text>{erro}</Text>
</View>

        </View>
    )
};