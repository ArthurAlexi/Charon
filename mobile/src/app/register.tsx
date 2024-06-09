import { Input } from '@/components/input'
import { View, Image, StatusBar, Alert } from 'react-native'
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons"
import { colors } from '@/styles/colors'

import { Link, router } from 'expo-router'
import { useState } from 'react'
import { Button } from '@/components/button'
import { api } from '@/libs/api'
import axios from 'axios'

export default function Register() {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function handleRegister() {
        try{
            if (!userName.trim() || !email.trim) {
                return Alert.alert("Register", "Enter all fields.")
            }
            setIsLoading(true)
            const eventId = ""
            const result = await api.post(`/events/${eventId}/attendees`, {
                name: userName.trim(),
                email: email.trim(),
            })

            if(result.data.attendeeId){
                Alert.alert("register", "registration completed successfully",[
                    {text: "ok", onPress: ()=> router.push("/ticket")}
                ])
            }
            
        }catch(error){
            console.error(error)
            var errorMessage = "Unable to register"

            if(axios.isAxiosError(error)){
                if(String(error.response?.data?.message).includes("already registed")){
                    errorMessage = error.response?.data?.message
                }
            }

            Alert.alert("Register", "Unable to register")  
        }finally{
            setIsLoading(false)
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
                <Button title='Register' onPress={handleRegister} isLoading={isLoading} />
                <Link href="/" className="text-gray-100 text-base font-bold text-center mt-8">
                    Already have a ticket?
                </Link>
            </View>
        </View>
    )
}