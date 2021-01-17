import React, { useContext, useEffect, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import {
    Container,
    Separator,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Body
} from 'native-base';
import globalStyles from '../styles/global';

export default function Menu() {

    // Context de Firebase
    const { menu, obtenerProductos } = useContext(FirebaseContext);

    useEffect(() => {
        obtenerProductos();
    }, []);

    const mostrarHeading = (categoria, i) => {

        if (i > 0) {
            const categoriaAnterior = menu[i - 1].categoria;
            // mostrar la categoria solo 1 vez
            if (categoriaAnterior !== categoria) {
                return (
                    <Separator style={styles.separador}>
                        <Text style={styles.separadorTexto}>{categoria}</Text>
                    </Separator>
                )
            }
        } else {
            return (
                <Separator style={styles.separador}>
                    <Text style={styles.separadorTexto}>{categoria}</Text>
                </Separator>
            )
        }
    }

    return (
        <Container style={globalStyles.contenedor}>
            <Content style={{ backgroundColor: '#FFF' }}>
                <List>
                    {menu.map((platillo, i) => {
                        const { imagen, nombre, descripcion, categoria, precio, id } = platillo;

                        return (
                            <Fragment key={id}>
                                {mostrarHeading(categoria, i)}
                                <ListItem>
                                    <Thumbnail large source={{ uri: imagen }} />
                                    <Body>
                                        <Text>{nombre}</Text>
                                        <Text
                                            note
                                            numberOfLines={2}
                                        >
                                            {descripcion}
                                        </Text>

                                        <Text>Precio: $ {precio} </Text>
                                    </Body>

                                </ListItem>
                            </Fragment>
                        )
                    })}
                </List>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    separador: {
        backgroundColor: '#000',
    },
    separadorTexto: {
        color: '#FFDA00',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})
