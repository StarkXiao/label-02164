<template>
  <section id="recruit" class="recruit section">
    <div class="recruit__bg"></div>
    <div class="container recruit__container">
      <div class="recruit__content">
        <h2 class="recruit__title">加入 SkyLink VA</h2>
        <p class="recruit__subtitle">
          成为我们的一员，开启您的虚拟飞行生涯
        </p>

        <div class="recruit__requirements">
          <h3 class="recruit__requirements-title">加入条件</h3>
          <ul class="recruit__requirements-list">
            <li>
              <el-icon><Check /></el-icon>
              拥有模拟飞行软件（MSFS 2020 / X-Plane / P3D）
            </li>
            <li>
              <el-icon><Check /></el-icon>
              对模拟飞行有热情，愿意学习和进步
            </li>
            <li>
              <el-icon><Check /></el-icon>
              遵守社区规则，尊重其他成员
            </li>
            <li>
              <el-icon><Check /></el-icon>
              每月至少完成 2 次航班（新手期后）
            </li>
          </ul>
        </div>

        <div class="recruit__process">
          <h3 class="recruit__process-title">申请流程</h3>
          <div class="recruit__process-steps">
            <div class="recruit__process-step" v-for="(step, index) in processSteps" :key="index">
              <div class="recruit__process-step-num">{{ index + 1 }}</div>
              <div class="recruit__process-step-content">
                <h4>{{ step.title }}</h4>
                <p>{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="recruit__ranks">
          <h3 class="recruit__ranks-title">飞行员等级</h3>
          <div class="recruit__ranks-grid">
            <div class="recruit__rank" v-for="rank in ranks" :key="rank.name">
              <div class="recruit__rank-badge" :style="{ background: rank.color }">
                {{ rank.badge }}
              </div>
              <div class="recruit__rank-info">
                <span class="recruit__rank-name">{{ rank.name }}</span>
                <span class="recruit__rank-hours">{{ rank.hours }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="recruit__actions">
          <el-button type="primary" size="large" class="recruit__btn" @click="showApplyDialog = true">
            <el-icon><Promotion /></el-icon>
            立即申请
          </el-button>
          <p class="recruit__note">申请后我们会在 48 小时内审核</p>
        </div>
      </div>
    </div>

    <el-dialog 
      v-model="showApplyDialog" 
      title="飞行员申请" 
      width="90%"
      :style="{ maxWidth: '500px' }"
      :close-on-click-modal="false"
    >
      <el-form :model="applyForm" :rules="rules" ref="formRef" label-position="top">
        <el-form-item label="姓名/昵称" prop="name">
          <el-input v-model="applyForm.name" placeholder="请输入您的姓名或昵称" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="applyForm.email" placeholder="请输入您的邮箱" />
        </el-form-item>
        <el-form-item label="VATSIM CID（如有）" prop="vatsimId">
          <el-input v-model="applyForm.vatsimId" placeholder="请输入您的 VATSIM CID" />
        </el-form-item>
        <el-form-item label="使用的模拟器" prop="simulator">
          <el-select v-model="applyForm.simulator" placeholder="请选择" style="width: 100%">
            <el-option label="Microsoft Flight Simulator 2020" value="msfs2020" />
            <el-option label="X-Plane 12" value="xplane12" />
            <el-option label="X-Plane 11" value="xplane11" />
            <el-option label="Prepar3D v5" value="p3dv5" />
            <el-option label="其他" value="other" />
          </el-select>
        </el-form-item>
        <el-form-item label="飞行经验" prop="experience">
          <el-input 
            v-model="applyForm.experience" 
            type="textarea" 
            :rows="3"
            resize="none"
            placeholder="简单介绍您的模拟飞行经验"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showApplyDialog = false">取消</el-button>
        <el-button type="primary" @click="submitApply" :loading="submitting">
          提交申请
        </el-button>
      </template>
    </el-dialog>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'

const showApplyDialog = ref(false)
const submitting = ref(false)
const formRef = ref(null)

const applyForm = reactive({
  name: '',
  email: '',
  vatsimId: '',
  simulator: '',
  experience: ''
})

const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  simulator: [{ required: true, message: '请选择模拟器', trigger: 'change' }]
}

const ranks = [
  { name: '学员', badge: 'ST', hours: '0-50h', color: '#718096' },
  { name: '副驾驶', badge: 'FO', hours: '50-200h', color: '#4299e1' },
  { name: '机长', badge: 'CA', hours: '200-500h', color: '#48bb78' },
  { name: '高级机长', badge: 'SC', hours: '500h+', color: '#ed8936' }
]

const processSteps = [
  { title: '提交申请', desc: '填写在线申请表，提供基本信息' },
  { title: '资料审核', desc: '我们会在48小时内审核您的申请' },
  { title: '入门培训', desc: '完成新手培训课程，了解规章制度' },
  { title: '首飞认证', desc: '完成首次联飞航班，正式成为飞行员' }
]

const submitApply = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate((valid) => {
    if (valid) {
      submitting.value = true
      setTimeout(() => {
        submitting.value = false
        showApplyDialog.value = false
        ElMessage.success({ message: '申请已提交，我们会尽快与您联系！', duration: 3000 })
        formRef.value.resetFields()
      }, 1500)
    }
  })
}
</script>

