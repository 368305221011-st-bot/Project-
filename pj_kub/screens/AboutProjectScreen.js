import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function AboutProjectScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>เกี่ยวกับโปรเจกต์</Text>
      <Text style={styles.subtitle}>รายละเอียดเชิงเทคนิคและการออกแบบระบบ</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Separation of Concerns (SoC)</Text>
        <Text style={styles.bodyText}>• navigation/ = จัดการการสลับหน้า (Drawer, Tab, Stack)</Text>
        <Text style={styles.bodyText}>• screens/ = หน้าจอแสดงผล UI</Text>
        <Text style={styles.bodyText}>• data/ = แหล่งเก็บข้อมูล (Local Data)</Text>
        <Text style={styles.bodyText}>• styles/ = ระบบสไตล์และธีมสีกลาง</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>เทคโนโลยีที่ใช้</Text>
        <Text style={styles.bodyText}>• React Native & Expo</Text>
        <Text style={styles.bodyText}>• React Navigation v7 (Drawer + Bottom Tabs + Native Stack)</Text>
        <Text style={styles.bodyText}>• Fetch API สำหรับดึงข้อมูล JSON จาก GitHub</Text>
      </View>
    </ScrollView>
  );
}
