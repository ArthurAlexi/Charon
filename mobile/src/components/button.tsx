import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Loading } from "./Loading";


interface ButtonProps extends TouchableOpacityProps {
    title: string
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...props }: ButtonProps) {
    return (
        <TouchableOpacity
            disabled={isLoading}
            activeOpacity={0.7}
            className="w-full h-14 bg-orange-500 justify-center items-center rounded-lg"
            {...props}>
            {isLoading ? <Loading /> :
                <Text className="text-green-500 uppercase text-base font-bold">
                    {title}
                </Text>
            }
        </TouchableOpacity>
    )
}