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
                                    <v-layout column align-start>
                                        <img :src="imageUrl" height="150">
                                        <v-btn flat class="primary mx-0 mb-4" @click="importFile">Upload image</v-btn>
                                        <input type="file" style="display: none;" ref="fileInput" accept="image/*" name="image" @change="onFilePicked">
                                    </v-layout>
                                    <v-btn flat class="mx-0 mt-3 primary" @click="create">Save</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                </v-dialog>
                
            </v-layout>

            <v-card flat class="grey lighten-4" v-for="item in items" :key="item.id">
               <v-layout row wrap :class="`pa-3 item`">
                   <v-flex xs6 sm4 md1>
                       <div class="caption grey--text">#</div>
                        <div>{{ item.id }}</div>
                   </v-flex>
                   <v-flex xs12 md3>
                       <div class="caption grey--text">Title</div>
                       <div>{{ item.title }}</div>
                        <img :src="require(`../../assets/img/${item.image}`)" alt="need asistance" class="img-responsive">
                   </v-flex>
                   <v-flex xs12 md5>
                       <div class="caption grey--text">Description</div>
                       <div>{{ item.description }}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md1>
                       <div class="caption grey--text">price</div>
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
                                            <v-text-field label="Title" v-model="itemUpdate.title" prepend-icon="folder"></v-text-field>
                                            <v-textarea label="Description" v-model="itemUpdate.description" prepend-icon="edit"></v-textarea>
                                            <v-text-field label="Price" v-model="itemUpdate.price" prepend-icon="euro_symbol"></v-text-field>
                                            <v-btn flat class="mx-0 mt-3 primary" @click="modify">Modify</v-btn>
                                        </v-form>
                                    </v-card-text>
                                </v-card>
                        </v-dialog>
                        <v-dialog max-width="290" v-model="dialogSecure">
                            <v-btn flat slot="activator" class="red accent--text" :to="{name:'admin-items-id', params:{itemId: item.id}}">Delete</v-btn>
                            <v-card>
                                <v-card-title class="headline">Verification</v-card-title>

                                <v-card-text>
                                    <p>Are you sure you want to delete <span class="font-weight-bold">{{ item.title }}?</span></p>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn class="primary accent--text" flat @click="dialogSecure = false">
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
            title: '',
            description: '',
            price: '',
            imageUrl: '',
            image: '',
            imageName: '',
            itemUpdate: {
                title: '',
                description: '',
                price: '',
                imageUrl: ''
            },
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            inputRulesNumber: [
                v => v >= /^[0-9]$/ || 'Only number allowed here'
            ],
            dialog: false,
            dialogSecure: false,
            items: null,
        }
    },
    async mounted () {
        this.items = (await BackEndService.displayItems()).data
    },
    methods: {
        async create () {
            if (this.$refs.form.validate()){
/*             window.location.reload()
 */            try{
                console.log('title:', this.title, 'price:', this.price, 'description:', this.description, 'image:', Date.now() + this.imageName,)
                const response = await BackEndService.createItem({
                    title: this.title,
                    description: this.description,
                    image: Date.now() + this.imageName,
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
        async modify () {
            window.location.reload()
            const itemId = this.$route.params.itemId
             try {
                await BackEndService.updateItem(itemId, this.itemUpdate)
                console.log(itemId , this.itemUpdate)
            } catch (err) {
                console.log(err)
            }
        },
        async remove () {
            const itemId = this.$route.params.itemId
            window.location.reload()
            try{
                const response = await BackEndService.removeItem(itemId)
                
            } catch (error) {
                this.error = error.response.data.error
            }
        },
        importFile () {
            this.$refs.fileInput.click()
        },
        onFilePicked (event) {
            const files = event.target.files
            let filename = files[0].name
            if (filename.lastIndexOf('.') <= 0) {
                return alert('Please add a valid file !')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
            this.imageName = filename
      },
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
    .img-responsive{
        width: 50%;
    }
</style>