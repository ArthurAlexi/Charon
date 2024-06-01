import { Input } from '@/components/input'
import { View, Image, StatusBar, Alert } from 'react-native'
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons"
import { colors } from '@/styles/colors'

import { Link } from 'expo-router'
import { useState } from 'react'
import { Button } from '@/components/button'

export default function Register() {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")

    function handleRegister() {
        if (!userName.trim() || !email.trim) {
            return Alert.alert("Register", "Enter all fields.")
        }
    }

    return (
        <View className="flex-1 bg-green-500 justify-center items-center">

            <StatusBar barStyle="light-content" />

            <Image source={require("@/assets/logo.png")}
                className='h-16'
                resizeMode='contain'
            />
            <View className='w-full mt-12 gap-3 '>
                <Input>
                    <FontAwesome6 name='user-circle'
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Field placeholder='Complete name...' onChangeText={setUserName} />
                </Input>
                <Input>
                    <MaterialIcons name='alternate-email'
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Field placeholder='e-mail...' keyboardType='email-address' onChangeText={setEmail} />
                </Input>
                <Button title='Register' onPress={handleRegister} />
                <Link href="/" className="text-gray-100 text-base font-bold text-center mt-8">
                    Already have a ticket?
                </Link>
            </View>
        </View>
    )
}