<template>
    <section>
        <v-container class="container-team">
            <p class="text-xs-center headline pt-3 mb-3">Notre équipe</p>
            <v-carousel hide-delimiters class="hidden-sm-and-up">
                <v-carousel-item v-for="(item, i) in items" :src="item.src" :key="i">
                    <v-container fill-height>
                      <v-layout align-end>
                          <v-flex>
                          <h3 class="display-3 accent--text">{{ item.name }}</h3>
                          <p class="subheading accent--text">{{ item.description }}</p>
                          </v-flex>
                      </v-layout>
                    </v-container>
                </v-carousel-item>
            </v-carousel>
            <v-layout class="hidden-xs-only" row wrap justify-space-around>
              <v-flex sm6 lg4 offset-sm3 v-for="item in items" :key="item.name" class="ml-0 content-box">
                <v-card width="300">
                  <img
                    :src="item.src"
                    aspect-ratio="2.75"
                    width="300"
                    height="425"
                  >

                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">{{item.name}}</h3>
                      <p>{{item.description}}</p>
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout column>
                <p class="text-xs-center headline mt-4">Nous contacter</p>
                <p class="text-xs-center subheading">
                  Vous pouvez nous contactez si vous avez la moindre question.<br>
                  Nous essayerons de vous répondre et de résoudre votre problème le plus 
                  rapidement possible.
                </p>
            </v-layout>
            <v-form v-model="valid" class="mb-3">
                <v-container>
                    <v-layout row wrap justify-center>
                        <v-flex xs12 lg7>
                            <v-text-field
                                solo
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs12 lg7>
                          <v-text-field
                              solo
                              v-model="subject"
                              :rules="nameRules"
                              label="Sujet du message"
                              required
                          ></v-text-field>
                        </v-flex>

                        <v-flex xs12 lg7>
                            <v-textarea
                            solo
                            v-model="message"
                            :rules="messageRules"
                            name="input-7-1"
                            label="Contenu du message"
                            auto-grow
                            ></v-textarea>
                        </v-flex>  
                        <v-flex xs12 lg6 class="div-flex" justify-center align-center="">
                            <v-btn depressed large color="primary">Envoyer</v-btn>
                        </v-flex>           
                    </v-layout>
                </v-container>
            </v-form>
        </v-container>
    </section>
</template>

<script>
  export default {
    data: () =>({
    valid: false,
      subject: '',
      nameRules: [
        v => !!v || 'Sujet requis',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail requis',
        v => /.+@.+/.test(v) || 'E-mail doit être valide'
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message requis',
      ],
      items: [
          {
            src: require('../../assets/img/team-homme.jpg'),
            name: 'John',
            description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
          },
          {
            src: require('../../assets/img/team-femme.jpg'),
            name: 'Sarah',
            description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
          },
          {
            src: require('../../assets/img/team-homme-2.jpg'),
            name: 'Albert',
            description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.'
          }, 
        ]
    })
  }
</script>

<style scoped>
    .container-team{
        padding: 0;
    }
     .div-flex{
        display: flex;
    }
    .content-box{
      max-width: 300px;
    }
</style>
