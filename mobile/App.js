/* eslint-disable no-unused-vars */

// ARQUIVO PRINCIPAL DA APLICAÇÃO

import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react'
// import { Text, View } from 'react-native' // StyleSheet, saiu tudo, devido a importação de rotas

import Routes from './src/routes'

export default function App () {
  return (
    // style={styles.container}
    // style={styles.title} retirados das TAGs
    <Routes />
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7159c1',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },

//   title: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 35
//   }
// })
