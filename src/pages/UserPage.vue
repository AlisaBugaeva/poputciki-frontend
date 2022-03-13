<template>
  <!-- Navigation starts -->
  <nav class="w-full mx-auto bg-white shadow z-20 relative">
    <div
      class="justify-between container px-6 h-16 flex items-center lg:items-stretch mx-auto"
    >
      <div class="flex items-center">
        <div class="mr-10 flex items-center">
          <img
            class="rounded-full h-10 w-10 object-cover"
            src="https://static.thenounproject.com/png/20477-200.png"
            alt="avatar"
            @click="goHome()"
          />
          <h3
            class="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block"
            @click="goHome()"
          >
            Poputciki
          </h3>
        </div>
        <ul class="pr-32 xl:flex hidden items-center h-full">
          <li
            class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 tracking-normal"
            @click="goHome()"
          >
            Home page
          </li>
          <li
            class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal relative"
          >
            Make a trip
          </li>
        </ul>
      </div>
      <div class="h-full xl:flex hidden items-center justify-end">
        <div class="h-full flex items-center">
          <div
            class="w-32 pr-16 h-full flex items-center justify-end border-r"
          ></div>
          <div class="w-full h-full flex">
            <div
              aria-haspopup="true"
              class="cursor-pointer w-full flex items-center justify-end relative"
              @click="dropdownHandler($event)"
            >
              <ul
                class="p-2 w-40 border-r bg-white absolute rounded z-40 left-0 shadow mt-64 hidden"
              >
                <li
                  class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-user"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="7" r="4" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <span class="ml-2"> Sign out </span>
                  </div>
                </li>
                <li
                  class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-help"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="17" x2="12" y2="17.01" />
                    <path
                      d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"
                    />
                  </svg>
                  <span class="ml-2"> Help Center </span>
                </li>
              </ul>
              <img
                class="rounded-full h-10 w-10 object-cover"
                src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
                alt="avatar"
              />
              <p class="text-gray-800 text-sm ml-2">{{user.name}} {{user.surname}}</p>
              <div class="cursor-pointer text-gray-600">
                <svg
                  aria-haspopup="true"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-down"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- Navigation ends -->
  <!-- Page title starts -->
  <div class="bg-gradient-to-tl from-yellow-300 to-purple-600 w-full">
    <div class="container px-6 py-6 sm:py-0 mx-auto">
      <div class="sm:hidden bg-white w-full relative">
        <div class="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-selector"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#A0AEC0"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="8 9 12 5 16 9" />
            <polyline points="16 15 12 19 8 15" />
          </svg>
        </div>

        <select
          aria-label="Selected tab"
          class="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
        >
          <option selected="" class="text-sm text-gray-600">My profile</option>
          <option class="text-sm text-gray-600">My trips</option>
          <option class="text-sm text-gray-600">My trip requests</option>
        </select>
      </div>
      <ul class="hidden sm:flex flex-row pt-8">
        <li
          @click="sel = 'myProfile'"
          :class="{
            'bg-white': sel == 'myProfile',
            'bg-gray-300': sel != 'myProfile',
          }"
          class="rounded-t w-32 h-12 flex items-center justify-center hover:bg-white mx-1 text-sm text-gray-800"
        >
          My profile
        </li>
        <li
          @click="sel = 'myTrips'"
          :class="{
            'bg-white': sel == 'myTrips',
            'bg-gray-300': sel != 'myTrips',
          }"
          class="rounded-t w-32 h-12 flex items-center justify-center hover:bg-white mx-1 text-sm text-gray-800"
        >
          My trips
        </li>
        <li
          @click="sel = 'myRequests'"
          :class="{
            'bg-white': sel == 'myRequests',
            'bg-gray-300': sel != 'myRequests',
          }"
          class="rounded-t w-32 h-12 flex items-center justify-center hover:bg-white mx-1 text-sm text-gray-800"
        >
           My trip requests
        </li>
      </ul>
    </div>
  </div>
  <!-- Page title ends -->
  <!-- Remove class [ h-64 ] when adding a card block -->
  <section v-if="sel == 'myProfile'" class="relative">
    <div class="container mx-auto px-6 mt-10 h-64">
      <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
      <div class="w-full bg-white p-10">
        <h1
          tabindex="0"
          role="heading"
          aria-label="profile information"
          class="focus:outline-none text-3xl font-bold text-gray-800 mt-1"
        >
          Profile info
        </h1>
        <div class="mt-8 md:flex items-center">
          <div class="flex flex-col">
            <label class="mb-3 text-sm leading-none text-gray-800"
              >First name</label
            >
            <input
              type="name"
              tabindex="0"
              aria-label="Enter first name"
              class="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              :value="`${user.name}`"
            />
          </div>
          <div class="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label class="mb-3 text-sm leading-none text-gray-800"
              >Last name</label
            >
            <input
              type="name"
              tabindex="0"
              aria-label="Enter last name"
              class="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              :value="`${user.surname}`"
            />
          </div>
        </div>
        <div class="mt-12 md:flex items-center">
          <div class="flex flex-col">
            <label class="mb-3 text-sm leading-none text-gray-800"
              >Email Address</label
            >
            <input
              type="email"
              tabindex="0"
              aria-label="Enter email Address"
              class="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              :value="`${user.email}`"
            />
          </div>
          <div class="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label class="mb-3 text-sm leading-none text-gray-800"
              >Phone number</label
            >
            <input
              tabindex="0"
              aria-label="Enter phone number"
              class="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              :value="`${user.phoneNumber}`"
            />
          </div>
        </div>
        <div class="mt-12"></div>
        <button
          role="button"
          aria-label="Next step"
          class="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
        >
          <span class="text-sm font-medium text-center text-gray-800 capitalize"
            >Edit info</span
          >
        </button>
      </div>
    </div>
  </section>

  <section v-if="sel == 'myTrips'" class="relative">
    <div class="container mx-auto px-6 mt-10 h-64">
      <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
        <table class="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr class="w-full h-16 border-gray-300 border-b py-8">
              <th
                class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <b>Departure point</b>
              </th>
              <th
                class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <b>Destination point</b>
              </th>
              <th
                class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <b>Departure date</b>
              </th>
              <th
                class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <b>Destination date</b>
              </th>
            </tr>
          </thead>
          <tbody v-for="t in myTravels" :key="t.start">
            <tr class="h-24 border-gray-300 border-b">
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.start }}
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.finish }}
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.startDate }}
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.finishDate }}
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                <button
                  role="button"
                  aria-label="login"
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm font-semibold leading-none text-white focus:outline-none bg-red-500 border rounded hover:bg-red-400 py-4 w-full"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section v-if="sel == 'myRequests'" class="relative">
    <div class="container mx-auto px-6 mt-10 h-64">
      <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
        <table class="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr class="w-full h-16 border-gray-300 border-b py-8">
              <th
                class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <b>Name</b>
              </th>
              <th
                class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <b>Surname</b>
              </th>
              <th
                class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <b>Departure point</b>
              </th>
              <th
                class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <b>Destination point</b>
              </th>
              <th
                class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <b>Departure date</b>
              </th>
              <th
                class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <b>Destination date</b>
              </th>
              <th
                class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <b>Status</b>
              </th>
            </tr>
          </thead>
          <tbody v-for="t in travels" :key="t.id">
            <tr class="h-24 border-gray-300 border-b">
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.name }}
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.surnsme }}
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.departurePoint }}
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.destinationPoint }}
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.departureDate }}
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.destinationDate }}
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import router from "../router"
import { getUser, getUserTrips} from "../api/api";

