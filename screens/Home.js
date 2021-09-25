import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import RestaurantItems, {
    localRestaurants,
} from "../components/home/RestaurantItems";

const YELP_API_KEY =
    "M0c8FqoZ5HBDeAvEW7r8Rlx7HSUv_2BZSW5jwyFCSk37YuloWZkRvZ8fkIdRAoiAAz0RD7SeRemvur1GRuPzZ8U80cSzb2SS0cYe2pvA6ha6_TZkaTE-2hcZ2xFMYXYx";

export default function Home({ navigation }) {
    const [restaurantsData, setRestaurantsData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantsData(
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems
                    restaurantsData={restaurantsData}
                    navigation={navigation}
                />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}
