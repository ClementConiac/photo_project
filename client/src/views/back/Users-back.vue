<template>
    <section class="ma-4">
        <h1 class="subheading">Users</h1>

        <v-container class="my-5">

            <v-layout row wrap justify-start class="mb-3">
                <v-dialog max-width="600px" v-model="dialog">
                    <v-btn flat slot="activator" class="primary">Add a new user</v-btn> <!-- activator make true by default -->
                        <v-card>
                            <v-card-title>
                                <h2>Add a new user</h2>
                            </v-card-title>
                            <v-card-text>
                                <v-form ref="form">
                                    <v-text-field type="text" label="Firstname" :rules="inputRules" inputRules v-model="firstname" prepend-icon="folder"></v-text-field>
                                    <v-text-field type="text" label="Lastname" :rules="inputRules" v-model="lastname" prepend-icon="folder"></v-text-field>
                                    <v-text-field type="email" label="Email" :rules="inputRules" v-model="email" prepend-icon="folder"></v-text-field>
                                    <v-text-field type="password" label="Password" :rules="inputRules" v-model="password" prepend-icon="folder"></v-text-field>
                                    <v-btn flat class="mx-0 mt-3 primary" @click="create">Save</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                </v-dialog>
            </v-layout>

            <v-card flat class="grey lighten-4" v-for="user in users" :key="user.id">
               <v-layout row wrap :class="`pa-3 user ${user.isAdmin}`">
                   <v-flex xs12 md1>
                       <div class="caption grey--text ">#</div>
                       <div>{{ user.id }}</div>
                   </v-flex>
                   <v-flex xs12 md2>
                       <div class="caption grey--text ">User firstname</div>
                       <div>{{ user.firstname }}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md2>
                       <div class="caption grey--text ">User lastname</div>
                       <div>{{ user.lastname }}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md3>
                       <div class="caption grey--text ">User email</div>
                       <div>{{ user.email }}</div>
                   </v-flex>
                   <v-flex xs2 sm4 md2>
                       <div class="caption grey--text ">User password</div>
                       <div class="text-truncate">{{ user.password }}</div>
                   </v-flex>
                    <v-flex xs12 sm4 md2>
                        <v-dialog max-width="600px">
                            <v-btn flat slot="activator" class="orange accent--text">Modify</v-btn>
                                <v-card>
                                    <v-card-title>
                                        <h2>Modify an user</h2>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-form>
                                            <v-text-field type="text" label="Firstname" v-model="firstname" prepend-icon="folder"></v-text-field>
                                            <v-text-field type="text" label="Lastname" v-model="lastname" prepend-icon="folder"></v-text-field>
                                            <v-text-field type="email" label="Email" v-model="email" prepend-icon="folder"></v-text-field>
                                            <v-text-field type="password" label="Password" v-model="password" prepend-icon="folder"></v-text-field>
                                            <v-btn flat class="mx-0 mt-3 primary" @click="modify">Modify</v-btn>
                                        </v-form>
                                    </v-card-text>
                                </v-card>
                        </v-dialog>
                        <v-btn flat class="red accent--text" :to="{name:'admin-users-id', params:{userId: user.id}}" @click="remove">Delete</v-btn>
                   </v-flex>
               </v-layout>
               <v-divider></v-divider>
           </v-card>
        </v-container>
    </section>
</template>

<script>
import BackEndService from '@/services/BackEndService'

export default {
    data () {
        return {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            dialog: false,
            users: null
            
        }
    },
    async mounted () {
        this.users = (await BackEndService.displayUsers()).data
    },
    methods: {
        async create() {
            if (this.$refs.form.validate()){
                try{
                const response = await BackEndService.createUser({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password
                }).then(() => {
                    this.dialog = false
                    this.$router.push({
                        name: 'admin-users'
                    })
                })
                } catch (error) {
                    this.error = error.response.data.error
                }
            }
        },

        modify () {
            /* console.log(this.title, this.description) */
        },
        async remove() {
            try{
                const response = await BackEndService.removeUser()
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    }
}
</script>

<style scoped>
    .user.large {
        border-left: 4px solid green;
    }
    .user.medium {
        border-left: 4px solid orange;
    }
    .user.small {
        border-left: 4px solid red;
    }
</style>