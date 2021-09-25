import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Random Dish",
                description: "Random Description",
                price: "$10.00",
                image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCv0j-8lbeKw40J1eFsn2Ih8mzAL0d3KTDA&usqp=CAU",
            },
        ],
    });

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db
            .collection("orders")
            .orderBy("createdAt", "desc")
            .limit(1)
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setLastOrder(doc.data());
                });
            });

        return () => unsubscribe();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
                <LottieView
                    style={{
                        height: 100,
                        alignSelf: "center",
                        marginBottom: 30,
                    }}
                    source={require("../assets/animations/check-mark.json")}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Your order at {restaurantName} has been placed for{" "}
                    {totalUSD}
                </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <MenuItems
                        foods={lastOrder.items}
                        hideCheckbox={true}
                        marginLeft={10}
                    />
                    <LottieView
                        style={{
                            height: 200,
                            alignSelf: "center",
                        }}
                        source={require("../assets/animations/cooking.json")}
                        autoPlay
                        speed={0.5}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
