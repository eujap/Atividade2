import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import numero

export default function Form(){
    return(
        <View>
            <View>
                <Text>Primeiro numero</Text>
                <TextInput
                    placeholder="Digite um numero inteiro"
                    keyboardType="numeric"
                />
                <Text>Ultimo numero</Text>
                <TextInput
                    placeholder="Digite um numero inteiro"
                    keyboardType="numeric"
                    />
                    <Button title="Sortear"/>
            </View>
            <View><numero</View>
            <View></View>
        </View>
    )
};