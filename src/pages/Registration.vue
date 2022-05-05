<template>
  <div class="min-h-screen">
    <div
      class="min-h-screen bg-gradient-to-tl from-yellow-300 to-purple-600 w-full py-16 px-4"
    >
      <div class="flex flex-col items-center justify-center">
        <div class="mr-10 flex items-center"
        @click="goHome()">
          <img
            class="rounded-full h-20 w-20 object-cover"
            src="https://static.thenounproject.com/png/20477-200.png"
            alt="avatar"
          />
          <p
            class="text-xl text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block"
          >
            Poputchiki
          </p>
        </div>

        <div
          class="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-16"
        >
          <p
            tabindex="0"
            role="heading"
            aria-label="Login to your account"
            class="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Create your account
          </p>
          <div class="w-full flex items-center justify-between py-5">
          
          </div>
          <div>
            <lable class="text-sm font-medium leading-none text-gray-800">
              Name
            </lable>
            <input
              v-model="name"
              role="input"
              type="name"
              class="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div>
            <lable class="text-sm font-medium leading-none text-gray-800">
              Surname
            </lable>
            <input
              v-model="surname"
              role="input"
              type="surname"
              class="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div>
            <lable class="text-sm font-medium leading-none text-gray-800">
              Phone number
            </lable>
            <input
              v-model="phoneNumber"
              role="input"
              class="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div>
            <lable class="text-sm font-medium leading-none text-gray-800">
              Email
            </lable>
            <input
              v-model="email"
              aria-label="enter email adress"
              role="input"
              type="email"
              class="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div class="mt-6 w-full">
            <lable class="text-sm font-medium leading-none text-gray-800">
              Password
            </lable>
            <div class="relative flex items-center justify-center">
              <input
                v-model="password"
                aria-label="enter Password"
                role="input"
                type="password"
                class="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
          </div>
          <div class="mt-8 text-red-600">
            {{ error }}
          </div>
          <div class="mt-8">
            <button
              role="button"
              aria-label="login"
              class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              @click="signUp()"
            >
              Sign up
            </button>
            <p class="text-sm mt-4 font-medium leading-none text-gray-500">
            Do you have an account?
            <span
              tabindex="0"
              role="link"
              aria-label="Sign up here"
              class="hover:text-indigo-700 text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
              @click="signIn()"
            >
              Sign in here</span
            >
          </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router"
import { register } from "../api/api";

export default {
  name: "Registration",
  
   data(){
    return{
      name:"",
      surname:"",
      phoneNumber:"",
      email:"",
      password:"",
      error:"",
    };
  },

  methods: {
    signUp(){
        register(this.name,this.surname,this.phoneNumber,this.email,this.password,
        () => {
          router.push({name: "Home"})
        },
        (e) => {
          this.error = e.response.data.errorMessage;
        }
      );
    },

    signIn(){
      router.push({name: "Login"})
    },

    goHome(){
      router.push({name: "Home"})
    },
  },
};
</script>
