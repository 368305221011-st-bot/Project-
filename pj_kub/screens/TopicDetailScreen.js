import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles, { COLORS } from '../styles/ProjectStyles';

export default function TopicDetailScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={18} color={COLORS.primary} />
        <Text style={styles.backButtonText}>ย้อนกลับ</Text>
      </Pressable>

      <Text style={styles.title}>{item.topic}</Text>
      <View style={styles.tag}>
        <Text style={styles.tagText}>หมวดหมู่: {item.category}</Text>
      </View>

      <View style={[styles.card, { marginTop: 16 }]}>
        <Text style={styles.cardTitle}>รายละเอียดบทเรียน</Text>
        <Text style={styles.bodyText}>{item.detail}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>สรุปข้อคิดและแนวทางนำไปใช้</Text>
        <Text style={styles.bodyText}>
          การนำความรู้ในหัวข้อนี้ไปปรับใช้ จะช่วยเพิ่มศักยภาพในการแข่งขัน
          และสร้างความมั่นใจในการก้าวสู่สายอาชีพเป้าหมายได้อย่างมีทิศทาง
        </Text>
      </View>
    </ScrollView>
  );
}
