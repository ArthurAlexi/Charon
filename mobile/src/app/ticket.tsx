import Credential from "@/components/credential";
import Header from "@/components/header";
import { View, StatusBar, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker"

export default function Ticket() {

    const [imageUrl, setImageUrl] = useState("https://github.com/arthuralexi.png")

    async function handleChangeAvatar(){
        try{
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4,4],
            })

            if(result.assets){ 
                setImageUrl(result.assets[0].uri)
             }

        }catch(error){
            console.log(error)
            Alert.alert("Photo", "Unable to select image.")
            
        }
    }

    return (
        <View className="flex-1 bg-green-500">
            <StatusBar barStyle="light-content" />

            <Header title="My Ticket" />

            <ScrollView
                className="-mt-20 -z-10"
                contentContainerClassName="px-8 pb-4"
                showsVerticalScrollIndicator={false}
            >
                <Credential imageUrl={imageUrl} onChangeAvatar={handleChangeAvatar}/>

                <FontAwesome
                    name="angle-double-down"
                    size={24}
                    color={colors.gray[300]}
                    className="self-center my-6" />


                <Button title=" Share Credential" />

            </ScrollView>
        </View>
    )
}