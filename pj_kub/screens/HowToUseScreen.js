import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function HowToUseScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>วิธีใช้งานแอปพลิเคชัน</Text>
      <Text style={styles.subtitle}>คู่มือแนะนำการใช้งานส่วนต่างๆ ของแอป</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>1. หน้าหลัก (HomeTab)</Text>
        <Text style={styles.bodyText}>• แสดงภาพรวมและจุดประสงค์ของแอปพลิเคชัน CAREER EXPLORER HUB</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>2. สาระน่ารู้ (KnowledgeTab)</Text>
        <Text style={styles.bodyText}>• อ่านบทเรียนและคำแนะนำ 24 หัวข้อเกี่ยวกับการเตรียมตัวสู่อาชีพ</Text>
        <Text style={styles.bodyText}>• กดเลือกหัวข้อที่สนใจเพื่อดูรายละเอียดเชิงลึก</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>3. สายอาชีพ (ExploreTab)</Text>
        <Text style={styles.bodyText}>• ดึงข้อมูลสายอาชีพที่กำลังเป็นที่ต้องการจากออนไลน์ (Fetch API)</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>4. ผู้จัดทำ (TeamTab)</Text>
        <Text style={styles.bodyText}>• แสดงข้อมูลสมาชิกในกลุ่มและบทบาทหน้าที่</Text>
      </View>
    </ScrollView>
  );
}
