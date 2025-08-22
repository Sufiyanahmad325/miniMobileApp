import { Text, TextInput, View, Pressable, StyleSheet,Animated, Easing} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useRef, useContext } from "react";
import { CardContextApi } from "./_layout";

const CustomHeader = ({ navigation }) => {
  const [isOpenSearchBox, setIsOpenSearchBox] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current; // initial height 0
  const { addToCart, setAddToCart } = useContext(CardContextApi);

  // const toggleSearch = () => {
  //   if (isOpenSearchBox) {
  //     // Close animation
  //     Animated.timing(animatedHeight, {
  //       toValue: 0,
  //       duration: 300,
  //       easing: Easing.ease,
  //       useNativeDriver: false, // height can't use native driver
  //     }).start(() => setIsOpenSearchBox(false));
  //   } else {
  //     // Open animation
  //     setIsOpenSearchBox(true);
  //     Animated.timing(animatedHeight, {
  //       toValue: 60, // final height (you can adjust)
  //       duration: 300,
  //       easing: Easing.ease,
  //       useNativeDriver: false,
  //     }).start();
  //   }
  // };




  const toggleSearch = () => {
    if (isOpenSearchBox) {
      // Agar search box abhi OPEN hai (true hai)
  
      // Animation start karo: search box ki height ko 60 se 0 par le jao
      Animated.timing(animatedHeight, {
        toValue: 0,           // height ko collapse karke 0 karna hai
        duration: 300,        // 300ms (0.3 sec) me animation complete hogi
        easing: Easing.ease,  // smooth open/close feel ke liye easing use ho raha hai
        useNativeDriver: false, // kyunki "height" property native driver se support nahi hoti
      }).start(() => setIsOpenSearchBox(false));
      // Animation khatam hone ke baad state false kar do
      // (false karne ka matlab: search box ko DOM/Screen se remove karna)
    } else {
      // Agar search box abhi CLOSED hai (false hai)
  
      setIsOpenSearchBox(true);
      // Pehle state ko true karo taaki box render ho jaye
      // (warna box show hi nahi hoga aur animation dikhayi nahi degi)
  
      // Ab box ko 0 se expand karke 60 px height tak le jao
      Animated.timing(animatedHeight, {
        toValue: 60,          // box expand hoke 60 height ka ho jayega
        duration: 300,        // 300ms me smoothly khulega
        easing: Easing.ease,  // smooth animation
        useNativeDriver: false, // height ke liye native driver off
      }).start();
    }
  };
  

  return (
    <SafeAreaView edges={["top"]}>
      <View style={styles.header}>
        {/* Left: Drawer Menu */}
        <Pressable onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={24} color="black" />
        </Pressable>

        {/* Center: Logo */}
        <Text style={styles.logo}>Golro</Text>

        {/* Right: Search + Cart */}
        <View style={styles.headerRight}>
          <Ionicons
            name="search"
            size={22}
            color="black"
            style={{ marginRight: 15 }}
            onPress={toggleSearch}
          />

            
          <Pressable onPress={()=> navigation.navigate('addTokart')} >
            <Ionicons name="cart-outline" size={22} color="black" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{addToCart.length || 0}</Text>
            </View>
          </Pressable>
        </View>
      </View>

      {/* Search Box Animated */}
      {isOpenSearchBox && (
        <Animated.View style={[styles.searchContainer, { height: animatedHeight }]}>
          <TextInput style={styles.searchInput} placeholder="Search products..." />
          <Pressable style={styles.searchBtn}>
            <Text style={{ color: "#fff" }}>Search</Text>
          </Pressable>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    position: "absolute",
    right: -8,
    top: -6,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    overflow: "hidden", // important for smooth slide
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginRight: 10,
  },
  searchBtn: {
    backgroundColor: "#009bff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
});
