// Mock search service for demo purposes
export async function searchDatabase(type: string, query: string) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Mock results
  return [
    {
      url: 'example.com',
      login: 'user@mail.com',
      password: '********',
      date: '2024-01-20'
    },
    {
      url: 'test.com', 
      login: 'admin@mail.com',
      password: '********',
      date: '2024-01-19'
    }
  ]
}