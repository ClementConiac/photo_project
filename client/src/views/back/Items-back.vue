<template>
    <section class="ma-4">
        <h1 class="subheading">Items</h1>

        <v-container class="my-5">

            <v-layout row wrap justify-start class="mb-3">
                <v-dialog max-width="600px" v-model="dialog">
                    <v-btn flat slot="activator" class="primary">Add a new item</v-btn>
                        <v-card>
                            <v-card-title>
                                <h2>Add a new item</h2>
                            </v-card-title>
                            <v-card-text>
                                <v-form ref="form">
                                    <v-text-field label="Title" v-model="title" :rules="inputRules" prepend-icon="folder"></v-text-field>
                                    <v-textarea label="Description" v-model="description" :rules="inputRules" prepend-icon="edit"></v-textarea>
                                    <v-text-field label="Price" v-model="price" :rules="inputRulesNumber" prepend-icon="euro_symbol"></v-text-field>
                                    <v-btn flat class="mx-0 mt-3 primary" @click="create">Save</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                </v-dialog>
                
            </v-layout>

            <v-card flat class="grey lighten-4" v-for="item in items" :key="item.id">
               <v-layout row wrap :class="`pa-3 item`">
                   <v-flex xs12 md1>
                       <div class="caption grey--text">#</div>
                       <div>{{ item.id }}</div>
                   </v-flex>
                   <v-flex xs12 md3>
                       <div class="caption grey--text">Item title</div>
                       <div>{{ item.title }}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md4>
                       <div class="caption grey--text">Description</div>
                       <div>{{ item.description }}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md2>
                       <div class="caption grey--text">Price</div>
                       <div>{{ item.price }}€</div>
                   </v-flex>
                   <v-flex xs12 sm4 md2 right>
                        <v-dialog max-width="600px">
                            <v-btn flat slot="activator" class="orange accent--text" :to="{name:'admin-items-id', params:{itemId: item.id}}">Modify</v-btn>
                                <v-card>
                                    <v-card-title>
                                        <h2>Modify item</h2>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-form>
                                            <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
                                            <v-textarea label="Description" v-model="description" prepend-icon="edit"></v-textarea>
                                            <v-text-field label="Price" v-model="price" :rules="inputRules" prepend-icon="euro_symbol"></v-text-field>
                                            <v-btn flat class="mx-0 mt-3 primary" @click="modify">Modify</v-btn>
                                        </v-form>
                                    </v-card-text>
                                </v-card>
                        </v-dialog>
                        <v-btn flat class="red accent--text" :to="{name:'admin-items-id', params:{itemId: item.id}}" @click="remove">Delete</v-btn>
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
            title: '',
            description: '',
            price: '',
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            inputRulesNumber: [
                v => v >= /^[0-9]$/ || 'Only number allowed here'
            ],
            dialog: false,
            items: null,
        }
    },
    async mounted () {
        this.items = (await BackEndService.displayItems()).data
    },
    methods: {
        async create() {
            if (this.$refs.form.validate()){
                try{
                const response = await BackEndService.createItem({
                    title: this.title,
                    description: this.description,
                    price: this.price,
                }).then(() => {
                    this.dialog = false
                    this.$router.push({
                        name: 'admin-items'
                    })
                })
                } catch (error) {
                    this.error = error.response.data.error
                }
            }
        },
        modify () {
        },
        async remove() {
            try{
                const response = await BackEndService.removeItem()
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    },
    watch: {

    }
}
</script>

<style scoped>
    .item.large {
        border-left: 4px solid #4CAF50;
    }
    .item.medium {
        border-left: 4px solid #FF9800;
    }
    .item.small {
        border-left: 4px solid #F44336;
    }
</style>