export default {
  name: "LightWithTabs",
  data() {

    const Holland = {
      id: 1,
      name: "Tom",
      surnsme: "Holland",
      departurePoint: "Moskow",
      destinationPoint: "Kazan",
      departureDate: "10.02.2022",
      destinationDate: "22.02.2022",
      status: "NEW",
    };
    const Felton = {
      id: 2,
      name: "Tom",
      surnsme: "Felton",
      departurePoint: "Moskow",
      destinationPoint: "Tula",
      departureDate: "14.03.2022",
      destinationDate: "17.03.2022",
      status: "ACCEPTED",
    };

    return {
      sel: "myProfile",
      profilePhoto:
        "https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png",
      myTravels: [],
      travels: [Holland, Felton],

      user: {
        id: 0,
        name: "",
        surnsme: "",
        phoneNumber: "",
        email: "",
        password: "",
      },
    };
  },

mounted() {
    getUser(
      (data) => {
        this.user = data;
      },
      () => {
        this.signIn();
      }
    );

    getUserTrips(
      (data) => {
        this.myTravels = data;
      },
      (error) => {
        this.error = error.message;
      }
    );
  },

  methods: {
    goHome(){
      router.push({name: "Home"})
    },

    signIn() {
      router.push({ name: "Login" });
    },

    dropdownHandler(event) {
      let single = event.currentTarget.getElementsByTagName("ul")[0];
      single.classList.toggle("hidden");
    },
    MenuHandler(el, val) {
      let MainList =
        el.currentTarget.parentElement.getElementsByTagName("ul")[0];
      let closeIcon =
        el.currentTarget.parentElement.getElementsByClassName(
          "close-m-menu"
        )[0];
      let showIcon =
        el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
      if (val) {
        MainList.classList.remove("hidden");
        el.currentTarget.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      } else {
        showIcon.classList.remove("hidden");
        MainList.classList.add("hidden");
        el.currentTarget.classList.add("hidden");
      }
    },
  },
};
</script>
