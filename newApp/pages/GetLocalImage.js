import React from 'react';
import {Text,TouchableOpacity,Image,View,PermissionsAndroid,} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import SplashScreen from "react-native-splash-screen";



class GetImage extends React.Component{
    constructor(){
        super();
        this.state={
            imageUrl:''
        }
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
        this.requestCarmeraPermission = this.requestCarmeraPermission.bind(this);
    }
    async componentDidMount(){
       await this.requestCarmeraPermission();
    }
    async requestCarmeraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.show("你已获取了相机权限")
            } else {
                this.show("获取相机失败")
            }
        } catch (err) {
            this.show(err.toString())
        }
    }
    show(text){
        alert(text);
    }

     //选择图片
     selectPhotoTapped() {
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
                let source = {uri: response.uri};
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    imageUrl:source,
                    avatarSource: source
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
        return(
         <View>
             <TouchableOpacity onPress={this.selectPhotoTapped}>
                <Text>
                    获取图片
                </Text>
            </TouchableOpacity>
            <Image 
                source={{uri:this.state.imageUrl}}
                style={{width:200,height:200}}
            />
         </View>
        )
    }
}
 
export default GetImage;