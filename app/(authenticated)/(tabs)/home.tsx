import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import RoundBtn from '@/components/RoundBtn';
import Dropdown from '@/components/Dropdown';
import { useBalanceStore } from '@/store/balanceStore'
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';



const home = () => {

  const { balance, runTransaction, transactions, clearTransactions } = useBalanceStore();

  const onAddMoney = () => {
    runTransaction({
      id: Math.random().toString(),
      amount: Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : - 1 ),
      date: new Date(),
      title: 'Added money'  
    })
  }

  return (
    <ScrollView style={{backgroundColor: Colors.background}}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{ balance()}</Text>
          <Text style={styles.currency}>$</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundBtn icon={'add'} text={'Add money'} onPress={onAddMoney}/>
        <RoundBtn icon={'refresh'} text={'Exchange'} onPress={clearTransactions}/>
        <RoundBtn icon={'list'} text={'Details'} onPress={onAddMoney}/>
        <Dropdown/>
      </View>

      <Text style={defaultStyles.sectionHeader}>Transaction</Text>

      <View style={styles.transactions}>
        {transactions.length ===  0 && <Text style={{padding: 14, color: Colors.gray}}>No transactions yet</Text>}

        {transactions.map((transaction) => (
          <View style={styles.transactionBox}  key={transaction.id}>
            <View style={styles.circle}>
              <Ionicons  
                name={transaction.amount > 0 ?  'add' : 'remove'} 
                size={24} 
                color={Colors.primary }/>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.transactionTitle}>{transaction.title}</Text>
              <Text style={styles.transactionDateText}>{transaction.date.toLocaleString()}</Text>
            </View>
            <Text>{transaction.amount} $</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: 'center'
  }, 
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 10
  },
  balance: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  currency: {
    fontSize: 20,
    fontWeight: '500'
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  transactions: {
    marginHorizontal: 20, 
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 20
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius:20,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  transactionBox:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  transactionDateText: {
    color:Colors.gray,
    fontSize: 12
  },
  transactionTitle:{
    fontWeight: 400
  }
})