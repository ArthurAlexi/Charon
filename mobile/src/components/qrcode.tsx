import { colors } from '@/styles/colors'
import QRcodeSvg from 'react-native-qrcode-svg'

interface QRcodeProps{
    value: string
    size: number
}

export function QRcode({value, size} : QRcodeProps){
    return(
        <QRcodeSvg value={value} size={size}  color={colors.white} backgroundColor="transparent" />
    )
}