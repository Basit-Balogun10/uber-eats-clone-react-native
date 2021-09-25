import React from "react";
import { View, Text, Image } from "react-native";

const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCv0j-8lbeKw40J1eFsn2Ih8mzAL0d3KTDA&usqp=CAU",
    price: "$$",
    reviews: "1500",
    rating: 4.5,
    categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

export default function About(props) {
    const {
        name,
        image,
        price,
        reviews,
        rating,
        categories,
    } = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const description = `${formattedCategories} ${
        price ? " • " + price : ""
    } • 🎫 • ${rating} • 🌟 • [${reviews}+] `;
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image
        source={{ uri: props.image }}
        style={{ width: "100%", height: 180 }}
    />
);

const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.name}
    </Text>
);

const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 19,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 15.5,
        }}
    >
        {props.description}
    </Text>
);
