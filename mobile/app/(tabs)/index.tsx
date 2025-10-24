import { FlatList, Text, View } from "react-native"
import { useQuery } from "@tanstack/react-query"
import { getProducts, Product } from "@/api/productsService"
import Renderproducts from "@/components/renderMyProducts"

export default function MyProducts() {

    const {
        data: myProducts,
        isLoading,
        isPending
    } = useQuery({
        queryKey: ["myProducts"],
        queryFn: (): any => getProducts,
        select: (productData: Product[]) => {
            const filteredProducts = productData.filter((product: Product) => product?.own === true)
            return filteredProducts
        }
    })

    if (isLoading || isPending) {
        return <Text>Loading...</Text>
    }

    if (!myProducts || myProducts.length < 1) {
        return <Text>No products available.</Text>
    }

    console.log("myProducts", myProducts)

    return (
        <View>
            <FlatList
                data={myProducts}
                renderItem={({ item }) => <Renderproducts product={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}