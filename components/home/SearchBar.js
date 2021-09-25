import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ cityHandler }) {
    return (
        <View style={{ margin: 15, flexDirection: "row" }}>
            <GooglePlacesAutocomplete
                query={{ key: "AIzaSyB-EWokhdPxyKS0XYlLaPaocnBC26YYnFY" }}
                placeholder="Search"
                onPress={(data, details = null) => {
                    const city = data.description.split(",")[0];
                    cityHandler(city);
                }}
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10,
                    },
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View
                        style={{
                            flexDirection: "row",
                            marginRight: 8,
                            backgroundColor: "white",
                            padding: 9,
                            borderRadius: 30,
                            alignItems: "center",
                        }}
                    >
                        <AntDesign
                            name="clockcircle"
                            size={17}
                            style={{ marginRight: 6 }}
                        />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    );
}
