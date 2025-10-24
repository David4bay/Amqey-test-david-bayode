import { View, Text, FlatList, StyleSheet } from "react-native"
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "@/api/productsService"
import Renderproducts from "@/components/renderMyProducts"

export default function Products() {

  const {
        data: allProducts,
        isLoading,
        isPending,
    } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    if (isLoading || isPending) {
        return (
            <View style={styles.centerContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }
    // console.log(allProducts)
    return (
        <View style={styles.container}>
            <FlatList
                data={allProducts}
                renderItem={({ item }) => <Renderproducts product={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    centerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 16,
    },
    listContainer: {
        padding: 16,
    },
})