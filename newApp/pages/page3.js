import React from 'react';
import {Text,View,TextInput,StyleSheet} from 'react-native';

class page3 extends React.Component{
    render(){
        const { navigation } = this.props;
        const { state, setParams} = navigation;
        const {params} = state;
        const showText = params&&params.mode == 'edit' ? '正在编辑' :'编辑完成';
        return(
         <View>
            <Text>
                这是首页page3
            </Text>
            <Text>
                {showText}
            </Text>
            <TextInput 
                style={styles.input}
                onChangeText={(text)=>{
                    setParams({
                        title:text
                    })
                }}
            />
         </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        height:50,
        borderWidth:1,
        marginTop:10,
        borderColor:'black'
    }
})
 
export default page3;