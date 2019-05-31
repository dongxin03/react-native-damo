import React from 'react';
import {Text,View,Button} from 'react-native';

class login extends React.Component{
    render(){
        const {navigation} = this.props;
        return(
         <View>
             <Text>登录页面</Text>
             <Button 
                title="登录"
                onPress={()=>{
                    navigation.navigate("App")
                }}
             />
         </View>
        )
    }
}
 
export default login;