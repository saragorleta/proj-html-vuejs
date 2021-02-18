var app = new Vue({
  el:'#app',
  data:{

    view:{

    topOfPage:true

    },

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
    footerContacts:
      {
        indirizzo:'121 King Street, London United Kingdom',
        telefono:'1.800.458.556'
      }
    ,
    footerDepartments:[

      'Cardiology', 'Pediatrics', 'Diabetes-Care','Pre-natel-Care','Ultrasoudechocardiohram'

    ],
    indexNavSelezionato:0,
    indexContactsSelezionato:0,
    indexDepartmentsSelezionato:0

  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
  handleScroll(){
    if(window.pageYOffset>0){
      if(this.view.topOfPage) this.view.topOfPage = false
    } else {
      if(!this.view.topOfPage) this.view.topOfPage = true
    }
  }
},

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

});
