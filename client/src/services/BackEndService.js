import Api from '@/services/Api'

export default{
    createItem (credentials) {
        return Api().post('admin/items', credentials)
    },
    displayItems () {
        return Api().get('admin/items')
    },
    removeItem () {
        return Api().delete('admin/items/:itemId')
    },

    createUser (credentials){
        return Api().post('admin/users', credentials)
    },
    displayUsers () {
        return Api().get('admin/users')
    },
    updateUser (userId, userUpdate) {
        return Api().put(`admin/users/${userId}` , userUpdate)
    },
    removeUser (userId) {
        return Api().delete(`admin/users/${userId}`)
    },

}