import { Input } from '@/components/input'
import { View, Image, StatusBar } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { colors } from '@/styles/colors'
import { Button } from '@/components/button'
import { Link } from 'expo-router'

export default function Home() {
    return (
        <View className="flex-1 bg-green-500 justify-center items-center">

            <StatusBar barStyle="light-content"  />

            <Image source={require("@/assets/logo.png")}
                className='h-16'
                resizeMode='contain'
            />
            <view className='w-full mt-12 gap-3'>
                <Input>
                    <MaterialCommunityIcons name='ticket-confirmation-outline'
                        size={20}
                        color={colors.green[200]}
                    />
                    <Input.Field placeholder='ticket code...' />
                </Input>
                <Button title='acess credentials' />
                <Link href="/#" className="text-gray-100 text-base font-bold text-center mt-8" />
            </view>
        </View>
    )
}