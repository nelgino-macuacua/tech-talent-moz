<template>
  <div class="contaiiner">
    <form action="" method="">
       <h1 class="h1">Cadastro para Tech Talent Moz</h1>
          <div>
          <label 
           class="label" 
           for="nome"> 
            Nome e Apelido 
          </label>
         </div>
         <div>
           <input 
            class="input" 
             type="text" 
              placeholder="Ex: Jhon Doe" required />
           </div>
            <div>
            <label 
           class="label" 
            for="email"> 
            E-mail
           </label>
           </div>
           <div>
           <input
           class="input"
           type="email"
           placeholder="Ex:jhon@email.com"
           required
           autocomplete="on"
           />
           </div>
           <div>
           <label class="label" for="Skills"> Skills </label>
           </div>
           <div>
           <input
           class="input"
           type="text"
           placeholder="Ex: UX Designer, PHP, HTML, CSS, etc..."
           />
           </div>
           <div>
            <label class="label" for="taxa"> Taxa por Hora</label>
           </div>
           <div>
           <input
           class="input"
           type="number" min="0"
           placeholder="Ex: 250 por hora"
           require/>
           </div>
           <div>
           <label 
           class="label" 
           for="disponibilidade" > 
            Disponibilidade
           </label>
           </div>
           <div>
           <select id="disponibilidade">
           <option value="Disponibilidade" readonly> Disponibilidade</option>
           <option value="Full Time" > Full time</option>
           <option value="Part-Time"> Part Time</option>
          
            </select>
            </div>
 
             <div>
             <label class="label" for="Portifolio"> Link do Portifolio</label>
             </div>
             <div>
             <input 
             class="input" 
             type="url" 
             placeholder="Link do Portifolio"
             />
              </div>
                <div>
              <label 
              class="label" 
             for="Linkdin"> 
            Link do Linkedin
             </label>
             </div>
             <div>
             <input 
             class="input" 
             type="url" 
             placeholder="Link do linkedin" />
             </div>
 
             <div>
             <label 
             class="label" 
             for="Github">Link do Github
             </label>
             </div>
             <div>
             <input 
              class="input" 
             type="url" 
             placeholder="Link do Github" />
             </div>
             <!-- input para carregar foto-->
             <div class="inputfile-box">
          <input 
           type="file" 
           id="file" 
           class="inputfile" 
           @change="uploadFile" required/>

           <label id="alabel" for="file" placeholder="Adicionar Foto" > Adicionar Foto
            <div id="anexar">
              <span id="file-name" class="file-box"> {{inputFileText}}</span>
            <span class="file-button">
              <i class="fa fa-upload" aria-hidden="true"></i>
                Anexar
                 </span>
            </div>
             </label>
          </div>



     

      <div>
        <button class="btn" input type="Submit">Registar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {

  data(){
    return{
      inputFileText: "",
    }
  },
  methods: {
    uploadFile: function(e) {
      console.log(e.target.value);
      this.inputFileText = e.target.value;
    }
  }
}
</script>





<style lang="css" scoped>
.contaiiner {
  width: 82rem;
  height: 142rem;
  background: #f7f8fa;
  box-shadow: 0.02rem 2rem .9rem rgba (31, 31, 31, 0, 04);
  border-radius: 3.8rem;
}

.input {
  width: 66.6rem;
  height: 5.6rem;
  margin-top: 1.6rem;
  background: #ffffff;
  border: 0.01rem solid rgba(207, 216, 220, 0.5);
  border-radius: 0.6rem;
  margin-left: 6.8rem;
  margin-bottom: 4.4rem;
  padding-left: 1.2rem;
  text-align: left;
  font-family: Roboto;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.4rem;
  color: #78909c;
  display: flex;
}

.h1 {
  font-family: circular std;
  font-style: normal;
  font-weight: bold;
  font-size: 4.8rem;
  margin-left: 5.8rem;
  margin-right: 3rem;
  margin-top: 3.3rem;
  margin-bottom: 3.3rem;
  display: flex;
  justify-content: center;
  align-content: center
  
}

.btn {
  width: 66.6rem;
  height: 5.6rem;
  background: linear-gradient(135deg, #79beff 0%, #448aff 100%);
  border-radius: 0.6rem;
  margin-right: 3.9rem;
  margin-top: 4rem;
  margin-left: 6.8rem;
  margin-bottom: 15.7rem;
  border: none;
}

.label{
  margin-left: 6.8rem;
  margin-top: 3.3rem;
  font-family: Roboto;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 1.3rem;
  
}
#disponibilidade {
  width: 68rem;
  height: 5.6rem;
  margin-top: 1.6rem;
  background: #ffffff;
  border: 0.01rem solid rgba(207, 216, 220, 0.5);
  border-radius: 0.6rem;
  margin-left: 6.8rem;
  margin-bottom: 5.6rem;
  padding-left: 1.2rem;
  padding-right: 2rem;
  text-align: left;
  font-family: Roboto;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.4rem;
  color: #78909c;
  display: flex;
}
.inputfile-box {
  position: relative;
}

.inputfile {
  display: none;
  

}

.container {
  display: flex;
  width: 66.6rem;
}

.file-box {
    width: 56.3rem;
    height: 6.1rem;
    border: 0.01rem solid rgba(207, 216, 220, 0.5);
    background: #ffffff;

    border-radius: 0.6rem;
 
}

.file-button {
    width: 10.4rem;
    height: 6.1rem;
    background: linear-gradient(135deg, #79beff 0%, #448aff 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    
}

#anexar{
  display: flex;
  border-radius: 0.6rem;
  margin-left: 6.8rem;
}

#alabel{

  margin-left: 6.8rem;
  margin-top: 3.3rem;
  margin-bottom: 2.3rem;
  font-family: Roboto;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 1.3rem;
}


</style>

