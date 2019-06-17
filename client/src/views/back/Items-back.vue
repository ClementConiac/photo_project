<template>
    <section class="ma-4">
        <h1 class="subheading">Items</h1>

        <v-container class="my-5">

            <v-layout row wrap justify-start class="mb-3">
                <v-tooltip top>
                    <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
                        <v-icon small left>folder</v-icon>
                        <span class="caption text-lowercase">By item name</span>
                    </v-btn>
                    <span>Sort by project name</span>
                </v-tooltip>
                <v-tooltip top>
                    <v-btn small flat color="grey" @click="sortBy('price')" slot="activator">
                        <v-icon small left>person</v-icon>
                        <span class="caption text-lowercase">By price</span>
                    </v-btn>
                    <span>Sort by project author</span>
                </v-tooltip>
                <v-dialog max-width="600px">
                    <v-btn flat slot="activator" class="primary">Add a new item</v-btn>
                        <v-card>
                            <v-card-title>
                                <h2>Add a new item</h2>
                            </v-card-title>
                            <v-card-text>
                                <v-form>
                                    <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
                                    <v-textarea label="Description" v-model="description" prepend-icon="edit"></v-textarea>
                                    <v-btn flat class="mx-0 mt-3 primary" @click="save">Save</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                </v-dialog>
                
            </v-layout>

            <v-card flat class="grey lighten-4" v-for="item in items" :key="item.title">
               <v-layout row wrap :class="`pa-3 item ${item.status}`">
                   <v-flex xs12 md4>
                       <div class="caption grey--text ">Item title</div>
                       <div>{{ item.title }}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md4>
                       <div class="caption grey--text ">Description</div>
                       <div>{{ item.description }}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md2>
                       <div class="caption grey--text ">price</div>
                       <div>{{ item.price }}</div>
                   </v-flex>
                   <v-flex xs12 sm4 md2 right>
                        <v-dialog max-width="600px">
                            <v-btn flat slot="activator" class="orange accent--text">Modify</v-btn>
                                <v-card>
                                    <v-card-title>
                                        <h2>Modify item</h2>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-form>
                                            <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
                                            <v-textarea label="Description" v-model="description" prepend-icon="edit"></v-textarea>
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
            items: [
                { title: 'Design a new website', description: 'The Net Ninja', price: '25', status: 'large' },
                { title: 'Code up the homepage', description: 'Chun Li', price: '40', status: 'medium' },
                { title: 'Design video thumbnails', description: 'Ryu', price: '35', status: 'small' },
                { title: 'Create a community forum', description: 'Gouken', price: '15', status: 'medium' }
            ],
            title: '',
            description: '',
            price: '',

        }
    },
    methods: {
        sortBy(prop) {
        this.items.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
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