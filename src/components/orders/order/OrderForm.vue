<template>
    <div class="sv-order__form">
        <form  v-on:submit.prevent>
            <input class="sv-input" type="text" placeholder="имя" v-model="form.name">
            <input v-mask="mask" class="sv-input" type="text" placeholder="+7(999) 999-99-99" v-model="form.phone">
            <input class="sv-input" type="text" placeholder="email" v-model="form.email">
            <div class="sv-order__form__accept">
                <input 
                    class="sv-form__checkup" 
                    :class="{'sv-form__checkup_active': form.accept}"
                    type="checkbox" 
                    v-model="form.accept"
                >
                <span>{{ acceptNote }}</span>
            </div>
        </form>
        <section class="sv-order__next">
            <div>
                <span v-if="!formValid">заполните поля формы</span>
                <button
                    @click="validateAndProceed()" 
                    class="sv-button sv-button_style-1 sv-button_style-2">
                    {{ "продолжить".toUpperCase() }}
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'OrderForm',

    data() {
        return {
            form: {
                name: '',
                phone: '',
                email: '',
                accept: false
            },
            mask: '+7(###) ###-##-##',
            acceptNote: 'Сообщайте мне о скидках, распродажах и новых акциях',
            formValid: true
        }
    },
    computed: {
        ...mapState('orders', [
            'CURRENT_ORDER'
        ])
    },
    mounted() {
        this.form = {
            name: this.CURRENT_ORDER.personalData && this.CURRENT_ORDER.personalData.name ? this.CURRENT_ORDER.personalData.name : '',
            phone: this.CURRENT_ORDER.personalData && this.CURRENT_ORDER.personalData.phone ? this.CURRENT_ORDER.personalData.phone : '',
            email: this.CURRENT_ORDER.personalData && this.CURRENT_ORDER.personalData.email ? this.CURRENT_ORDER.personalData.email : '',
            accept: this.CURRENT_ORDER.personalData && this.CURRENT_ORDER.personalData.accept ? this.CURRENT_ORDER.personalData.accept : ''
        }
    },
    methods: {
        ...mapActions('orders', {
            nextStep: 'CHANGE_ORDER_STEPS',
            addPersonalData: 'SET_ITEM_PERSONAL_DATA'
        }),

        validate() {
            let valid = true

            for (let key in this.form) {
                if (Object.prototype.hasOwnProperty.call(this.form, key)) {
                    if (!this.form[key]) valid = false
                }
            }

            this.formValid = valid

            return valid
        },
        validateAndProceed() {
            if (this.validate()) {                
                this.nextStep(3)
            }
        }
    },
    watch: {
        form: {
            handler(val) {
                this.addPersonalData({
                    name: val.name,
                    phone: val.phone,
                    email: val.email,
                    accept: val.accept
                })
            },
            deep: true
        }
    }
}
</script>