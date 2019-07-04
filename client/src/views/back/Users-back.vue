<template>
    <section class="ma-4">
        <h1 class="subheading">Users</h1>

        <v-container class="my-5">

            <v-layout row wrap justify-start class="mb-3">
                <v-dialog max-width="600px" v-model="dialog">
                    <v-btn flat slot="activator" class="primary ml-0">Add a new user</v-btn> <!-- activator make true by default -->
                        <v-card>
                            <v-card-title>
                                <h2>Add a new user</h2>
                            </v-card-title>
                            <v-card-text>
                                <v-form ref="form">
                                    <v-text-field type="text" label="Firstname" :rules="inputRules" v-model="firstname" prepend-icon="folder"></v-text-field>
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
               <v-layout row wrap :class="`pa-3 user-color`">
                   <v-flex xs12 md1>
                       <div class="caption grey--text ">#</div>
                       <div>{{ user.id }}</div>
                   </v-flex>
                   <v-flex xs12 md2>
                       <div class="caption grey--text ">Firstname</div>
                       <div>{{ user.firstname }}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md2>
                       <div class="caption grey--text ">Lastname</div>
                       <div>{{ user.lastname }}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md3>
                       <div class="caption grey--text ">Email</div>
                       <div>{{ user.email }}</div>
                   </v-flex>
                   <v-flex xs2 sm4 md2>
                       <div class="caption grey--text ">Password</div>
                       <div class="text-truncate">{{ user.password }}</div>
                   </v-flex>
                    <v-flex xs12 sm4 md2>
                        <v-dialog max-width="600px">
                            <v-btn flat slot="activator" class="orange accent--text" :to="{name:'admin-users-id', params:{userId: user.id}}">Modify</v-btn>
                                <v-card>
                                    <v-card-title>
                                        <h2>Modify an user</h2>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-form ref="formUpdate">
                                            <v-text-field type="text" label="Firstname" :rules="inputRules" :placeholder="user.firstname" v-model="userUpdate.firstname" prepend-icon="account_box"></v-text-field>
                                            <v-text-field type="text" label="Lastname" :rules="inputRules" :placeholder="user.lastname" v-model="userUpdate.lastname" prepend-icon="account_box"></v-text-field>
                                            <v-text-field type="email" label="Email" :rules="inputRules" :placeholder="user.email" v-model="userUpdate.email" prepend-icon="email"></v-text-field>
                                            <v-text-field type="password" label="Password" :rules="inputRules" :placeholder="user.password" v-model="userUpdate.password" prepend-icon="fingerprint"></v-text-field>
                                            <v-select item-value :items="items" item-text="state" label="Admin" prepend-icon="supervisor_account"></v-select>
                                            <v-btn flat class="mx-0 mt-3 primary" @click="modify">Modify</v-btn>
                                        </v-form>
                                    </v-card-text>
                                </v-card>
                        </v-dialog>
                        <v-dialog max-width="290">
                            <v-btn flat slot="activator" class="red accent--text" :to="{name:'admin-users-id', params:{userId: user.id}}">Delete</v-btn>
                            <v-card>
                                <v-card-title class="headline">Verification</v-card-title>

                                <v-card-text>
                                    <p>Are you sure you want to delete <span class="font-weight-bold">{{ user.firstname }} {{ user.lastname }} / {{user.email}} ?</span></p>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn class="primary accent--text" flat @click="dialogSecure = !dialogSecure">
                                        Disagree
                                    </v-btn>

                                    <v-btn class="error accent--text" flat @click="remove">
                                        Agree
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
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
            userUpdate: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                selectAdmin: '',
            },
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            dialog: false,
            dialogSecure: false,
            users: null,
            items: [
                { state: false},
                { state: true},
            ]
        }
    },
    async mounted () {
        if(!this.$store.state.isUserLoggedIn || !this.$store.state.user.isAdmin) {
            this.$router.push({
                name: 'home'
            })
        }
        this.users = (await BackEndService.displayUsers()).data
    },

    methods: {
        async create() {
            if (this.$refs.form.validate()){
                window.location.reload()
                try{
                const response = await BackEndService.createUser({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password
                })
                } catch (error) {
                    this.error = error.response.data.error
                }
            }
        },

        async modify () {
                const userId = this.$route.params.userId
                try {
                    await BackEndService.updateUser(userId, this.userUpdate)
                    .then(() => {
                        this.dialog = false
                        this.$router.push({
                            name: 'admin-users'
                        })
                    })
                    console.log(userId , this.userUpdate)
                } catch (err) {
                    console.log(err)
                }
            
        },
        async remove() {
            
                const userId = this.$route.params.userId
                window.location.reload()
                try{
                    const response = await BackEndService.removeUser(userId)
                    
                } catch (error) {
                    this.error = error.response.data.error
                }
            
        }
    }
}
</script>

<style scoped>
    .user-color {
        border-left: 4px solid #000000;
    }

</style>