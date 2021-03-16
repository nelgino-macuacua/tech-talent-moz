<template>
  <navbar :onSearch="onSearch"/>
  <div>
    <div id="home" >
      <user-profile
        v-for="(user, index) in users" :key="index"
        :nome="user.nome"
        :skills="user.skills"
        :disponibilidade="user.disponibilidade"
        :titulo="user.titulo"
        :taxa="user.taxa"
        :github="user.github"
        :linkedin="user.linkedin"
        :portifolio="user.portifolio"
        imagem="https://via.placeholder.com/100"
      />
    </div>
  </div>
</template>

<script>
import UserProfile from "./../components/UserProfile";
import Navbar from "./../components/Navbar";
//import api from "../services/api";
export default {
  components: { UserProfile, Navbar },
  data() {
    return {
      users: [],
    };
  },

  methods: {
    onSearch: function(e) {
        //e.onSearch = e.splint(',');
        let skills = ""+e.search;
        e.search = skills.split(",");
        console.log(e);
    }
  },
  created: function () {
    /*
    api.get("/",).then((result) => {
      this.users = result.data; //acesso proibido por cors, rever depois
      console.log(this.users);
    });*/

    let abc = [
  {
    "id": 36,
    "nome": "Edgar",
    "email": "ed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "full-time",
    "github": "gino",
    "linkedin": "jino",
    "portifolio": "jokl",
    "created_at": "2021-03-12T10:43:16.000000Z",
    "updated_at": "2021-03-12T10:43:16.000000Z",
    "skills": [
      {
        "id": 11,
        "skill": "JavaScript",
        "created_at": "2021-03-12T10:18:13.000000Z",
        "updated_at": "2021-03-12T10:18:13.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 11
        }
      },
      {
        "id": 12,
        "skill": "Kotlin",
        "created_at": "2021-03-12T10:18:42.000000Z",
        "updated_at": "2021-03-12T10:18:42.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 12
        }
      }
    ]
  },
  {
    "id": 37,
    "nome": "Milton",
    "email": "eed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 542,
    "disponibilidade": "full-time",
    "github": "ginoo",
    "linkedin": "jinooo",
    "portifolio": "jokloo",
    "created_at": "2021-03-12T10:44:58.000000Z",
    "updated_at": "2021-03-12T10:44:58.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 15
        }
      }
    ]
  },
  {
    "id": 38,
    "nome": "Milton",
    "email": "eded@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "Full-time",
    "github": "gidnoo",
    "linkedin": "jinodoo",
    "portifolio": "jokldoo",
    "created_at": "2021-03-12T12:21:55.000000Z",
    "updated_at": "2021-03-12T12:21:55.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 15
        }
      },
      
    ]
  },

  {
    "id": 36,
    "nome": "Edgar",
    "email": "ed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "full-time",
    "github": "gino",
    "linkedin": "jino",
    "portifolio": "jokl",
    "created_at": "2021-03-12T10:43:16.000000Z",
    "updated_at": "2021-03-12T10:43:16.000000Z",
    "skills": [
      {
        "id": 11,
        "skill": "JavaScript",
        "created_at": "2021-03-12T10:18:13.000000Z",
        "updated_at": "2021-03-12T10:18:13.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 11
        }
      },
      {
        "id": 12,
        "skill": "Kotlin",
        "created_at": "2021-03-12T10:18:42.000000Z",
        "updated_at": "2021-03-12T10:18:42.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 12
        }
      }
    ]
  },
  {
    "id": 37,
    "nome": "Milton",
    "email": "eed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 542,
    "disponibilidade": "full-time",
    "github": "ginoo",
    "linkedin": "jinooo",
    "portifolio": "jokloo",
    "created_at": "2021-03-12T10:44:58.000000Z",
    "updated_at": "2021-03-12T10:44:58.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 15
        }
      }
    ]
  },
  {
    "id": 38,
    "nome": "Milton",
    "email": "eded@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "Full-time",
    "github": "gidnoo",
    "linkedin": "jinodoo",
    "portifolio": "jokldoo",
    "created_at": "2021-03-12T12:21:55.000000Z",
    "updated_at": "2021-03-12T12:21:55.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 15
        }
      },
      
    ]
  },
  {
    "id": 36,
    "nome": "Edgar",
    "email": "ed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "full-time",
    "github": "gino",
    "linkedin": "jino",
    "portifolio": "jokl",
    "created_at": "2021-03-12T10:43:16.000000Z",
    "updated_at": "2021-03-12T10:43:16.000000Z",
    "skills": [
      {
        "id": 11,
        "skill": "JavaScript",
        "created_at": "2021-03-12T10:18:13.000000Z",
        "updated_at": "2021-03-12T10:18:13.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 11
        }
      },
      {
        "id": 12,
        "skill": "Kotlin",
        "created_at": "2021-03-12T10:18:42.000000Z",
        "updated_at": "2021-03-12T10:18:42.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 12
        }
      }
    ]
  },
  {
    "id": 37,
    "nome": "Milton",
    "email": "eed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 542,
    "disponibilidade": "full-time",
    "github": "ginoo",
    "linkedin": "jinooo",
    "portifolio": "jokloo",
    "created_at": "2021-03-12T10:44:58.000000Z",
    "updated_at": "2021-03-12T10:44:58.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 15
        }
      }
    ]
  },
  {
    "id": 38,
    "nome": "Milton",
    "email": "eded@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "Full-time",
    "github": "gidnoo",
    "linkedin": "jinodoo",
    "portifolio": "jokldoo",
    "created_at": "2021-03-12T12:21:55.000000Z",
    "updated_at": "2021-03-12T12:21:55.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 15
        }
      },
      
    ]
  },

  {
    "id": 36,
    "nome": "Edgar",
    "email": "ed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "full-time",
    "github": "gino",
    "linkedin": "jino",
    "portifolio": "jokl",
    "created_at": "2021-03-12T10:43:16.000000Z",
    "updated_at": "2021-03-12T10:43:16.000000Z",
    "skills": [
      {
        "id": 11,
        "skill": "JavaScript",
        "created_at": "2021-03-12T10:18:13.000000Z",
        "updated_at": "2021-03-12T10:18:13.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 11
        }
      },
      {
        "id": 12,
        "skill": "Kotlin",
        "created_at": "2021-03-12T10:18:42.000000Z",
        "updated_at": "2021-03-12T10:18:42.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 12
        }
      }
    ]
  },
  {
    "id": 37,
    "nome": "Milton",
    "email": "eed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 542,
    "disponibilidade": "full-time",
    "github": "ginoo",
    "linkedin": "jinooo",
    "portifolio": "jokloo",
    "created_at": "2021-03-12T10:44:58.000000Z",
    "updated_at": "2021-03-12T10:44:58.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 15
        }
      }
    ]
  },
  {
    "id": 38,
    "nome": "Milton",
    "email": "eded@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "Full-time",
    "github": "gidnoo",
    "linkedin": "jinodoo",
    "portifolio": "jokldoo",
    "created_at": "2021-03-12T12:21:55.000000Z",
    "updated_at": "2021-03-12T12:21:55.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 15
        }
      },
      
    ]
  },
  {
    "id": 36,
    "nome": "Edgar",
    "email": "ed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "full-time",
    "github": "gino",
    "linkedin": "jino",
    "portifolio": "jokl",
    "created_at": "2021-03-12T10:43:16.000000Z",
    "updated_at": "2021-03-12T10:43:16.000000Z",
    "skills": [
      {
        "id": 11,
        "skill": "JavaScript",
        "created_at": "2021-03-12T10:18:13.000000Z",
        "updated_at": "2021-03-12T10:18:13.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 11
        }
      },
      {
        "id": 12,
        "skill": "Kotlin",
        "created_at": "2021-03-12T10:18:42.000000Z",
        "updated_at": "2021-03-12T10:18:42.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 12
        }
      }
    ]
  },
  {
    "id": 37,
    "nome": "Milton",
    "email": "eed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 542,
    "disponibilidade": "full-time",
    "github": "ginoo",
    "linkedin": "jinooo",
    "portifolio": "jokloo",
    "created_at": "2021-03-12T10:44:58.000000Z",
    "updated_at": "2021-03-12T10:44:58.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 15
        }
      }
    ]
  },
  {
    "id": 38,
    "nome": "Milton",
    "email": "eded@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "Full-time",
    "github": "gidnoo",
    "linkedin": "jinodoo",
    "portifolio": "jokldoo",
    "created_at": "2021-03-12T12:21:55.000000Z",
    "updated_at": "2021-03-12T12:21:55.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 15
        }
      },
      
    ]
  },

  {
    "id": 36,
    "nome": "Edgar",
    "email": "ed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "full-time",
    "github": "gino",
    "linkedin": "jino",
    "portifolio": "jokl",
    "created_at": "2021-03-12T10:43:16.000000Z",
    "updated_at": "2021-03-12T10:43:16.000000Z",
    "skills": [
      {
        "id": 11,
        "skill": "JavaScript",
        "created_at": "2021-03-12T10:18:13.000000Z",
        "updated_at": "2021-03-12T10:18:13.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 11
        }
      },
      {
        "id": 12,
        "skill": "Kotlin",
        "created_at": "2021-03-12T10:18:42.000000Z",
        "updated_at": "2021-03-12T10:18:42.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 12
        }
      }
    ]
  },
  {
    "id": 37,
    "nome": "Milton",
    "email": "eed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 542,
    "disponibilidade": "full-time",
    "github": "ginoo",
    "linkedin": "jinooo",
    "portifolio": "jokloo",
    "created_at": "2021-03-12T10:44:58.000000Z",
    "updated_at": "2021-03-12T10:44:58.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 15
        }
      }
    ]
  },
  {
    "id": 38,
    "nome": "Milton",
    "email": "eded@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "Full-time",
    "github": "gidnoo",
    "linkedin": "jinodoo",
    "portifolio": "jokldoo",
    "created_at": "2021-03-12T12:21:55.000000Z",
    "updated_at": "2021-03-12T12:21:55.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 15
        }
      },
      
    ]
  },
  {
    "id": 36,
    "nome": "Edgar",
    "email": "ed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "full-time",
    "github": "gino",
    "linkedin": "jino",
    "portifolio": "jokl",
    "created_at": "2021-03-12T10:43:16.000000Z",
    "updated_at": "2021-03-12T10:43:16.000000Z",
    "skills": [
      {
        "id": 11,
        "skill": "JavaScript",
        "created_at": "2021-03-12T10:18:13.000000Z",
        "updated_at": "2021-03-12T10:18:13.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 11
        }
      },
      {
        "id": 12,
        "skill": "Kotlin",
        "created_at": "2021-03-12T10:18:42.000000Z",
        "updated_at": "2021-03-12T10:18:42.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 12
        }
      }
    ]
  },
  {
    "id": 37,
    "nome": "Milton",
    "email": "eed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 542,
    "disponibilidade": "full-time",
    "github": "ginoo",
    "linkedin": "jinooo",
    "portifolio": "jokloo",
    "created_at": "2021-03-12T10:44:58.000000Z",
    "updated_at": "2021-03-12T10:44:58.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 15
        }
      }
    ]
  },
  {
    "id": 38,
    "nome": "Milton",
    "email": "eded@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "Full-time",
    "github": "gidnoo",
    "linkedin": "jinodoo",
    "portifolio": "jokldoo",
    "created_at": "2021-03-12T12:21:55.000000Z",
    "updated_at": "2021-03-12T12:21:55.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 15
        }
      },
      
    ]
  },

  {
    "id": 36,
    "nome": "Edgar",
    "email": "ed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "full-time",
    "github": "gino",
    "linkedin": "jino",
    "portifolio": "jokl",
    "created_at": "2021-03-12T10:43:16.000000Z",
    "updated_at": "2021-03-12T10:43:16.000000Z",
    "skills": [
      {
        "id": 11,
        "skill": "JavaScript",
        "created_at": "2021-03-12T10:18:13.000000Z",
        "updated_at": "2021-03-12T10:18:13.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 11
        }
      },
      {
        "id": 12,
        "skill": "Kotlin",
        "created_at": "2021-03-12T10:18:42.000000Z",
        "updated_at": "2021-03-12T10:18:42.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 12
        }
      }
    ]
  },
  {
    "id": 37,
    "nome": "Milton",
    "email": "eed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 542,
    "disponibilidade": "full-time",
    "github": "ginoo",
    "linkedin": "jinooo",
    "portifolio": "jokloo",
    "created_at": "2021-03-12T10:44:58.000000Z",
    "updated_at": "2021-03-12T10:44:58.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 15
        }
      }
    ]
  },
  {
    "id": 38,
    "nome": "Milton",
    "email": "eded@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "Full-time",
    "github": "gidnoo",
    "linkedin": "jinodoo",
    "portifolio": "jokldoo",
    "created_at": "2021-03-12T12:21:55.000000Z",
    "updated_at": "2021-03-12T12:21:55.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 15
        }
      },
      
    ]
  },
  {
    "id": 36,
    "nome": "Edgar",
    "email": "ed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "full-time",
    "github": "gino",
    "linkedin": "jino",
    "portifolio": "jokl",
    "created_at": "2021-03-12T10:43:16.000000Z",
    "updated_at": "2021-03-12T10:43:16.000000Z",
    "skills": [
      {
        "id": 11,
        "skill": "JavaScript",
        "created_at": "2021-03-12T10:18:13.000000Z",
        "updated_at": "2021-03-12T10:18:13.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 11
        }
      },
      {
        "id": 12,
        "skill": "Kotlin",
        "created_at": "2021-03-12T10:18:42.000000Z",
        "updated_at": "2021-03-12T10:18:42.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 12
        }
      }
    ]
  },
  {
    "id": 37,
    "nome": "Milton",
    "email": "eed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 542,
    "disponibilidade": "full-time",
    "github": "ginoo",
    "linkedin": "jinooo",
    "portifolio": "jokloo",
    "created_at": "2021-03-12T10:44:58.000000Z",
    "updated_at": "2021-03-12T10:44:58.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 15
        }
      }
    ]
  },
  {
    "id": 38,
    "nome": "Milton",
    "email": "eded@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "Full-time",
    "github": "gidnoo",
    "linkedin": "jinodoo",
    "portifolio": "jokldoo",
    "created_at": "2021-03-12T12:21:55.000000Z",
    "updated_at": "2021-03-12T12:21:55.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 15
        }
      },
      
    ]
  },

  {
    "id": 36,
    "nome": "Edgar",
    "email": "ed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "full-time",
    "github": "gino",
    "linkedin": "jino",
    "portifolio": "jokl",
    "created_at": "2021-03-12T10:43:16.000000Z",
    "updated_at": "2021-03-12T10:43:16.000000Z",
    "skills": [
      {
        "id": 11,
        "skill": "JavaScript",
        "created_at": "2021-03-12T10:18:13.000000Z",
        "updated_at": "2021-03-12T10:18:13.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 11
        }
      },
      {
        "id": 12,
        "skill": "Kotlin",
        "created_at": "2021-03-12T10:18:42.000000Z",
        "updated_at": "2021-03-12T10:18:42.000000Z",
        "pivot": {
          "user_id": 36,
          "skill_id": 12
        }
      }
    ]
  },
  {
    "id": 37,
    "nome": "Milton",
    "email": "eed@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 542,
    "disponibilidade": "full-time",
    "github": "ginoo",
    "linkedin": "jinooo",
    "portifolio": "jokloo",
    "created_at": "2021-03-12T10:44:58.000000Z",
    "updated_at": "2021-03-12T10:44:58.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 37,
          "skill_id": 15
        }
      }
    ]
  },
  {
    "id": 38,
    "nome": "Milton",
    "email": "eded@eredsfs.com",
    "password": "12345678",
    "titulo": "backend",
    "taxa": 500,
    "disponibilidade": "Full-time",
    "github": "gidnoo",
    "linkedin": "jinodoo",
    "portifolio": "jokldoo",
    "created_at": "2021-03-12T12:21:55.000000Z",
    "updated_at": "2021-03-12T12:21:55.000000Z",
    "skills": [
      {
        "id": 13,
        "skill": "laravel",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 13
        }
      },
      {
        "id": 14,
        "skill": "Spring Boot",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 14
        }
      },
      {
        "id": 15,
        "skill": ".NET",
        "created_at": "2021-03-12T10:44:59.000000Z",
        "updated_at": "2021-03-12T10:44:59.000000Z",
        "pivot": {
          "user_id": 38,
          "skill_id": 15
        }
      },
      
    ]
  },
  
];


console.log(abc);
this.users = abc;
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