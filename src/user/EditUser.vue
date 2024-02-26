<script >
import {mapState, mapMutations, mapActions} from 'vuex';
export default {
    // data()
    // {
    //     return {
           
    //     }
    // },
    created(){
        this.getUserData();
    },
    computed:{
        ...mapState({
            form: state => state.user.form
        })
        // form()
        // {
        //     return this.$store.state.user.form;
        // }
    },
    methods: {
        ...mapMutations({
            'addInputFields': 'user/SET_INPUT_FIELDS'
        }),
        ...mapActions({
            getUserEditData : 'user/getUserData',
            submitUserEditData : 'user/editUser'
        }),
        handleUserSubmit()
        {
            let user_id = this.$route.params.id;
            // to submit user
            this.submitUserEditData(user_id);
        },
        getUserData()
        {
            let user_id = this.$route.params.id;
            // this.$store.dispatch('user/getUserData', user_id);
            this.getUserEditData(user_id);
        },
        inputHandler(event)
        {
            this.addInputFields({targetField: event.target.name, value: event.target.value})
            // this.$store.commit('user/SET_INPUT_FIELDS', {targetField: event.target.name, value: event.target.value});
        }
    },
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center mb-3"> CRUD IN VUEX</h1>

        <h3 class="mb-3"> Edit User
          <span>
            <router-link :to="{path: '/'}" class="btn btn-primary addBtn">List</router-link> 
          </span>
        </h3>

        <hr/>

        <form class="mt-4" @submit.prevent="handleUserSubmit">
            <div class="row">
                <div class="col-md-6 mb-2">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="name" @change="(event) => inputHandler(event)">
                        <!-- <input type="text" class="form-control" id="exampleFormControlInput1"  v-model="form.email"> -->
                    </div>
                </div>
                <div class="col-md-6  mb-2">
                    <div class="form-group">
                    <label for="exampleFormControlInput2">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" v-model="form.email">
                    </div>
                </div>
                <div class="col-md-6  mb-2">
                    <div class="form-group">
                        <label for="exampleFormControlInput3">Phone no</label>
                        <input type="tel" class="form-control" id="exampleFormControlInput3" v-model="form.phoneNo">
                    </div>
                </div>
                <div class="col-md-6  mb-2">
                    <div class="form-group">
                        <label for="exampleFormControlInput4">Username</label>
                        <input type="text" class="form-control" id="exampleFormControlInput4" v-model="form.username">
                    </div>
                </div>
                <div class="col-md-6  mb-2">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Gender</label>
                        <select class="form-control" id="exampleFormControlSelect1" v-model="form.gender">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-12  mb-2">
                    <button type="submit" class="btn btn-primary">submit</button>
                </div>
            </div>

        </form>
        
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
