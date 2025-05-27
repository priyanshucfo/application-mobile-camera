import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";

const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          title: "Track Your Cycle",
          subtitle: "Monitor your menstrual health easily.",
          image: (
            <View style={styles.lottieContainer}>
              {Platform.OS !== "web" && (
                <LottieView
                  source={require("../assets/onboarding/girlcycle.json")}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              )}
            </View>
          ),
        },
        {
          backgroundColor: "#f7f7f7",
          title: "Join The Community",
          subtitle: "Share and learn from others.",
          image: (
            <View style={styles.lottieContainer}>
              {Platform.OS !== "web" && (
                <LottieView
                  source={require("../assets/onboarding/groupdiscuss.json")}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              )}
            </View>
          ),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  lottieContainer: {
    width: width * 0.8,
    height: width * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: "100%",
    height: "100%",
  },
});

export default OnboardingScreen;
