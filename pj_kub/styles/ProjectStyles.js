import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#2563EB',      // Indigo/Blue
  primarySoft: '#EFF6FF',  // Soft Blue
  background: '#F8FAFC',   // Light slate
  white: '#FFFFFF',
  textPrimary: '#1E293B',  // Dark slate
  textSecondary: '#64748B',// Muted slate
  border: '#E2E8F0',
  success: '#16A34A',
  danger: '#DC2626',
};

const styles = StyleSheet.create({
  navigationHeader: {
    backgroundColor: COLORS.primary,
  },
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    padding: 18,
    paddingBottom: 32,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textSecondary,
    marginBottom: 16,
  },
  bannerCard: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 180,
    borderRadius: 14,
    marginBottom: 14,
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  card: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  topicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
  },
  topicBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  topicNumber: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primary,
  },
  topicTextBox: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  topicSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  chevron: {
    fontSize: 20,
    color: COLORS.textSecondary,
    marginLeft: 8,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primarySoft,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 16,
  },
  backButtonText: {
    color: COLORS.primary,
    fontWeight: '700',
    marginLeft: 4,
  },
  exploreCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
    marginBottom: 16,
  },
  exploreImage: {
    width: '100%',
    height: 160,
  },
  exploreContent: {
    padding: 16,
  },
  exploreTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primarySoft,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 8,
  },
  tagText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '600',
  },
  teamCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  teamInfo: {
    flex: 1,
  },
  teamName: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  teamId: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '600',
    marginBottom: 4,
  },
  teamRole: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  teamBadge: {
    backgroundColor: COLORS.primarySoft,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginTop: 12,
    alignItems: 'center',
  },
  teamBadgeText: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 14,
  },
});

export default styles;
