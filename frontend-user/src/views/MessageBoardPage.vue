<template>
  <div class="message-board">
    <div class="container">
      <h2 class="section-title">留言板</h2>
      <p class="section-subtitle">
        欢迎在留言板分享您的想法和建议
      </p>

      <div class="message-board__content">
        <!-- 留言表单 -->
        <div class="message-board__form-wrapper">
          <div class="message-board__form-card">
            <h3 class="message-board__form-title">发表留言</h3>
            <el-form :model="messageForm" :rules="rules" ref="formRef" label-position="top">
              <el-form-item label="昵称" prop="nickname">
                <el-input v-model="messageForm.nickname" placeholder="请输入您的昵称" />
              </el-form-item>
              <el-form-item label="邮箱（选填）" prop="email">
                <el-input v-model="messageForm.email" placeholder="请输入您的邮箱（用于回复）" />
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

        <!-- 留言列表 -->
        <div class="message-board__list">
          <div class="message-board__list-header">
            <h3 class="message-board__list-title">最新留言</h3>
            <el-badge :value="messages.length" class="item">
              <el-button size="small" type="primary" plain @click="refreshMessages">
                刷新
              </el-button>
            </el-badge>
          </div>
          
          <div v-if="messages.length === 0" class="message-board__empty">
            <el-empty description="暂无留言，快来发表第一条吧！" />
          </div>
          
          <div v-else class="message-board__messages">
            <div 
              v-for="message in messages" 
              :key="message.id" 
              class="message-board__message-item"
              :class="{ 'message-board__message-item--featured': message.featured }"
            >
              <div class="message-board__message-header">
                <div class="message-board__message-avatar">
                  <el-avatar :size="40" :src="message.avatar" />
                </div>
                <div class="message-board__message-info">
                  <span class="message-board__message-name">{{ message.nickname }}</span>
                  <span class="message-board__message-time">{{ formatTime(message.createdAt) }}</span>
                </div>
                <el-tag 
                  v-if="message.featured" 
                  type="success" 
                  size="small"
                  class="message-board__message-badge"
                >
                  精选
                </el-tag>
              </div>
              <div class="message-board__message-content">
                {{ message.content }}
              </div>
              <div class="message-board__message-actions">
                <el-button 
                  type="text" 
                  size="small" 
                  @click="likeMessage(message)"
                >
                  <el-icon><ThumbUp /></el-icon>
                  {{ message.likes }}
                </el-button>
                <el-button 
                  type="text" 
                  size="small" 
                  @click="replyToMessage(message)"
                >
                  <el-icon><ChatDotRound /></el-icon>
                  回复
                </el-button>
              </div>
              
              <!-- 回复列表 -->
              <div v-if="message.replies && message.replies.length > 0" class="message-board__replies">
                <div 
                  v-for="reply in message.replies" 
                  :key="reply.id" 
                  class="message-board__reply-item"
                >
                  <div class="message-board__reply-header">
                    <el-avatar :size="28" :src="reply.avatar" />
                    <span class="message-board__reply-name">{{ reply.nickname }}</span>
                    <span class="message-board__reply-time">{{ formatTime(reply.createdAt) }}</span>
                  </div>
                  <div class="message-board__reply-content">
                    {{ reply.content }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ThumbUp, ChatDotRound } from '@element-plus/icons-vue'

const formRef = ref(null)
const submitting = ref(false)

// 留言表单数据
const messageForm = reactive({
  nickname: '',
  email: '',
  content: ''
})

// 表单验证规则
const rules = {
  nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
  content: [{ required: true, message: '请输入留言内容', trigger: 'blur' }],
  email: [
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ]
}

// 模拟留言数据
const messages = ref([
  {
    id: 1,
    nickname: '飞行爱好者',
    email: 'flyer@example.com',
    content: '这个平台真的太棒了！加入以来学到了很多飞行知识，感谢团队的付出！',
    avatar: '',
    likes: 12,
    featured: true,
    createdAt: new Date('2024-03-20T10:30:00'),
    replies: [
      {
        id: 1,
        nickname: '管理员',
        content: '感谢您的支持！我们会继续努力提供更好的服务。',
        avatar: '',
        createdAt: new Date('2024-03-20T11:00:00')
      }
    ]
  },
  {
    id: 2,
    nickname: '蓝天飞行员',
    email: 'pilot@example.com',
    content: '请问有飞行新手的培训课程吗？想系统学习一下基础操作。',
    avatar: '',
    likes: 5,
    featured: false,
    createdAt: new Date('2024-03-19T15:20:00'),
    replies: []
  },
  {
    id: 3,
    nickname: '云端漫步',
    email: 'cloud@example.com',
    content: '昨天参加了联飞活动，体验非常好！希望以后能有更多这样的活动。',
    avatar: '',
    likes: 8,
    featured: false,
    createdAt: new Date('2024-03-18T09:45:00'),
    replies: []
  }
])

