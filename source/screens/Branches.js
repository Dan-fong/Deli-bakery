import { StyleSheet, View, FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import BranchItem from '../components/BranchItem';
import { color } from '../theme/colors';
import Header from '../components/Header';
import firebase from '../firebase/firebase_auth';

const Branches = ({ navigation }) => {
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        firebase.db.collection('sucursales').onSnapshot((querySnapshot) => {
            const branch = [];

            querySnapshot.docs.forEach((doc) => {
                const { nombre } = doc.data();

                branch.push({
                    id: doc.id,
                    nombre
                });
            });
            setBranches(branch);
        });
    }, []);

    return (
        <View style={styles.contenedor}>
            <Header title={"Sucursales"} navigation={navigation} />
            <View style={{ width: "90%" }}>
                <FlatList
                    style={styles.contenedorSucursales}
                    data={branches}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <BranchItem navigation={navigation} item={item} />}
                />
            </View>
        </View>
    );
}

export default Branches;

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
});
