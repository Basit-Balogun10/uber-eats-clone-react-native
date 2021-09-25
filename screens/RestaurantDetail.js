import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCv0j-8lbeKw40J1eFsn2Ih8mzAL0d3KTDA&usqp=CAU",
    },
    {
        title: "Tandoori Chicken",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzles ",
        price: "$19.20",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCv0j-8lbeKw40J1eFsn2Ih8mzAL0d3KTDA&usqp=CAU",
    },
    {
        title: "Chicken Caesar Salad",
        description:
            "One can never go wrong with a chicken Caesar Salad.Healthy option with greens and proteins",
        price: "$21.50",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCv0j-8lbeKw40J1eFsn2Ih8mzAL0d3KTDA&usqp=CAU",
    },
    {
        title: "Random Dish",
        description: "Random Description",
        price: "$10.00",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCv0j-8lbeKw40J1eFsn2Ih8mzAL0d3KTDA&usqp=CAU",
    },
];

export default function RestaurantDetail({ route, navigation }) {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <About route={route} />
                <Divider width={1.8} style={{ marginVertical: 20 }} />
                <MenuItems restaurantName={route.params.name} foods={foods} />
            </ScrollView>
            <ViewCart navigation={navigation} />
        </View>
    );
}