// 格式化时间
const formatTime = (date) => {
  const now = new Date()
  const diff = now - new Date(date)
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  
  if (minutes < 60) {
    return `${minutes}分钟前`
  } else if (hours < 24) {
    return `${hours}小时前`
  } else if (days < 7) {
    return `${days}天前`
  } else {
    return new Date(date).toLocaleDateString('zh-CN')
  }
}

// 提交留言
const submitMessage = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate((valid) => {
    if (valid) {
      submitting.value = true
      setTimeout(() => {
        // 模拟API调用
        const newMessage = {
          id: messages.value.length + 1,
          nickname: messageForm.nickname,
          email: messageForm.email,
          content: messageForm.content,
          avatar: '',
          likes: 0,
          featured: false,
          createdAt: new Date(),
          replies: []
        }
        
        messages.value.unshift(newMessage)
        submitting.value = false
        ElMessage.success('留言发表成功！')
        formRef.value.resetFields()
      }, 1500)
    }
  })
}

// 点赞留言
const likeMessage = (message) => {
  message.likes++
  ElMessage.success('点赞成功！')
}

// 回复留言
const replyToMessage = (message) => {
  ElMessageBox.prompt('请输入回复内容', '回复留言', {
    confirmButtonText: '发送',
    cancelButtonText: '取消',
    inputPlaceholder: '请输入回复内容...',
    inputType: 'textarea',
    inputValidator: (value) => {
      if (!value || value.trim() === '') {
        return '回复内容不能为空'
      }
      return true
    }
  }).then(({ value }) => {
    if (value) {
      // 模拟回复
      message.replies = message.replies || []
      message.replies.push({
        id: message.replies.length + 1,
        nickname: '当前用户',
        content: value,
        avatar: '',
        createdAt: new Date()
      })
      ElMessage.success('回复成功！')
    }
  }).catch(() => {
    // 用户取消
  })
}

// 刷新留言
const refreshMessages = () => {
  ElMessage.info('留言已刷新')
}

onMounted(() => {
  // 页面加载时的初始化操作
})
</script>

<style lang="scss" scoped>
.message-board {
  padding: 5rem 0;
  background: $color-bg-secondary;
  min-height: 80vh;

  .section-title {
    color: $color-primary;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .section-subtitle {
    text-align: center;
    color: $color-text-secondary;
    margin-bottom: 3rem;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-8;

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: 1fr 1.5fr;
      align-items: start;
    }
  }

  &__form-wrapper {
    .message-board__form-card {
      background: white;
      border-radius: $radius-xl;
      padding: $spacing-8;
      box-shadow: $shadow-lg;
    }

    .message-board__form-title {
      font-size: $font-size-xl;
      font-weight: $font-weight-semibold;
      color: $color-primary;
      margin-bottom: $spacing-6;
    }
  }

  &__list {
    .message-board__list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: $spacing-4;
    }

    .message-board__list-title {
      font-size: $font-size-xl;
      font-weight: $font-weight-semibold;
      color: $color-primary;
      margin: 0;
    }

    .message-board__empty {
      padding: $spacing-8;
      text-align: center;
    }

    .message-board__messages {
      display: flex;
      flex-direction: column;
      gap: $spacing-4;
    }

    .message-board__message-item {
      background: white;
      border-radius: $radius-lg;
      padding: $spacing-6;
      box-shadow: $shadow-sm;
      transition: all 0.3s ease;

      &:hover {
        box-shadow: $shadow-md;
        transform: translateY(-2px);
      }

      &--featured {
        border-left: 4px solid $color-primary;
        background: linear-gradient(to right, rgba($color-primary, 0.05), white);
      }

      .message-board__message-header {
        display: flex;
        align-items: center;
        gap: $spacing-4;
        margin-bottom: $spacing-4;
      }

      .message-board__message-info {
        flex: 1;
      }

      .message-board__message-name {
        font-weight: $font-weight-semibold;
        color: $color-text-primary;
        margin-right: $spacing-2;
      }

      .message-board__message-time {
        font-size: $font-size-sm;
        color: $color-text-light;
      }

      .message-board__message-badge {
        margin-left: auto;
      }

      .message-board__message-content {
        color: $color-text-primary;
        line-height: 1.6;
        margin-bottom: $spacing-4;
        word-wrap: break-word;
      }

      .message-board__message-actions {
        display: flex;
        gap: $spacing-4;
      }

      .message-board__replies {
        margin-top: $spacing-4;
        padding-top: $spacing-4;
        border-top: 1px solid $color-border;
      }

      .message-board__reply-item {
        background: $color-bg-secondary;
        border-radius: $radius-md;
        padding: $spacing-3 $spacing-4;
        margin-bottom: $spacing-2;

        .message-board__reply-header {
          display: flex;
          align-items: center;
          gap: $spacing-2;
          margin-bottom: $spacing-2;
        }

        .message-board__reply-name {
          font-weight: $font-weight-medium;
          color: $color-text-primary;
        }

        .message-board__reply-time {
          font-size: $font-size-xs;
          color: $color-text-light;
        }

        .message-board__reply-content {
          color: $color-text-primary;
          font-size: $font-size-sm;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>