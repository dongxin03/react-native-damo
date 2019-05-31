import {
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation';
import React from 'react';
import {Button,Platform} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons'; 
import HomePage from '../pages/HomePage';
import page1 from '../pages/page1';
import page2 from '../pages/page2';
import page3 from '../pages/page3';
import Login from '../pages/Login';
import GetLocalImage from '../pages/GetLocalImage';

const AppStack = createStackNavigator({
    Home:{
        screen:HomePage
    },
    page1:{
        screen:page1
    }
});

const AuthStack = createStackNavigator({
    login:{
        screen:GetLocalImage
    }
},{
    navigationOptions:{

    }
});

const DrawerNavigator = createDrawerNavigator({ // 侧划
    page1:{
        screen:page1,
        navigationOptions:{
            tabBarLabel:"all"
        }
    },
    page2:{
        screen:page2,
        navigationOptions:{
            tabBarLabel:"ios"
        }
    },
})

const AppTopNavigator = createMaterialTopTabNavigator({
    page1:{
        screen:page1,
        navigationOptions:{
            tabBarLabel:"all"
        }
    },
    page2:{
        screen:page2,
        navigationOptions:{
            tabBarLabel:"ios"
        }
    },
    page3:{
        screen:page3,
        navigationOptions:{
            tabBarLabel:"aod"
        }
    }
},{
    tabBarOptions:{
        tabStyle:{mindWidth:50},
        upperCaseLabel:false,
        scrollEnabled:true,
        style:{
            backgroundColor:"#678",
        },
        indicatorStyle:{
            height:2,
            backgroundColor:"white"
        },
        labelStyle:{
            fontSize:13,
            marginTop:6,
            marginBottom:6
        }
    }
}
);
const AppBottomNavigator = createBottomTabNavigator({
    page1:{
        screen:page1,
        navigationOptions:{
            tabBarLabel:"最热",
            tabBarIcon:({tintColor,focused})=>(
                <IonIcons
                    name="ios-chatboxes"
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    page2:{
        screen:page2,
        navigationOptions:{
            tabBarLabel:"流行",
            tabBarIcon:({tintColor,focused})=>(
                <IonIcons
                    name="ios-at"
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    page3:{
        screen:page3,
        navigationOptions:{
            tabBarLabel:"跳转",
            tabBarIcon:({tintColor,focused})=>(
                <IonIcons
                    name="ios-alert"
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    }
},{
    tabBarOptions:{
        activeBackgroundColor: Platform.OS == 'ios' ? '#e91e63' : '#fff'
    }
}); 

const AppStackNavigator = createStackNavigator({
    page1:{
        screen:page1,
        navigationOptions:({navigation})=>({
        })
    },
    HomePage:{
        screen:HomePage
    },
    page2:{
        screen:page2,
        navigationOptions:({navigation})=>({ // 静态配置
            title:`page2`
        })
    },
    page3:{
        screen:page3,
        navigationOptions:(props)=>{
            const {navigation} = props;
            const { state, setParams } = navigation;
            const { params } = state;
            return{
                title: params.title ? params.title : 'page3',
                headerRight:(
                    <Button 
                        title={params.mode == 'edit' ? '保存' : '编辑'}
                        onPress={()=>setParams({
                            mode:params.mode == 'edit' ? '' : 'edit'
                        })}
                    />
                )
            }
        }
    },
    Top:{
        screen:AppTopNavigator,
        navigationOptions:({navigation})=>({ // 静态配置
            title:`Top`
        })
    },
    Bottom:{
        screen:AppBottomNavigator,
        navigationOptions:({navigation})=>({ // 静态配置
            title:`Bottom`
        })
    },
    Drawer:{
        screen:DrawerNavigator,
        navigationOptions:({navigation})=>({ // 静态配置
            title:`drawer`
    })
    }
});

export default createSwitchNavigator({
    Auth:AuthStack,
    App:AppStackNavigator
},{
    initialRouteName:'Auth'
})

// export default AppStackNavigator;