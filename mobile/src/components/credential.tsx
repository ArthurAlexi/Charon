import { Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { QRcode } from "./qrcode";
interface CredentialProps {
    imageUrl ?: string
    onChangeAvatar ?: () => void
    onShowQCode ?: () => void
}

export default function Credential({ imageUrl, onChangeAvatar, onShowQCode }: CredentialProps) {

    return (
        <View className="w-full self-stretch items-center">
            <Image
                source={require("@/assets/ticket/band.png")}
                className="w-24 h-52 z-10" />

            <View
                className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">

                <ImageBackground source={require("@/assets/ticket/header.png")}
                    className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden">

                    <View className="w-full flex-row justify-between items-center">
                        <Text className="text-zinc-50 text-md font-bold"> CHARON </Text>
                        <Text className="text-zinc-50 text-md font-bold"> 1232432 </Text>
                    </View>

                    <View className="w-40 h-40 bg-black rounded-full" />
                </ImageBackground>

                {
                    imageUrl ? (
                        <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
                            <Image source={{ uri: imageUrl }}
                                className="w-36 h-36 rounded-full -mt-24" />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={{ width: 36, height: 36, borderRadius: 9999, backgroundColor: colors.gray[300], justifyContent: "center", alignItems: "center" }}
                            activeOpacity={0.9} className="w-36 h-36 rounded-full -mt-24" onPress={onChangeAvatar}>
                            className="w-36 h-36 rounded-full -mt-24"
                        </TouchableOpacity>
                    )
                }




                <Text className="text-zinc-50 text-2xl font-bold mt-4" > Arthur Alexi </Text>
                <Text className="text-zinc-300 text-base font-regular mb-4" > arthuralexi@hotmail.com </Text>

                {/* <Image
                    source={require("@/assets/ticket/qrcode.png")}
                    className="w-32 h-32" /> */}
                <QRcode size={48} value="teste"  />

                <TouchableOpacity activeOpacity={0.7} onPress={onShowQCode}>
                    <Text className="text-orange-500 text-md font-body mt-6" > enlarge qrcode </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}