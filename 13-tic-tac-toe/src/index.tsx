import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { Text, AppBootstrap } from "@components";

export default function App(): ReactElement {
    return (
        <AppBootstrap>
            <View style={styles.container}>
                <Text
                    onPress={() => {
                        alert(true);
                    }}
                    style={{ fontSize: 25 }}
                >
                    Hello World <Text weight="400">sasas</Text>
                </Text>
            </View>
        </AppBootstrap>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
