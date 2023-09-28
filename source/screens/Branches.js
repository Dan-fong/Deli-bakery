import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import BranchItem from '../components/BranchItem'
import { color } from '../theme/colors'
import Header from '../components/Header'
import { useSelector } from 'react-redux'



const Branches = ({ navigation }) => {

    const sucursales = useSelector( state => state.branchSlice.allBranches );


return (
    <View style={styles.contenedor} >
        <Header title={"Sucursales"} navigation={navigation} />
        <View style={{width:"90%"}}>
            <FlatList
                style={styles.contenedorSucursales}
                data={sucursales}
                key={(key) => key.id}
                renderItem={({ item }) => <BranchItem navigation={navigation} item={item} />}    
            />
        </View>
        <View style={{width: "100%", height: "250px"}}>
        </View>
    </View>
)}

export default Branches

const styles = StyleSheet.create({
    contenedorSucursales: {
        width: "100%",
    },
    contenedor: {
        marginTop: 38,
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: color.purple
    },
}) 
