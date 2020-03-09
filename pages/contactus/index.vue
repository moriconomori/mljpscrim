<template>
  <div class="contactus">
    <section-header>お問い合わせ</section-header>

    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="formrun mx-3 my-6"
      action="https://form.run/api/v1/r/2qbo2kxst2r6ymv2oojw86mh"
      method="post"
    >
      <v-text-field
        v-model="name"
        outlined
        :rules="nameRules"
        color="white"
        label="お名前"
        name="お名前"
        autocomplete="off"
        required
      />

      <v-text-field
        v-model="email"
        outlined
        :rules="emailRules"
        color="white"
        label="メールアドレス"
        name="メールアドレス"
        autocomplete="off"
        required
      />

      <v-textarea
        v-model="message"
        outlined
        :rules="messageRules"
        auto-grow
        label="お問い合わせ内容"
        name="お問い合わせ内容"
        color="white"
        rows="5"
        required
      />

      <v-btn :disabled="!valid" large color="info" @click="click('confirm')">
        送信
      </v-btn>
      <button ref="submit" class="d-none" />

      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">送信確認</v-card-title>
          <v-card-text>お問い合わせを送信します。よろしいですか？</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn large text @click="click('cancel')">
              キャンセル
            </v-btn>
            <v-btn large color="info" @click="click('submit')">
              送信
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-form>
  </div>
</template>

<script>
import SectionHeader from '~/components/SectionHeader'

export default {
  components: {
    SectionHeader,
  },

  data: () => ({
    valid: true,
    name: '',
    nameRules: [(v) => !!v || 'お名前を入力して下さい'],
    email: '',
    emailRules: [
      (v) => !!v || 'メールアドレスを入力して下さい',
      (v) => /.+@.+\..+/.test(v) || '正しいメールアドレスを入力して下さい',
    ],
    message: '',
    messageRules: [(v) => !!v || 'お問い合わせ内容を入力して下さい'],
    dialog: false,
  }),

  methods: {
    click(type) {
      this.sendEventMeasurement(type)

      switch (type) {
        case 'confirm':
          this.validate()
          break
        case 'cancel':
          this.dialog = false
          break
        case 'submit':
          this.submit()
          break
        default:
          break
      }
    },

    sendEventMeasurement(eventAction) {
      this.$gtm.push({
        event: 'contactForm',
        eventAction,
      })
    },

    submit() {
      const form = this.$refs.submit.parentNode
      form.submit()
      this.dialog = false
    },

    validate() {
      if (this.$refs.form.validate()) {
        this.dialog = true
      }
    },
  },

  head() {
    return {
      title: 'Contact us',
    }
  },
}
</script>
