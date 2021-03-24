<template>
  <navbar :onSearch="onSearch"/>
  <div>
    <div id="home" >
      <user-profile
        v-for="(user, index) in users" :key="index"
        :nome="user.nome"
        :skills="user.skills"
        :disponibilidade="user.disponibilidade"
        :titulos="user.titulos"
        :taxa="user.taxa"
        :github="user.github"
        :linkedin="user.linkedin"
        :portifolio="user.portifolio"
        :imagem="baseURL+user.imagem"
      />
    </div>
  </div>
</template>

<script>
import UserProfile from "./../components/UserProfile";
import Navbar from "./../components/Navbar";
import api from "../services/api";
export default {
  components: { UserProfile, Navbar },
  data() {
    return {
      users: [],
      baseURL: "http://projectos/tech-talent-back/resources/imagens/"

    };
  },

  methods: {
    onSearch: async function(e) {
        //e.onSearch = e.splint(',');
        let skills = ""+e.search;
        e.search = skills.split(",");
        const search = e.search;
        const disponibilidade = e.disponibilidade;
        const taxaMin = e.taxaMin;
        const taxaMax = e.taxaMax;
        //console.log(search);
        const enviar={search:search, disponibilidade:disponibilidade,taxaMin:taxaMin,taxaMax:taxaMax}
        try{
          const result = await api.get("public/api/filter",{enviar},{
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
            proxy: {
              host: 'localhost',
              port: 8080
            }
            });
          this.users=result.data
          console.log(this.users)
        }catch(error){
          //console.log(error)
        }
    }
  },
  created:async function () {
    try{
      const result = await  api.get("public/api");
      this.users = result.data; //acesso proibido por cors, rever depois
    }catch(error){
      console.log(error)
    }

  },
};
</script>

<style lang="css" scoped>
#home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 50px;
}
</style>