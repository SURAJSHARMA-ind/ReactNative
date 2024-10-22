import { Slot,Link } from "expo-router"
import { SafeAreaView, Text, View } from "react-native"

function layout() {
  return (
    <SafeAreaView>
      <Link href={'/account'}>
      <Text style={{backgroundColor:"gray", color:"white"}} > back</Text>
      </Link>
      <Slot/>
    </SafeAreaView>
  )
}

export default layout
