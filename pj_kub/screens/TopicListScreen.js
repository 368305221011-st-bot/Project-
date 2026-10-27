import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CAREER_KNOWLEDGE } from '../data/career_knowledge_24_topics';
import styles from '../styles/ProjectStyles';

export default function TopicListScreen({ navigation }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>สาระน่ารู้</Text>
      <Text style={styles.subtitle}>24 บทเรียนและคู่มือเตรียมความพร้อมสู่อาชีพในฝัน</Text>

      {CAREER_KNOWLEDGE.map((item, index) => (
        <Pressable
          key={item.id}
          style={({ pressed }) => [
            styles.topicRow,
            pressed && { opacity: 0.7 },
          ]}
          onPress={() => navigation.navigate('TopicDetail', { item })}
        >
          <View style={styles.topicBadge}>
            <Text style={styles.topicNumber}>{index + 1}</Text>
          </View>
          <View style={styles.topicTextBox}>
            <Text style={styles.topicTitle}>{item.topic}</Text>
            <Text style={styles.topicSubtitle} numberOfLines={1}>
              {item.subtitle}
            </Text>
          </View>
          <Ionicons name="chevron-forward" style={styles.chevron} />
        </Pressable>
      ))}
    </ScrollView>
  );
}
