import { Input } from '@/components/input'
import { View, Image, StatusBar, Alert } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { colors } from '@/styles/colors'
import { Button } from '@/components/button'
import { Link, Redirect, router } from 'expo-router'
import { useState } from 'react'

export default function Home() {

    const [code, setCode] = useState("")

    function handleAcessCredential() {
        // console.warn(code)
        if (!code.trim()) {
            return Alert.alert("Ticket", "Code is empity.")
        }

        router.push("/ticket")

    }

    return (
        <View className="flex-1 bg-green-500 justify-center items-center">

            <StatusBar barStyle="light-content" />

            <Image source={require("@/assets/logo.png")}
                className='h-16'
                resizeMode='contain'
            />
            <View className='w-full mt-12 gap-3 px-10'>
                <Input>
                    <MaterialCommunityIcons name='ticket-confirmation-outline'
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Field
                        onChangeText={setCode}
                        placeholder='ticket code...' />
                </Input>
                <Button title='acess credentials' onPress={handleAcessCredential} />
                <Link href="/register" className="text-gray-100 text-base font-bold text-center mt-8" >
                    Don't have a ticket yet?
                </Link>
            </View>
        </View>
    )
}