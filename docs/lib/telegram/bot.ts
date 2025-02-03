import { ref } from 'vue'

// Bot configuration
const BOT_TOKEN = '7088177603:AAGJ85N53g5i7PUhWOUpRksvccF2LNWZlio'
const API_BASE = `https://api.telegram.org/bot${BOT_TOKEN}`

// Message sending function
export async function sendMessage(chatId: string, text: string) {
  try {
    const response = await fetch(`${API_BASE}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML'
      })
    })
    
    return await response.json()
  } catch (error) {
    console.error('Failed to send message:', error)
    throw error
  }
}

// Document sending function
export async function sendDocument(chatId: string, document: File) {
  try {
    const formData = new FormData()
    formData.append('chat_id', chatId)
    formData.append('document', document)
    
    const response = await fetch(`${API_BASE}/sendDocument`, {
      method: 'POST',
      body: formData
    })
    
    return await response.json()
  } catch (error) {
    console.error('Failed to send document:', error)
    throw error
  }
}

// Get bot info function
export async function getBotInfo() {
  try {
    const response = await fetch(`${API_BASE}/getMe`)
    return await response.json()
  } catch (error) {
    console.error('Failed to get bot info:', error)
    throw error
  }
}

// Message handler composable
export function useMessageHandler() {
  const messages = ref([])
  const loading = ref(false)
  
  async function handleMessage(chatId: string, text: string) {
    loading.value = true
    try {
      const response = await sendMessage(chatId, text)
      messages.value.push({
        id: Date.now(),
        text,
        success: response.ok
      })
    } catch (error) {
      console.error('Message handling failed:', error)
    } finally {
      loading.value = false
    }
  }
  
  return {
    messages,
    loading,
    handleMessage
  }
}