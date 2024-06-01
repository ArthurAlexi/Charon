import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Loading } from "./Loading";
import { colors } from "@/styles/colors";


interface ButtonProps extends TouchableOpacityProps {
    title: string
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...props }: ButtonProps) {
    return (
        <TouchableOpacity
            disabled={isLoading}
            activeOpacity={0.7}
            style= {{ backgroundColor: colors.orange[500], width: "100%", height: 56 , justifyContent: "center", alignItems: "center", borderRadius: 8  }}
            className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg"
            {...props}>
            {isLoading ? <Loading /> :
                <Text className="text-green-500 uppercase text-base font-bold">
                    {title}
                </Text>
            }
        </TouchableOpacity>
    
    )
}