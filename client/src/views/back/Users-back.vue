<template>
    <section class="ma-4">
        <h1 class="subheading">Users</h1>

        <v-container class="my-5">

            <v-layout row wrap justify-start class="mb-3">
                <v-tooltip top>
                    <v-btn small flat color="grey" @click="sortBy('firstname')" slot="activator">
                        <v-icon small left>folder</v-icon>
                        <span class="caption text-lowercase">By firstname name</span>
                    </v-btn>
                    <span>Sort by project name</span>
                </v-tooltip>
                <v-tooltip top>
                    <v-btn small flat color="grey" @click="sortBy('email')" slot="activator">
                        <v-icon small left>person</v-icon>
                        <span class="caption text-lowercase">By email</span>
                    </v-btn>
                    <span>Sort by project author</span>
                </v-tooltip>
                <v-dialog max-width="600px">
                    <v-btn flat slot="activator" class="primary">Add a new user</v-btn>
                        <v-card>
                            <v-card-title>
                                <h2>Add a new user</h2>
                            </v-card-title>
                            <v-card-text>
                                <v-form>
                                    <v-text-field type="text" label="Firstname" v-model="firstname" prepend-icon="folder"></v-text-field>
                                    <v-text-field type="text" label="Lastname" v-model="lastname" prepend-icon="folder"></v-text-field>
                                    <v-text-field type="email" label="Email" v-model="email" prepend-icon="folder"></v-text-field>
                                    <v-text-field type="password" label="Password" v-model="password" prepend-icon="folder"></v-text-field>
                                    <div class="error--text mb-3"  v-html="error"/>
                                    <v-btn flat class="mx-0 mt-3 primary" @click="save">Save</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                </v-dialog>
            </v-layout>

            <v-card flat class="grey lighten-4" v-for="user in users" :key="user.email">
               <v-layout row wrap :class="`pa-3 user ${user.status}`">
                   <v-flex xs12 md4>
                       <div class="caption grey--text ">User firstname</div>
                       <div>{{ user.firstname }}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md2>
                       <div class="caption grey--text ">User lastname</div>
                       <div>{{ user.lastname }}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md2>
                       <div class="caption grey--text ">User email</div>
                       <div>{{ user.email }}</div>
                   </v-flex>
                   <v-flex xs2 sm4 md2>
                       <div class="caption grey--text ">User password</div>
                       <div>{{ user.password }}</div>
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
                        <v-btn flat class="red accent--text">Delete</v-btn>
                   </v-flex>
               </v-layout>
               <v-divider></v-divider>
           </v-card>
        </v-container>
    </section>
</template>

<script>
export default {
    data () {
        return {
            users: [
                { firstname: 'a', lastname: 'coni', email: 'c@c.gmail.com', password: '***', status: 'large' },
                { firstname: 'z', lastname: 'con', email: 'g@c.gmail.com', password: '***', status: 'medium' },
                { firstname: 'f', lastname: 'co', email: 'q@c.gmail.com', password: '***', status: 'small' },
                { firstname: 'x', lastname: 'c', email: 'n@c.gmail.com', password: '***', status: 'medium' }
            ],
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        sortBy(prop) {
            this.users.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
        },

        save () {
            /* console.log(this.title, this.description) */
        },

        modify () {
            /* console.log(this.title, this.description) */
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