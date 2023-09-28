import { StyleSheet, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux'

const Products = ({ category, route, navigation }) => {

    const products = useSelector(state => state.branchSlice.allProducts)

    const {item} = route.params

    category = item

    const [productFiltered, setProductFiltered] = useState([])
    const [text, setText] = useState("")

    useEffect(() => {
        const filterByCategory = products.filter((el) => el.category === category)
        setProductFiltered(filterByCategory)

        if(text){
            const FilterTitle = products.filter((el) => el.title.toLowerCase() == text.toLowerCase())
            setProductFiltered(FilterTitle)
        }
    }, [category, text])

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