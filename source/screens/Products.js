import { StyleSheet, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux'
import firebase from '../firebase/firebase_auth'

const Products = ({ category, route, navigation }) => {

    // const products = useSelector(state => state.branchSlice.allProducts)

    const {item} = route.params

    category = item

    const [productFiltered, setProductFiltered] = useState([])
    const [text, setText] = useState("")

    useEffect(() => {
        const fetchProducts = async () => {
          const querySnapshot = await firebase.db
            .collection("productos")
            .where("categoria", "==", category)
            .get();
    
          const products = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            products.push({ id: doc.id, ...data });
          });
    
          // Filtrar por texto
          if (text) {
            const filteredProducts = products.filter((el) =>
              el.nombre.toLowerCase().includes(text.toLowerCase())
            );
            setProductFiltered(filteredProducts);
          } else {
            setProductFiltered(products);
          }
        };
    
        fetchProducts();
      }, [category, text]);

    return (
        <View style={{marginTop: 38}}>
            <Header title={"Categoria: " + item} navigation={navigation} />
            <Search text={text} setText={setText} />
                <FlatList
                    style={{height: "76%"}}
                    data={productFiltered}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ProductItem item={item} navigation={navigation} />}
                />

        </View>
    )
}

export default Products

const styles = StyleSheet.create({})