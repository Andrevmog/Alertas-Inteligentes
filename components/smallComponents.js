var miniButton = Vue.component("miniButton", {
  name: "miniButton",
  props: {
    label:{
      type:String
    },
    icon:{
      type:String
    }
  },
  data() {
    return {
    };
  },
  methods: {
  },
  watch: {},
  computed: {
  },
  template: `
  <div class="miniButton pt-1">
    <i class="fas" v-bind:class="icon"></i>
  </div>`,
});

var Button = Vue.component("Button", {
  name: "Button",
  props: {
    label:{
      type:String
    },
    white:{
      type:Boolean
    },
    green:{
      type:Boolean
    },
    red:{
      type:Boolean
    },
    black:{
      type:Boolean
    }
  },
  data() {
    return {
    };
  },
  methods: {
  },
  watch: {},
  computed: {
  },
  template: `
  <div>
    <button 
      class="btn btn-light buttonComponent"
      v-bind:class="[{'buttonGreen':green}]"
    >
      {{label}}
    </button>
  </div>`,
});


var chevron = Vue.component("chevron", {
  name: "miniButton",
  props: {
    value:{
      type:Boolean
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
  watch: {},
  computed: {
  },
  template: `
  <div class="pt-1">
    <i 
      class="fas chevronIcon " 
      v-bind:class="[{'fa-chevron-down': !value},{'fa-chevron-up': value}]"
    ></i>
  </div>`,
});


var iconList = Vue.component("iconList", {
  name: "miniButton",
  props: {
    label:{
      type:String
    },
    icon:{
      type:String
    }
  },
  data() {
    return {
    };
  },
  methods: {
  },
  watch: {},
  computed: {
  },
  template: `
  <div class="iconList pt-1 pl-3" style="user-select:none">
    <i class="tt fas" v-bind:class="icon"></i>
  </div>`,
});

var copiarLink = Vue.component("copiarLink", {
  name: "copiarLink",
  props: {
    value:{
      type:String,
      required:true,
    },
    mostrarCheck:Boolean,
  },
  data() {
    return {
    };
  },
  created() {},
  mounted() {},
  methods: {
    copiarLink(){
      navigator.clipboard.writeText(this.value);
    }
  },
  watch: {},
  computed: {},
  template: `

    <div class="">
        <div class="link row">
          <div class="label col-md-12 col-lg-4">Link</div>
          <div class="inputContainer d-flex col-md-12 col-lg-8">
            <input v-model="value" disabled="disabled" class="form-control"/>
            <span @click="copiarLink" class="cp">Copiar</span>
            <i v-if="mostrarCheck" class="fas fa-check-circle"></i>
          </div>
        </div>
    </div>

  `,
});

var DateRange = Vue.component("DateRange", {
  name: "date-range", 
  props: {
    periodo: {
      data_inicial:{
        type:String,
        required:true,
      },
      data_final:{
        type:String,
        required:true,
      }
    },
  },
  data() {
    return {
    };
  },
  created() {},
  mounted() {},
  methods: {
  },
  watch: {},
  computed: {},
  template: `
  <div class="d-flex content-center">
    <input class="form-control text-center date-left" v-model="periodo.data_inicial"></input>
    <div class="date-middle">até</div>
    <input class="form-control text-center date-right" v-model="periodo.data_final"></input>
  </div>
  `,
});