<style lang="scss" scoped>
.recruit {
  position: relative;
  overflow: hidden;

  &__bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, $color-primary 0%, $color-primary-light 100%);
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
  }

  &__container {
    position: relative;
    z-index: 1;
  }

  &__content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    color: white;
  }

  &__title {
    font-size: $font-size-4xl;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-4;
  }

  &__subtitle {
    font-size: $font-size-lg;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: $spacing-10;
  }

  &__requirements {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: $radius-xl;
    padding: $spacing-8;
    margin-bottom: $spacing-8;
    text-align: left;
  }

  &__requirements-title {
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    margin-bottom: $spacing-4;
  }

  &__requirements-list {
    li {
      display: flex;
      align-items: center;
      gap: $spacing-3;
      padding: $spacing-2 0;
      font-size: $font-size-base;
      color: rgba(255, 255, 255, 0.9);

      .el-icon {
        color: $color-accent;
      }
    }
  }

  &__process {
    margin-bottom: $spacing-8;
  }

  &__process-title {
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    margin-bottom: $spacing-6;
  }

  &__process-steps {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-4;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__process-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: $spacing-4;
    background: rgba(255, 255, 255, 0.1);
    border-radius: $radius-lg;
  }

  &__process-step-num {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $color-accent;
    border-radius: $radius-full;
    font-family: $font-family-heading;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-3;
  }

  &__process-step-content {
    h4 {
      font-size: $font-size-sm;
      font-weight: $font-weight-semibold;
      margin-bottom: $spacing-1;
    }

    p {
      font-size: $font-size-xs;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  &__ranks {
    margin-bottom: $spacing-10;
  }

  &__ranks-title {
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    margin-bottom: $spacing-6;
  }

  &__ranks-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-4;

    @media (min-width: $breakpoint-sm) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__rank {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-2;
    padding: $spacing-4;
    background: rgba(255, 255, 255, 0.1);
    border-radius: $radius-lg;
  }

  &__rank-badge {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: $radius-md;
    font-family: $font-family-heading;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    color: white;
  }

  &__rank-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__rank-name {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
  }

  &__rank-hours {
    font-size: $font-size-xs;
    color: rgba(255, 255, 255, 0.7);
  }

  &__actions {
    margin-top: $spacing-8;
  }

  &__btn {
    padding: $spacing-4 $spacing-10;
    font-size: $font-size-lg;
    background: $color-accent;
    border-color: $color-accent;

    &:hover {
      background: $color-accent-light;
      border-color: $color-accent-light;
    }
  }

  &__note {
    margin-top: $spacing-4;
    font-size: $font-size-sm;
    color: rgba(255, 255, 255, 0.6);
  }
}
</style>
