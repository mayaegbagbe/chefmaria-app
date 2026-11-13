import { Stack } from "expo-router";
import { Image, View } from "react-native";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" 
    options={{headerTitle : 'Chef Maria Resturant',
      headerTitleAlign : 'center',
      headerLeft : () =>(
        <Image source ={{ uri : "https://th.bing.com/th/id/OIP.CaLwRyiQqf9hwDtiJjNrZQHaHa?w=182&h=182&c=7&r=0&o=7&dpr=2.5&pid=1.7&rm=3"}}
        style={{ width: 50, height: 40, marginLeft: 10, borderRadius:30 }}
        resizeMode="contain">
        </Image>),
      headerRight : () =><View style={{width: 30, marginRight: 10}}></View>,
      
    }}>  
    </Stack.Screen>
      <Stack.Screen name="Customerprofile" options={{title:"Customer Profile Entry", headerTitleAlign : 'center',
      headerLeft : () =>(
        <Image source ={{ uri : "https://th.bing.com/th/id/OIP.CaLwRyiQqf9hwDtiJjNrZQHaHa?w=182&h=182&c=7&r=0&o=7&dpr=2.5&pid=1.7&rm=3"}}
        style={{ width: 50, height: 40, marginLeft: 10, borderRadius:30 }}
        resizeMode="contain">
        </Image>),
      headerRight : () =><View style={{width: 30, marginRight: 10}}></View>,
      
    }}>  
    </Stack.Screen>
      <Stack.Screen name ='order' options={{title:"Order Page", headerTitleAlign : 'center',
      headerLeft : () =>(
        <Image source ={{ uri : "https://th.bing.com/th/id/OIP.CaLwRyiQqf9hwDtiJjNrZQHaHa?w=182&h=182&c=7&r=0&o=7&dpr=2.5&pid=1.7&rm=3"}}
        style={{ width: 50, height: 40, marginLeft: 10, borderRadius:30 }}
        resizeMode="contain">
        </Image>),
      headerRight : () =><View style={{width: 30, marginRight: 10}}></View>,
      
    }}>  
    </Stack.Screen>
    </Stack>
  );
}