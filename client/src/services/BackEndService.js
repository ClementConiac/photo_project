import Api from '@/services/Api'

export default{
    create (credentials){
        return Api().post('admin/items', credentials)
    },
    displayItems () {
        return Api().get('admin/items')
    },
    remove () {
        return Api().delete('admin/items/:itemId')
    },
}