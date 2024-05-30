import { Input } from '@/components/input'
import { View, Image, StatusBar } from 'react-native'
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons"
import { colors } from '@/styles/colors'
import { Button } from '@/components/button'
import { Link } from 'expo-router'

export default function Register() {
    return (
        <View className="flex-1 bg-green-500 justify-center items-center">

            <StatusBar barStyle="light-content"  />

            <Image source={require("@/assets/logo.png")}
                className='h-16'
                resizeMode='contain'
            />
            <view className='w-full mt-12 gap-3'>
                <Input>
                    <FontAwesome6 name='user-circle'
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Field placeholder='Complete name...' />
                </Input>
                <Input>
                    <MaterialIcons name='alternate-email'
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Field placeholder='e-mail...'  keyboardType='email-address'/>
                </Input>
                <Button title='Register' />
                <Link href="/" className="text-gray-100 text-base font-bold text-center mt-8">
                    Already have a ticket?
                </Link>
            </view>
        </View>
    )
}