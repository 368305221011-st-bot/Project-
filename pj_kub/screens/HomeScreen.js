import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import styles from '../styles/ProjectStyles';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <View style={styles.bannerCard}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800' }}
          style={styles.bannerImage}
        />
        <Text style={styles.bannerTitle}>CAREER EXPLORER HUB</Text>
        <Text style={styles.bannerSubtitle}>ค้นพบเส้นทางและทักษะสู่อาชีพในฝันยุคใหม่</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>ยินดีต้อนรับสู่แหล่งเรียนรู้อาชีพ</Text>
        <Text style={styles.bodyText}>
          แอปพลิเคชันนี้รวบรวมข้อมูลสาระน่ารู้ ทักษะสำคัญในอนาคต และสายอาชีพบอกเล่าเรื่องราว
          เพื่อเตรียมความพร้อมสำหรับนิสิต นักศึกษา และผู้ที่สนใจพัฒนาตนเอง
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>ฟีเจอร์เด่นในแอป</Text>
        <Text style={styles.bodyText}>• สาระน่ารู้ 24 หัวข้อเกี่ยวกับการวางแผนอาชีพและพัฒนาตนเอง</Text>
        <Text style={styles.bodyText}>• สำรวจรายการสายอาชีพดาวรุ่งจากข้อมูลออนไลน์ (Fetch API)</Text>
        <Text style={styles.bodyText}>• ข้อมูลทีมงานผู้จัดทำโครงการและการแบ่งหน้าที่อย่างชัดเจน</Text>
      </View>
    </ScrollView>
  );
}
