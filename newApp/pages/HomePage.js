import React from 'react';
import {View,Text, Button} from 'react-native';

class page1 extends React.Component{
    static navigationOptions = {
        title:"home",
        headerBackTitle:"返回home"
    }
    render(){
        const {navigation} = this.props;
        return(
         <View 
            
        >
             <Text>page1</Text>
             <Button
                title='返回'
                onPress={()=>{
                    navigation.goBack();
                }}
             />
             <Button
                title='跳转到page1'
                onPress={()=>{
                    navigation.navigate('page1');
                }}
             />
             <Button
                title='跳转到page2'
                onPress={()=>{
                    navigation.navigate('page2');
                }}
             />
             <Button
                title='跳转到page3'
                onPress={()=>{
                    navigation.navigate('page3',{Devio:"0"});
                }}
             />
             <Button
                title='buttom'
                onPress={()=>{
                    navigation.navigate('Bottom',{Devio:"0"});
                }}
             />
             <Button
                title='top'
                onPress={()=>{
                    navigation.navigate('Top',{Devio:"0"});
                }}
             />
             <Button
                title='Drawer'
                onPress={()=>{
                    navigation.navigate('Drawer',{Devio:"0"});
                }}
             />
         </View>
        )
    }
}
 
export default page1;