import {View, Image} from 'react-native';

const logo = require('../../assets/Paid-logo.png');

export const Logo = () => {
  return (
    <View className='h-12 mb-2'>
        <Image source={logo}
            className="h-12 w-32"
        />
    </View>
  )
}
