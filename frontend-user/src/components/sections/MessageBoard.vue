<template>
  <section id="message-board" class="message-board section">
    <div class="container">
      <h2 class="section-title">留言板</h2>
      <p class="section-subtitle">
        分享您的想法和建议，与我们一起成长
      </p>

      <div class="message-board__grid">
        <div class="message-board__form-wrapper">
          <div class="message-board__form-card">
            <h3 class="message-board__form-title">发表留言</h3>
            <el-form :model="messageForm" :rules="rules" ref="formRef" label-position="top">
              <el-form-item label="昵称" prop="nickname">
                <el-input v-model="messageForm.nickname" placeholder="请输入您的昵称" />
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="messageForm.email" placeholder="请输入您的邮箱（选填）" />
              </el-form-item>
              <el-form-item label="留言内容" prop="content">
                <el-input 
                  v-model="messageForm.content" 
                  type="textarea" 
                  :rows="4"
                  placeholder="请输入您的留言内容"
                  maxlength="500"
                  show-word-limit
                />
              </el-form-item>
              <el-form-item>
                <el-button 
                  type="primary" 
                  size="large" 
                  style="width: 100%"
                  @click="submitMessage"
                  :loading="submitting"
                >
                  发表留言
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="message-board__list-wrapper">
          <div class="message-board__list-header">
            <h3 class="message-board__list-title">最新留言</h3>
            <el-badge :value="messages.length" class="item">
              <el-icon><ChatDotRound /></el-icon>
            </el-badge>
          </div>
          
          <div class="message-board__list" v-if="messages.length > 0">
            <div class="message-board__item" v-for="(message, index) in messages" :key="message.id">
              <div class="message-board__item-header">
                <div class="message-board__avatar">
                  {{ message.nickname.charAt(0).toUpperCase() }}
                </div>
                <div class="message-board__info">
                  <div class="message-board__name">{{ message.nickname }}</div>
                  <div class="message-board__time">
                    <el-icon><Clock /></el-icon>
                    {{ formatTime(message.timestamp) }}
                  </div>
                </div>
              </div>
              <div class="message-board__content">
                {{ message.content }}
              </div>
              <div class="message-board__footer">
                <el-button 
                  type="text" 
                  size="small" 
                  @click="likeMessage(index)"
                  class="message-board__like-btn"
                >
                  <el-icon><Star /></el-icon>
                  <span>{{ message.likes }}</span>
                </el-button>
                <el-button 
                  type="text" 
                  size="small" 
                  @click="toggleReply(index)"
                  class="message-board__reply-btn"
                >
                  <el-icon><ChatDotRound /></el-icon>
                  <span>回复</span>
                </el-button>
              </div>
              
              <div class="message-board__reply-form" v-if="message.showReply">
                <el-input 
                  v-model="message.replyContent" 
                  type="textarea" 
                  :rows="2"
                  placeholder="写下您的回复..."
                  size="small"
                />
                <div class="message-board__reply-actions">
                  <el-button 
                    size="small" 
                    @click="message.showReply = false"
                  >
                    取消
                  </el-button>
                  <el-button 
                    type="primary" 
                    size="small" 
                    @click="submitReply(index)"
                    :disabled="!message.replyContent.trim()"
                  >
                    发送回复
                  </el-button>
                </div>
              </div>
              
              <div class="message-board__replies" v-if="message.replies && message.replies.length > 0">
                <div class="message-board__reply-item" v-for="(reply, rIndex) in message.replies" :key="rIndex">
                  <div class="message-board__reply-header">
                    <span class="message-board__reply-name">{{ reply.nickname }}</span>
                    <span class="message-board__reply-time">{{ formatTime(reply.timestamp) }}</span>
                  </div>
                  <div class="message-board__reply-content">{{ reply.content }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="message-board__empty" v-else>
            <el-empty description="暂无留言，快来发表第一条留言吧！" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { ChatDotRound, Clock, Star } from '@element-plus/icons-vue'

const formRef = ref(null)
const submitting = ref(false)

const messageForm = reactive({
  nickname: '',
  email: '',
  content: ''
})

const rules = {
  nickname: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
    { min: 2, max: 20, message: '昵称长度在 2 到 20 个字符', trigger: 'blur' }
  ],
  email: [
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  content: [
    { required: true, message: '请输入留言内容', trigger: 'blur' },
    { min: 5, max: 500, message: '留言内容长度在 5 到 500 个字符', trigger: 'blur' }
  ]
}

const messages = ref([
  {
    id: 1,
    nickname: '张先生',
    email: '',
    content: '非常专业的团队，服务态度很好，合作很愉快！希望未来能有更多合作机会。',
    timestamp: Date.now() - 86400000 * 2,
    likes: 5,
    showReply: false,
    replyContent: '',
    replies: [
      {
        nickname: '管理员',
        content: '感谢您的支持！我们会继续努力提供更优质的服务。',
        timestamp: Date.now() - 86400000
      }
    ]
  },
  {
    id: 2,
    nickname: '李女士',
    email: '',
    content: '平台功能很完善，操作简单易懂，推荐给大家使用！',
    timestamp: Date.now() - 86400000,
    likes: 3,
    showReply: false,
    replyContent: '',
    replies: []
  }
])

const submitMessage = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate((valid) => {
    if (valid) {
      submitting.value = true
      setTimeout(() => {
        messages.value.unshift({
          id: Date.now(),
          nickname: messageForm.nickname,
          email: messageForm.email,
          content: messageForm.content,
          timestamp: Date.now(),
          likes: 0,
          showReply: false,
          replyContent: '',
          replies: []
        })
        submitting.value = false
        ElMessage.success('留言发表成功！')
        formRef.value.resetFields()
      }, 1000)
    }
  })
}

