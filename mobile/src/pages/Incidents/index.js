/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native' // deve ser importada a View, pelo fato de não haver <div>
// TouchableOpacity similar a um botão... o botão no Native carregar botões padrão do Android e IOS
import logoImg from '../../assets/logo.png' // como o nome das outras logos estão no padrão, o React
// Native irá identificar qual melhor tamanha de imagem irá ser melhor para o celular que está executando
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'

export default function Incidents () {
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

  function navigateToDetail (incident) {
    navigation.navigate('Detail', { incident })
  }

  async function loadIncidents () {
    // evita o carregamento repetitivo, se já está carregando não da pra solicitar novo carregamento
    if (loading) {
      return
    }

    if (total > 0 && incidents.length === total) {
      return
    }

    setLoading(true)

    const response = await api.get('incidents', {
      params: { page }
    })
    // setIncidents(response.data) deste modo, a página 2 seria carregada em cima da 1
    setIncidents([...incidents, ...response.data])
    // notação acima, indica a alimentação de dois vetores dentro de um só "...xxx" copia todos os valores do elemento
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
        <Text style={styles.headerText}>
Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        // se estiver a 20% antes de finalizar os itens da lista, carrega mais
        onEndReachedThreshold={0.2}
        // nome item será alterado para incident
        renderItem={({ item: incident }) => (

          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              // SEMPRE que precisar passar parâmetro para um função, inserir a arrow function na frente "() =>"
              onPress={() => navigateToDetail(incident)}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041"/>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}
