import Credential from "@/components/credential";
import Header from "@/components/header";
import { View, StatusBar, Text, ScrollView, Alert, Modal, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker"
import { QRcode } from "@/components/qrcode";

export default function Ticket() {

    const [imageUrl, setImageUrl] = useState("https://github.com/arthuralexi.png")
    const [expandQRCode, setExpandQRCode] = useState(false)

    async function handleChangeAvatar() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
            })

            if (result.assets) {
                setImageUrl(result.assets[0].uri)
            }

        } catch (error) {
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
                <Credential
                    imageUrl={imageUrl}
                    onChangeAvatar={handleChangeAvatar}
                    onShowQCode={() => setExpandQRCode(true)} />

                <FontAwesome
                    name="angle-double-down"
                    size={24}
                    color={colors.gray[300]}
                    className="self-center my-6" />


                <Button title=" Share Credential" />

            </ScrollView>

            <Modal visible={expandQRCode} statusBarTranslucent animationType="slide">
                <View className="flex-1 bg-green-500 items-center justify-center">
                    <QRcode size={280} value="teste" />
                    <TouchableOpacity onPress={() => { setExpandQRCode(false) }}>
                        <Text className="text-orange-500 text-xl font-body text-center mt-10">Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}