<template>
    <section>
        <v-layout class="secondary" column justify-center>
            <p class="headline text-xs-center mt-3 font-weight-bold">{{ currentProduct.title }}</p>
        </v-layout>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 md3 class="information-pers">
                    <h2>1. Importer votre photo</h2>
                    <p></p>
                    <h2>2. Ajouter votre objet dans le panier</h2>
                    <p></p>
                    <v-btn large flat class="primary mx-0 mb-4 mt-4" @click="addProductPerso(currentProduct)">Ajouter au panier</v-btn>
                </v-flex>
                
                <v-flex xs12 md6 class="img-center">
                    <img :src="imageUrl" class="absolute-img">
                    <img :src="require(`../../assets/img/${currentProduct.image}`)" class="img-responsive" aspect-ratio="2">
                </v-flex>
                <v-flex xs12 md3 class="import-img">
                    <v-btn large flat class="primary mx-0 mt-4" @click="importFile">Upload image</v-btn>
                    <input type="file" style="display: none;" ref="fileInput" accept="image/*" name="image" @change="onFilePicked">
                    <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                </v-flex>
            </v-layout>
        </v-container>
         
    </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    data () {
        return {
            imageUrl: '',
            imageName: ''
        }
    },
    computed: {
        ...mapGetters({
            currentProduct: 'getCurrentProduct',
        }),
        
    },
    methods: {
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
        
        ...mapActions([
            'productPerso',
        ]),
        addProductPerso(currentProduct) {
            this.productPerso(currentProduct)
            this.productPerso(this.imageName)
        },
    }
}
</script>

<style scoped>
.img-responsive{
    width: 80%;
}
.img-center{
    display: flex;
    justify-content: center;
}
.import-img{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.information-pers{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.absolute-img{
    position: absolute;
    bottom: 200px;
    width: 15%
}
</style>