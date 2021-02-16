var app = new Vue({
  el:'#app',
  data:{
    navBar:[
      {
        nome:'Home'
      },
      {
        nome:'About'
      },
      {
        nome:'Department'
      },
      {
        nome:'Articles'
      },
    ],
    footerContacts:[
      {
        indirizzo:'121 King Street, London United Kingdom',
        telefono:'1.800.458.556'
      }
    ],
    footerDepartments:[

        'Cardiology', 'Pediatrics', 'Diabetes-Care','Pre-natel-Care','Ultrasoudechocardiohram'
      
    ],
    indexNavSelezionato:0,
    indexContactsSelezionato:0,
    indexDepartmentsSelezionato:0

  },

  methods:{
    aggiungiNav(index){
      this.indexNavSelezionato=index;
      console.log(index);
    },
    aggiungiContacts(index){
      this.indexContactsSelezionato=index;
    },
    aggiungiDepartments(index){
      this.indexDepartmentsSelezionato=index;
    },
  }

});
