export const formatDate = (date, type = 'full') => {
  if (!date) return ''
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: type
  }).format(new Date(date))
}
