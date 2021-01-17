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

    return (
        <Container style={globalStyles.contenedor}>
            <Content style={{ backgroundColor: '#FFF' }}>
                <List>
                    {menu.map(platillo => {
                        const { imagen, nombre, descripcion, categoria, precio, id } = platillo;

                        return (
                            <Fragment key={id}>
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
    )
}
