<script >
import Swal from "sweetalert2";
import {mapGetters} from 'vuex';
export default {
    created() {
        this.$store.dispatch('user/getUserList');
    },
    computed:{
      ...mapGetters({users: 'user/getUsersbygender', 'totalUsersCount': 'user/totalUsers'})
        // users()
        // {
        //     let userList = this.$store.getters['user/getUsersbygender'];
        //     return userList();
        // },
        // totalUsersCount()
        // {
        //     return this.$store.getters['user/totalUsers'];
        // },
    },
    methods:{
        handleDelete(userId)
        {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                if (result.isConfirmed) {
                    // Swal.fire({
                    // title: "Deleted!",
                    // text: "Your file has been deleted.",
                    // icon: "success"
                    // });

                    //dispatch action
                    this.$store.dispatch('deleteUser', userId);
                }
                });
        }
    }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center mb-3"> CRUD IN VUEX</h1>

        <h3 class="mb-3"> List
          <span>
            <!-- <button class="btn btn-primary addBtn">Add</button> -->
            <router-link :to="{path: '/add-user/'}" class="btn btn-primary addBtn">Add</router-link> 
          </span>
        </h3>

        <table class="table">
          <thead class="bg-info">
            <tr>
              <th class="bg-info" scope="col">#</th>
              <th class="bg-info" scope="col">Name</th>
              <th class="bg-info" scope="col">Email</th>
              <th class="bg-info" scope="col">Username</th>
              <th class="bg-info" scope="col">Phone</th>
              <th class="bg-info" scope="col">Gender</th>
              <th class="bg-info" scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user,index) in users()" :key="index">
              <th scope="row">1</th>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.username}}</td>
              <td>{{user.phoneNo}}</td>
              <td>{{user.gender}}</td>
              <td>
                <router-link :to="{path: '/user-edit/' + user.id }" class="btn btn-primary mr-2">Edit</router-link> 
                <button class="btn btn-danger ml-2" @click="handleDelete(user.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Total Rows: {{totalUsersCount}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.ml-2{
    margin-left:5px;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