const likeMessage = (index) => {
  messages.value[index].likes++
}

const toggleReply = (index) => {
  messages.value[index].showReply = !messages.value[index].showReply
  if (!messages.value[index].showReply) {
    messages.value[index].replyContent = ''
  }
}

const submitReply = (index) => {
  if (!messages.value[index].replyContent.trim()) return
  
  messages.value[index].replies.push({
    nickname: '匿名用户',
    content: messages.value[index].replyContent,
    timestamp: Date.now()
  })
  messages.value[index].showReply = false
  messages.value[index].replyContent = ''
  ElMessage.success('回复成功！')
}

const formatTime = (timestamp) => {
  const now = Date.now()
  const diff = now - timestamp
  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour
  
  if (diff < minute) {
    return '刚刚'
  } else if (diff < hour) {
    return Math.floor(diff / minute) + '分钟前'
  } else if (diff < day) {
    return Math.floor(diff / hour) + '小时前'
  } else if (diff < day * 30) {
    return Math.floor(diff / day) + '天前'
  } else {
    const date = new Date(timestamp)
    return date.toLocaleDateString('zh-CN')
  }
}

onMounted(() => {
  const savedMessages = localStorage.getItem('messageBoardMessages')
  if (savedMessages) {
    try {
      messages.value = JSON.parse(savedMessages)
    } catch (e) {
      console.error('Failed to parse saved messages')
    }
  }
})

watch(messages, (newMessages) => {
  localStorage.setItem('messageBoardMessages', JSON.stringify(newMessages))
}, { deep: true })
</script>

<style lang="scss" scoped>
.message-board {
  background: $color-bg-primary;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-8;

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: 1fr 1.5fr;
      align-items: start;
    }
  }

  &__form-card {
    background: white;
    border-radius: $radius-xl;
    padding: $spacing-8;
    box-shadow: $shadow-lg;
    position: sticky;
    top: $spacing-8;
  }

  &__form-title {
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
    color: $color-primary;
    margin-bottom: $spacing-6;
  }

  &__list-wrapper {
    background: white;
    border-radius: $radius-xl;
    padding: $spacing-8;
    box-shadow: $shadow-lg;
    min-height: 400px;
  }

  &__list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-6;
    padding-bottom: $spacing-4;
    border-bottom: 1px solid $color-border-light;

    .item {
      .el-icon {
        font-size: $font-size-xl;
        color: $color-primary;
      }
    }
  }

  &__list-title {
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin: 0;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: $spacing-6;
    max-height: 600px;
    overflow-y: auto;
    padding-right: $spacing-2;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: $color-bg-secondary;
      border-radius: $radius-full;
    }

    &::-webkit-scrollbar-thumb {
      background: $color-text-light;
      border-radius: $radius-full;
    }
  }

  &__item {
    padding: $spacing-6;
    background: $color-bg-secondary;
    border-radius: $radius-lg;
    transition: all $transition-normal;

    &:hover {
      box-shadow: $shadow-md;
      transform: translateY(-2px);
    }
  }

  &__item-header {
    display: flex;
    align-items: center;
    gap: $spacing-4;
    margin-bottom: $spacing-4;
  }

  &__avatar {
    width: 48px;
    height: 48px;
    border-radius: $radius-full;
    background: linear-gradient(135deg, $color-primary 0%, $color-primary-light 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    flex-shrink: 0;
  }

  &__info {
    flex: 1;
  }

  &__name {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
    margin-bottom: $spacing-1;
  }

  &__time {
    font-size: $font-size-sm;
    color: $color-text-secondary;
    display: flex;
    align-items: center;
    gap: $spacing-1;

    .el-icon {
      font-size: $font-size-sm;
    }
  }

  &__content {
    font-size: $font-size-base;
    color: $color-text-primary;
    line-height: $line-height-relaxed;
    margin-bottom: $spacing-4;
    word-wrap: break-word;
  }

  &__footer {
    display: flex;
    gap: $spacing-4;
    padding-top: $spacing-4;
    border-top: 1px solid $color-border-light;
  }

  &__like-btn,
  &__reply-btn {
    display: flex;
    align-items: center;
    gap: $spacing-2;
    color: $color-text-secondary;
    transition: color $transition-fast;

    &:hover {
      color: $color-primary;
    }

    .el-icon {
      font-size: $font-size-base;
    }

    span {
      font-size: $font-size-sm;
    }
  }

  &__reply-form {
    margin-top: $spacing-4;
    padding: $spacing-4;
    background: $color-bg-primary;
    border-radius: $radius-md;

    .el-textarea {
      margin-bottom: $spacing-4;
    }
  }

  &__reply-actions {
    display: flex;
    justify-content: flex-end;
    gap: $spacing-2;
  }

  &__replies {
    margin-top: $spacing-4;
    padding-left: $spacing-6;
    border-left: 3px solid $color-primary-light;
  }

  &__reply-item {
    padding: $spacing-4;
    background: $color-bg-primary;
    border-radius: $radius-md;
    margin-bottom: $spacing-3;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__reply-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-2;
  }

  &__reply-name {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-primary;
  }

  &__reply-time {
    font-size: $font-size-xs;
    color: $color-text-light;
  }

  &__reply-content {
    font-size: $font-size-sm;
    color: $color-text-primary;
    line-height: $line-height-relaxed;
  }

  &__empty {
    padding: $spacing-12 0;
  }
}
</style>