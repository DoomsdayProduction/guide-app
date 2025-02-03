<script setup lang="ts">
import { ref } from 'vue'

const files = ref<File[]>([])
const uploading = ref(false)
const uploadStatus = ref('')

const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files) {
    files.value = Array.from(input.files)
  }
}

const uploadFiles = async () => {
  if (files.value.length === 0) return
  
  uploading.value = true
  uploadStatus.value = 'Uploading...'
  
  try {
    for (const file of files.value) {
      // Only allow markdown and text files
      if (!file.name.match(/\.(md|txt)$/i)) {
        throw new Error('Only .md and .txt files are allowed')
      }
      
      // Read file content
      const content = await file.text()
      
      // Here you would typically send to your backend
      console.log(`Uploading ${file.name}:`, content)
    }
    
    uploadStatus.value = 'Upload complete!'
    files.value = []
  } catch (error) {
    uploadStatus.value = error instanceof Error ? error.message : 'Upload failed'
  } finally {
    uploading.value = false
  }
}
</script>

<template>
  <div class="upload-area">
    <div class="upload-header">
      <h3>File Upload</h3>
      <div class="upload-types">Supported: .md, .txt</div>
    </div>
    
    <div class="upload-dropzone" 
         :class="{ uploading }"
         @dragover.prevent
         @drop.prevent="handleFileSelect">
      <input 
        type="file" 
        multiple
        accept=".md,.txt"
        @change="handleFileSelect"
        class="file-input"
      >
      <div class="dropzone-content">
        <span class="icon">📄</span>
        <p>Drag files here or click to select</p>
      </div>
    </div>
    
    <div v-if="files.length > 0" class="file-list">
      <div v-for="file in files" 
           :key="file.name"
           class="file-item">
        <span class="file-name">{{ file.name }}</span>
        <span class="file-size">{{ (file.size / 1024).toFixed(1) }}kb</span>
      </div>
    </div>
    
    <div class="upload-actions">
      <button 
        class="upload-button"
        :disabled="files.length === 0 || uploading"
        @click="uploadFiles"
      >
        {{ uploading ? 'Uploading...' : 'Upload Files' }}
      </button>
      <div v-if="uploadStatus" 
           class="upload-status"
           :class="{ error: uploadStatus.includes('failed') }">
        {{ uploadStatus }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.upload-area {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 0.75rem;
  border: 1px solid var(--vp-c-border);
}

.upload-header {
  margin-bottom: 1rem;
}

.upload-types {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.upload-dropzone {
  position: relative;
  padding: 2rem;
  border: 2px dashed var(--vp-c-border);
  border-radius: 0.5rem;
  background: var(--vp-c-bg-alt);
  transition: all 0.3s ease;
  cursor: pointer;
}

.upload-dropzone:hover {
  border-color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft);
}

.upload-dropzone.uploading {
  opacity: 0.7;
  cursor: not-allowed;
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.dropzone-content {
  text-align: center;
}

.icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}

.file-list {
  margin: 1rem 0;
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  overflow: hidden;
}

.file-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-border);
}

.file-item:last-child {
  border-bottom: none;
}

.file-name {
  font-family: monospace;
  color: var(--vp-c-brand);
}

.file-size {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
}

.upload-actions {
  margin-top: 1rem;
}

.upload-button {
  padding: 0.75rem 1.5rem;
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.upload-button:hover:not(:disabled) {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
}

.upload-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.upload-status {
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-brand);
}

.upload-status.error {
  background: rgba(255, 0, 0, 0.1);
  color: #ff0000;
}
</style>