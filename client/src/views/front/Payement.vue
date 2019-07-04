<template>
    <section>
        <v-container>
            <v-layout row justify-center>
                <v-flex xs12 md6>
                    <form  id="payment-form">
                        <div class="form-row">
                            <input type="text" v-model="firstName" class="mb-3 StripeElement StripeElement--empty" placeholder="Prénom">
                            <input type="text" v-model="lastName" class="mb-3 StripeElement StripeElement--empty" placeholder="Nom">
                            <input type="email" v-model="email" class="mb-3 StripeElement StripeElement--empty" placeholder="Email">
                            <div id="card-element">

                            </div>
                            <div id="card-errors" role="alert">
                                
                            </div>
                        </div>
                        <button depressed color="primary" @click="payement" class="ml-0 mt-3 button-stripe">Submit payement</button>
                    </form>
                </v-flex>
            </v-layout>
        </v-container>
         
    </section>
</template>

<script>
/* import Payement from '@/services/PayementService'
 */
export default {
    data () {
        return {
            firstName: this.$store.state.user.firstname,
            lastName: this.$store.state.user.lastname,
            email: this.$store.state.user.email
        }
    },
    methods: {
        payement() {
            document.getElementById("button-stripe").addEventListener("click", function(event){
                event.preventDefault()
            });
                try{
                    const response = Payement.payement()
                    console.log('form ok')
                } catch (error){
                    this.error = error.response.data.error
                    console.log('pas de form')
                }
        }
    }
}
</script>

<style scoped>
    .StripeElement {
        box-sizing: border-box;
        height: 40px;
        padding: 10px 12px;
        border: 1px solid transparent;
        border-radius: 4px;
        background-color: white;
        box-shadow: 0 1px 3px 0 #e6ebf1;
        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease;
    }
    .StripeElement--focus {
        box-shadow: 0 1px 3px 0 #cfd7df;
    }
    .StripeElement--invalid {
        border-color: #fa755a;
    }
    .StripeElement--webkit-autofill {
        background-color: #fefde5 !important;
    }
    .button-stripe{
        background-color: #000000;
        color: #ffffff;
        padding: 10px 32px 10px 25px
    }
    .form-row{
        display: flex;
        flex-direction: column;
    }
</style>