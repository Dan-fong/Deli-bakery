import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import { products } from '../data/Productos'
import ProductItem from '../components/ProductItem'

const Products = ({ category }) => {

    const [productFiltered, setProductFiltered] = useState([])
    const [text, setText] = useState(null)

    useEffect(() => {
        const filterByCategory = products.filter((el) => el.category === category)
        setProductFiltered(filterByCategory)

        if(text){
            const FilterTitle = products.filter((el) => el.title.toLowerCase() == text.toLowerCase())
            setProductFiltered(FilterTitle)
            //console.log(productFiltered)
            console.log(FilterTitle)

        }

    }, [category, text])

  return (
    <View style={{marginTop: 38}}>
        <Header title={"Lista de Productos"} />
        <Search text={text} setText={setText} />
            <FlatList
                style={{height: "76%"}}
                data={productFiltered}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ProductItem item={item} />}
            />

    </View>
  )
}

export default Products

const styles = StyleSheet.create({})