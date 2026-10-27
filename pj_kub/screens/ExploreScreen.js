import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image, ActivityIndicator } from 'react-native';
import styles, { COLORS } from '../styles/ProjectStyles';

export default function ExploreScreen() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Online Data (DATA 3)
    fetch('https://raw.githubusercontent.com/runmageddon/json-demo/main/careers.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setCareers(data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback data for offline stability
        setCareers([
          {
            id: '1',
            title: 'Software Engineer',
            desc: 'ออกแบบ พัฒนา และดูแลรักษาซอฟต์แวร์หรือแอปพลิเคชัน',
            skills: 'React Native, Node.js, Git',
            img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
          },
          {
            id: '2',
            title: 'Data Scientist & AI Specialist',
            desc: 'วิเคราะห์ข้อมูลขนาดใหญ่ สร้างโมเดลทำนาย และพัฒนา AI',
            skills: 'Python, SQL, Machine Learning',
            img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
          },
          {
            id: '3',
            title: 'UX/UI Designer',
            desc: 'ออกแบบอินเทอร์เฟซและประสบการณ์การใช้งานของผู้ใช้',
            skills: 'Figma, Prototyping, Wireframing',
            img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600',
          },
          {
            id: '4',
            title: 'Digital Marketing Strategist',
            desc: 'วางแผนกลยุทธ์การตลาดออนไลน์ และวิเคราะห์ SEO/SEM',
            skills: 'SEO, Google Analytics, Social Ads',
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
          },
          {
            id: '5',
            title: 'Cyber Security Analyst',
            desc: 'ดูแลความปลอดภัยของระบบโครงสร้างพื้นฐานและป้องกันภัยคุกคาม',
            skills: 'Network Security, Ethical Hacking',
            img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600',
          },
        ]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={[styles.screen, styles.centerContent]}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={{ marginTop: 12, color: COLORS.textSecondary, fontSize: 15 }}>
          กำลังดึงข้อมูลสายอาชีพจากออนไลน์...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>สายอาชีพน่าสนใจ (Explore)</Text>
      <Text style={styles.subtitle}>ข้อมูลดึงจาก GitHub Raw JSON (DATA 3)</Text>

      {careers.map((item) => (
        <View key={item.id} style={styles.exploreCard}>
          <Image source={{ uri: item.img }} style={styles.exploreImage} />
          <View style={styles.exploreContent}>
            <Text style={styles.exploreTitle}>{item.title}</Text>
            <Text style={styles.bodyText}>{item.desc}</Text>
            {item.skills && (
              <View style={styles.tag}>
                <Text style={styles.tagText}>ทักษะสำคัญ: {item.skills}</Text>
              </View>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
