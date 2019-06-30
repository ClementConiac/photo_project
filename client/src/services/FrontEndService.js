import Api from '@/services/Api'

export default{
    displayItems () {
        return Api().get('admin/items')
    },
    show (productId) {
        return Api().get(`product/${productId}`)
    },
}