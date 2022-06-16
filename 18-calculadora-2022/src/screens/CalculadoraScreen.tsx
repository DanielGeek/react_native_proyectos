import React, { useRef, useState } from 'react';
import {Text, View} from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const CalculadoraScreen = () => {

  const [ numeroAnterior, setNumeroAnterior ] = useState('0');
  const [ numero, setNumero ] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = ( numeroTexto: string ) => {

    if ( numero.includes('.') && numeroTexto === '.' ) return;

    if ( numero.startsWith('0') || numero.startsWith('-0') ) {

      if ( numeroTexto === '.' ) {
        setNumero( numero + numeroTexto );
      } else if ( numeroTexto === '0' && numero.includes('.') ) {
        setNumero( numero + numeroTexto );
      } else if ( numeroTexto !== '0' && !numero.includes('.') ) {
        setNumero( numeroTexto );
      } else if ( numeroTexto === '0' && !numero.includes('.') ) {
        setNumero(numero);
      } else {
        setNumero( numero + numeroTexto );
      }

    } else {
      setNumero( numero + numeroTexto );
    }

  };

  const positivoNegativo = () => {
    if ( numero.includes('-') ) {
      setNumero( numero.replace('-', ''));
    } else {
      setNumero('-' + numero );
    }
  };

  const btnDelete = () => {

    let negativo = '';
    let numeroTemp = numero;
    if ( numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substring(1);
    }

    if ( numeroTemp.length > 1 ) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const cambiarNumPorAnterior = () => {
    if ( numero.endsWith('.') ) {
      setNumeroAnterior( numero.slice(0, -1) );
    } else {
      setNumeroAnterior( numero );
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {

    const num1 = Number( numero );
    const num2 = Number( numeroAnterior );

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${ num1 + num2 }`);
        break;

      case Operadores.restar:
        setNumero(`${ num2 - num1 }`);
        break;

      case Operadores.multiplicar:
        setNumero(`${ num1 * num2 }`);
        break;

      case Operadores.dividir:
        setNumero(`${ num2 / num1 }`);
        break;
    }

    setNumeroAnterior('0');
  };

  return (
    <View style={styles.calculadoraContainer}>
      {
        ( numeroAnterior !== '0' ) && (
            <Text style={styles.resultadoPequeno}>{ numeroAnterior }</Text>
        )
      }
      <Text
          style={styles.resultado}
          numberOfLines={ 1 }
          adjustsFontSizeToFit
      >
        { numero }
      </Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCalc texto="del" color="#9B9B9B" accion={btnDelete} />
        <BotonCalc texto="/" color="#FF9427" accion={btnDividir} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="X" color="#FF9427" accion={btnMultiplicar} />
      </View>

       {/* Fila de botones */}
       <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="-" color="#FF9427" accion={btnRestar} />
      </View>

       {/* Fila de botones */}
       <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" color="#FF9427" accion={btnSumar} />
      </View>

       {/* Fila de botones */}
       <View style={styles.fila}>
        <BotonCalc texto="0" accion={armarNumero} ancho />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" color="#FF9427" accion={calcular} />
      </View>

    </View>
  );
};
