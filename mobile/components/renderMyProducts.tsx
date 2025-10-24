import { Product } from "@/api/productsService";
import { Text, View, Image, StyleSheet } from "react-native";

interface RenderMyProductsProps {
    product: Product;
}
export default function RenderMyProducts({ product }: RenderMyProductsProps) {

    if (!product) return

    console.log("product", product)
    return (
        <View style={styles.container}>
            {product.imageUrl ? <Image source={{ uri: product.imageUrl }} style={styles.image} /> : ""}
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>₦{Math.floor(product.price)}</Text>
            <Text style={styles.category}>{product.category}</Text>
            <Text style={styles.stock}>
                {product.inStock ? "In Stock" : "Out of Stock"}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 200,
        padding: 16,
        marginVertical: 8,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        color: "#2ecc71",
        marginBottom: 4,
    },
    category: {
        fontSize: 14,
        color: "#7f8c8d",
        marginBottom: 4,
    },
    stock: {
        fontSize: 14,
        fontWeight: "600",
    },
});