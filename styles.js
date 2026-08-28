import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#4a90e2',
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginRight: 12,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  /* Main layout */
  main: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 12,
  },
  rightColumn: {
    flex: 2,
    marginLeft: 12,
    gap: 12,
  },

  /* Card */
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardLarge: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  cardContent: {
    fontSize: 14,
    color: '#525252',
  },

  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 8,
  },
  statusOnline: {
    color: '#0f766e',
    backgroundColor: '#d1fae5',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    alignSelf: 'flex-start',
    fontWeight: '600',
  },
  statusOffline: {
    color: '#991b1b',
    backgroundColor: '#fee2e2',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    alignSelf: 'flex-start',
    fontWeight: '600',
  },

  productSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  productCard: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563eb',
  },
  stockAvailable: {
    fontSize: 13,
    color: '#166534',
    fontWeight: '600',
    marginBottom: 8,
  },
  stockUnavailable: {
    fontSize: 13,
    color: '#b91c1c',
    fontWeight: '600',
    marginBottom: 8,
  },
  actionButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563eb',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    fontWeight: '700',
  },
  actionButtonDisabled: {
    alignSelf: 'flex-start',
    backgroundColor: '#e5e7eb',
    color: '#6b7280',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    fontWeight: '700',
  },

  /* Footer */
  footer: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eef3fb',
  },
  footerText: {
    color: '#333',
    fontSize: 13,
  },
});
