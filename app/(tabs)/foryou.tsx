import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DownloadScroll from "@/components/DownloadScroll";

function ForYou() {
  // State to manage visibility of the bottom sheet
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is For You page</Text>
      {/* Button to toggle the scroller visibility */}
      <Button 
        title={isVisible ? "Close Scroller" : "Open Scroller"}
        onPress={() => setIsVisible(!isVisible)} 
      />
      {/* Always render the DownloadScroll component */}
      <DownloadScroll isVisible={isVisible} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ForYou;
