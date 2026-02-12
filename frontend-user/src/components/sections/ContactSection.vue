<template>
  <section id="contact" class="contact section">
    <div class="container">
      <h2 class="section-title">联系我们</h2>
      <p class="section-subtitle">
        有任何问题或建议？欢迎随时与我们联系
      </p>

      <div class="contact__grid">
        <div class="contact__info">
          <div class="contact__info-card">
            <div class="contact__info-item">
              <div class="contact__info-icon">
                <el-icon :size="24"><Message /></el-icon>
              </div>
              <div class="contact__info-content">
                <h4 class="contact__info-title">邮箱</h4>
                <p class="contact__info-value">contact@skylink-va.com</p>
              </div>
            </div>

            <div class="contact__info-item">
              <div class="contact__info-icon">
                <el-icon :size="24"><ChatDotRound /></el-icon>
              </div>
              <div class="contact__info-content">
                <h4 class="contact__info-title">Discord</h4>
                <p class="contact__info-value">discord.gg/skylinkva</p>
              </div>
            </div>

            <div class="contact__info-item">
              <div class="contact__info-icon">
                <el-icon :size="24"><Service /></el-icon>
              </div>
              <div class="contact__info-content">
                <h4 class="contact__info-title">QQ 群</h4>
                <p class="contact__info-value">123456789</p>
              </div>
            </div>

            <div class="contact__info-item">
              <div class="contact__info-icon">
                <el-icon :size="24"><Clock /></el-icon>
              </div>
              <div class="contact__info-content">
                <h4 class="contact__info-title">响应时间</h4>
                <p class="contact__info-value">通常在 24 小时内回复</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact__form-wrapper">
          <div class="contact__form-card">
            <h3 class="contact__form-title">发送消息</h3>
            <el-form :model="contactForm" :rules="rules" ref="formRef" label-position="top">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="contactForm.name" placeholder="请输入您的姓名" />
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="contactForm.email" placeholder="请输入您的邮箱" />
              </el-form-item>
              <el-form-item label="主题" prop="subject">
                <el-select v-model="contactForm.subject" placeholder="请选择主题" style="width: 100%">
                  <el-option label="一般咨询" value="general" />
                  <el-option label="加入申请" value="join" />
                  <el-option label="技术支持" value="support" />
                  <el-option label="合作洽谈" value="cooperation" />
                  <el-option label="其他" value="other" />
                </el-select>
              </el-form-item>
              <el-form-item label="消息内容" prop="message">
                <el-input 
                  v-model="contactForm.message" 
                  type="textarea" 
                  :rows="4"
                  placeholder="请输入您的消息"
                />
              </el-form-item>
              <el-form-item>
                <el-button 
                  type="primary" 
                  size="large" 
                  style="width: 100%"
                  @click="submitForm"
                  :loading="submitting"
                >
                  发送消息
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const formRef = ref(null)
const submitting = ref(false)

const contactForm = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  subject: [{ required: true, message: '请选择主题', trigger: 'change' }],
  message: [{ required: true, message: '请输入消息内容', trigger: 'blur' }]
}

const submitForm = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate((valid) => {
    if (valid) {
      submitting.value = true
      setTimeout(() => {
        submitting.value = false
        ElMessage.success('消息已发送，我们会尽快回复您！')
        formRef.value.resetFields()
      }, 1500)
    }
  })
}
</script>

<style lang="scss" scoped>
.contact {
  background: $color-bg-secondary;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-8;

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: 1fr 1.2fr;
      align-items: start;
    }
  }

  &__info-card {
    background: linear-gradient(135deg, $color-primary 0%, $color-primary-light 100%);
    border-radius: $radius-xl;
    padding: $spacing-8;
    color: white;
  }

  &__info-item {
    display: flex;
    gap: $spacing-4;
    padding: $spacing-4 0;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }

  &__info-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: $radius-md;
  }

  &__info-title {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: $spacing-1;
  }

  &__info-value {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
  }

  &__form-card {
    background: white;
    border-radius: $radius-xl;
    padding: $spacing-8;
    box-shadow: $shadow-lg;
  }

  &__form-title {
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
    color: $color-primary;
    margin-bottom: $spacing-6;
  }
}
</style>
