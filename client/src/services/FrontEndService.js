import Api from '@/services/Api'

export default{
    displayItems () {
        return Api().post('home')
    },
}