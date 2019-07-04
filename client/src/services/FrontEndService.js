import Api from '@/services/Api'

export default{
    displayItems () {
        return Api().post('home')
    },

    index (params) {
        return Api().get('account', {
            params: params
        })
    },
    createAdress (credentials){
        return Api().post('/account', credentials)
    },
    updateAdress (adressId, adressUpdate) {
        return Api().put(`account/${adressId}` , adressUpdate)
    },
    removeAdress (adressId) {
        return Api().delete(`account/${adressId}`)
    },

    order (params) {
        return Api().get('account', {
            params: params
        })
    },
}