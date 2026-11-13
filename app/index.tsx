import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style = {styles.container}>
      <Text style={styles.title}>Welcome to Chef Maria's Restaurant</Text>
      <Link href={"/Customerprofile"} asChild>
      <Pressable style = {styles.button}> 
        <Text> Customer Profile </Text>
      </Pressable>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      },
      title: {
        color:"orange",
        fontSize: 28,
        position : "absolute",
        left: 50,
        fontStyle: "italic",
      },
      button:{
        backgroundColor: "orange",
        padding: 10,
        borderRadius: 10,
        position: "absolute",
        bottom: 100,
      
      }


    });

