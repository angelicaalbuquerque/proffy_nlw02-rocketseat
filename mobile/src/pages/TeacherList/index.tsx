import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from "@expo/vector-icons";

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  return ( 
  <View style={styles.container}>
    <PageHeader 
      title="Proffys disponíveis" 
      headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name="filter" size={20} color="#FFF" />
        </BorderlessButton>
      )}
    >
    { isFiltersVisible && (
      <View style={styles.searchForm}>
        <Text style={styles.label}>Matéria</Text>
        <TextInput
          placeholderTextColor="#C1BCCC"
          style={styles.input}
          placeholder="Qual a matéria?"
        />

        <View style={styles.inputGroup}>
          <View style={styles.inputBlock}>
          <Text style={styles.label}>Dia da semana</Text>
            <TextInput
          placeholderTextColor="#C1BCCC"
              style={styles.input}
              placeholder="Qual o dia?"
            />
          </View>

          <View style={styles.inputBlock}>
          <Text style={styles.label}>Horário</Text>
            <TextInput
              placeholderTextColor="#C1BCCC" 
              style={styles.input}
              placeholder="Qual o horário?"
            />
          </View>
        </View>
      </View>
    )}
    </PageHeader>

    <ScrollView
      style={styles.teacherList}
      contentContainerStyle={{ 
        paddingHorizontal: 16,
        paddingBottom: 16,
       }}
    >
      <TeacherItem/>
      <TeacherItem/>
      <TeacherItem/>
      <TeacherItem/>
    </ScrollView>
  </View>
  );
}

export default TeacherList;