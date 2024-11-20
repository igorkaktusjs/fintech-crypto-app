import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useQuery } from '@tanstack/react-query'

import {Cryptocurrency} from '@/interfaces/crypto'


const API_KEY = process.env.CRYPTO_API_KEY

const crypto = () => {

  const currencies = useQuery({
    queryKey: ['currencies'],
    queryFn: () => fetch('/api/listings').then((res) => res.json()),
  });

  const ids = currencies.data?.map((currency: Cryptocurrency) => currency.id).join(',');

  const { data } = useQuery({
    queryKey: ['info', ids],
    queryFn: () => fetch(`/api/info?ids=${ids}`).then(res => res.json()),
    enabled: !!ids
  })

  console.log(data)

  return (
    <View>
      {currencies.data?.map((currency: Cryptocurrency) => (
        <View style={{flexDirection: 'row'}} key={currency.id}>
            <Image source={{uri: data?.[currency.id].logo}} style={{width: 32, height: 32}}/>
            <Text>{currency.name}</Text>
        </View>
        
      ))}  
    </View>
  )
}

export default crypto

const styles = StyleSheet.create({})