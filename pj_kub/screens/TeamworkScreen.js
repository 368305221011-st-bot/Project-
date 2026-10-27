import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles, { COLORS } from '../styles/ProjectStyles';

// DATA 1: Local Array Data
const TEAM_MEMBERS = [
  {
    id: '1',
    name: 'นายพีรพัฒน์ เม่นคล้าย',
    studentId: '368305221016',
    role: 'วางแผนสถาปัตยกรรมแอป และพัฒนาโค้ดหลัก (Developer)',
  },
  {
    id: '2',
    name: 'นายนวพล สว่างศรี',
    studentId: '368305221011',
    role: 'ออกแบบ UI/UX และรวบรวมข้อมูลสายอาชีพ (Designer & Content)',
  },
 
];

export default function TeamworkScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>OUR TEAM</Text>
      <Text style={styles.subtitle}>สมาชิกผู้จัดทำโครงการ (DATA 1 - Local Data)</Text>

      {TEAM_MEMBERS.map((member) => (
        <View key={member.id} style={styles.teamCard}>
          <View style={styles.teamAvatar}>
            <Ionicons name="person-outline" size={24} color={COLORS.primary} />
          </View>
          <View style={styles.teamInfo}>
            <Text style={styles.teamName}>{member.name}</Text>
            <Text style={styles.teamId}>รหัสนักศึกษา {member.studentId}</Text>
            <Text style={styles.teamRole}>หน้าที่: {member.role}</Text>
          </View>
        </View>
      ))}

      <View style={styles.teamBadge}>
        <Text style={styles.teamBadgeText}>
          ร่วมกันพัฒนาแอป CAREER EXPLORER HUB
        </Text>
      </View>
    </ScrollView>
  );
}
