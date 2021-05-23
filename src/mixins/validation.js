export const emailValidation = {
    methods: {
        emailValidation(email) {
            const result = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            return result
        }
    }
}