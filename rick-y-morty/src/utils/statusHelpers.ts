export const getStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'alive':
      return '#10b981'
    case 'dead':
      return '#ef4444'
    default:
      return '#6b7280'
  }
}

export const getStatusText = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'alive':
      return 'Alive'
    case 'dead':
      return 'Dead'
    default:
      return 'Unknown'
  }
}
