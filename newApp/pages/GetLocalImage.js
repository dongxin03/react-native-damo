import React from 'react';
import {Text,TouchableOpacity,Image,View,PermissionsAndroid,Platform} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import SplashScreen from "react-native-splash-screen";



class GetImage extends React.Component{
    constructor(){
        super();
        this.state={
            imageUrl:'',
            imageWidth:0,
            imageHeight:0
        }
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

     //选择图片
     selectPhotoTapped() {


        // if(Platform.OS === 'android'){
        //     PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
        //         .then(res => {
        //             console.log('res================================');
        //             console.log(res);
        //             console.log('====================================');
        //             if(res !== 'granted') {
        //                 alert('相机权限没打开', '请在手机的“设置”选项中,允许访问您的摄像头和麦克风')
        //                 return ;
        //             }
        //         });
        // } else {
        //     if(Camera){
        //         Camera.checkDeviceAuthorizationStatus()
        //             .then(access => {
        //                 if(!access) {
        //                     alert('相机权限没打开', '请在iPhone的“设置-隐私”选项中,允许访问您的摄像头和麦克风')
        //                 }
        //             });
        //     }
        // }

         console.log('====================================');
         console.log('huoqu');
         console.log('====================================');
        const options = {
            title: '选择图片',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8,
            angle: 0,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true
            }
        };
        SplashScreen.hide();

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = {uri: 'data:image/jpeg;base64,'  + response.data};
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    imageUrl:source,
                    avatarSource: source,
                    imageWidth:response.width,
                    imageHeight:response.height
                },()=>{
                    console.log('=========imageUrl==================');
                    console.log(this.state.imageUrl);
                    console.log('====================================');
                });
            }
        });
    }
    getImage(){

    }
    render(){
        const {imageWidth,imageHeight} = this.state;
        return(
         <View>
             <TouchableOpacity onPress={this.selectPhotoTapped}>
                <Text>
                    获取图片
                </Text>
            </TouchableOpacity>
            <Image 
                source={this.state.imageUrl}
                style={{width:imageWidth,height:imageHeight}}
            />
         </View>
        )
    }
}
 
export default GetImage;