import {  Text  } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"


function account() {
  return (
    <SafeAreaView>
      <Text>account</Text>
      <Link href={'../account_info'}><Text>Show account info</Text></Link>
      
    </SafeAreaView>
  )
}

export default account
            