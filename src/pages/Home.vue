<template>
  <div class="bg-gradient-to-tl from-yellow-300 to-purple-600 pb-10">
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
            />
            <h3
              class="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block"
            >
              Poputciki
            </h3>
          </div>
          <ul class="pr-32 xl:flex hidden items-center h-full">
            <li
              class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal relative"
            >
              Make a trip
            </li>
            <li
              class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 mr-10 tracking-normal"
            >
              Join the trip
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
                      <span class="ml-2" @click="signIn()"> Sign in </span>
                    </div>
                  </li>
                  <li
                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center"
                  >
                    <span class="ml-2" @click="signUp()"> Sign up </span>
                  </li>
                </ul>
                <img
                  @click="userPage()"
                  class="rounded-full h-10 w-10 object-cover"
                  src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
                  alt="avatar"
                />
                <p class="text-gray-800 text-sm ml-2">Login</p>
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

    <!-- Page title ends -->
    <div class="container px-6 mx-auto">
      <!-- Remove class [ h-64 ] when adding a card block -->
      <div class="rounded shadow relative bg-white z-10 mt-8 mb-8 w-full">
        <div
          class="bg-gray-200 dark:bg-gray-900 flex items-center justify-center"
          style="font-family: 'Lato', sans-serif"
        >
          <div class="lg:mr-10 my-6 lg:my-0">
            <h4 class="text-2xl font-bold leading-tight text-black mb-2">
              Searching trips
            </h4>
          </div>

          <div class="flex md:flex-row flex-col items-center py-4 px-1">
            <!-- Code block starts -->
            <div class="flex flex-col md:mr-16">
              <div class="relative">
                <div
                  class="absolute text-gray-600 dark:text-gray-400 flex items-center px-2 border-r dark:border-gray-700 h-full cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <input
                  id="departure"
                  class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-12 text-sm border-gray-300 rounded border shadow"
                  placeholder="Starting from..."
                  @input="(e) => (query = e.target.value)"
                  :value="query"
                />
              </div>
            </div>

            <div>
              <div v-for="p in searchPlaces" :key="p.city">
                <p>{{ p.city }}</p>
              </div>
            </div>
            <!-- Code block ends -->
            <!-- Code block starts -->
            <div class="flex flex-col md:mr-16 md:py-0 py-1">
              <div class="relative">
                <div
                  class="absolute text-gray-600 dark:text-gray-400 flex items-center px-2 border-r dark:border-gray-700 h-full cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <input
                  id="destination"
                  class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-12 text-sm border-gray-300 rounded border shadow"
                  placeholder="Going to..."
                />
              </div>
            </div>
            <!-- Code block ends -->
            <!-- Code block starts -->
            <div class="flex flex-col md:py-0 py-1">
              <div class="relative">
                <div
                  class="absolute text-gray-600 dark:text-gray-400 flex items-center px-2 border-r dark:border-gray-700 h-full cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
                  placeholder="Today"
                />
              </div>
            </div>
            <div class="flex flex-col md:py-1 py-1">
              <div class="relative px-4">
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm leading-none text-white py-3 px-5 bg-gray-500 rounded hover:bg-gray-200 focus:outline-none"
                >
                  Search
                </button>
              </div>
            </div>
            <!-- Code block ends -->
          </div>
        </div>
      </div>
    </div>
    <!-- Page title ends -->
    <div class="container px-6 mx-auto mt-10">
      <!-- Remove class [ h-64 ] when adding a card block -->
      <div class="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full">
        <div
          class="mt-7 overflow-x-auto items-center justify-center py-3 px-10"
        >
          <table class="w-full whitespace-nowrap">
            <tbody v-for="t in travels" :key="t.id">
              <tr class="h-3"></tr>
              <tr
                tabindex="0"
                class="focus:outline-none h-16 border border-gray-100 rounded"
              >
                <td class="pr-6 whitespace-no-wrap">
                  <div class="flex items-center">
                    <div class="h-8 w-8">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png"
                        alt=""
                        class="h-full w-full rounded-full overflow-hidden shadow"
                      />
                    </div>
                    <p
                      class="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm"
                    >
                      {{ t.name }} {{ t.surname }}
                    </p>
                  </div>
                </td>
                <td class="">
                  <div class="flex items-center pl-5">
                    <p
                      class="text-base font-medium leading-none text-gray-700 mr-2"
                    >
                      {{ t.start }} -> {{ t.finish }}
                    </p>
                  </div>
                </td>

                <td
                  class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                >
                  <div class="flex items-center pl-5">
                    <p
                      class="text-base font-medium leading-none text-gray-700 mr-2"
                    >
                      {{ t.startDate }} -> {{ t.finishDate }}
                    </p>
                  </div>
                </td>
                <td
                  class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                >
                  {{ t.status }}
                </td>
                <td class="pl-5">
                  <button
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                  >
                    Join
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full"
        >
          <div
            class="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end"
          >
            <div
              class="flex items-center lg:border-l lg:border-r border-gray-300 py-3 lg:py-0 lg:px-6"
            >
              <p
                class="text-base text-gray-600 dark:text-gray-400"
                id="page-view"
              >
                Viewing 1 - 2 of 6
              </p>
              <a
                class="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded"
                onclick="pageView(false)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-left"
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
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </a>
              <a
                class="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer"
                onclick="pageView(true)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-right"
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
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </a>
            </div>
            <div
              class="flex items-center lg:border-r border-gray-300 pb-3 lg:pb-0 lg:px-6"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page title ends -->
    <div class="container px-6 mx-auto mt-10">
      <!-- Remove class [ h-64 ] when adding a card block -->
      <div
        class="rounded shadow relative bg-white z-10 mt-8 mb-8 w-full py-10 px-10"
      >
        <h3
          class="lg:text-2xl text-2xl font-semibold leading-9 text-black dark:text-gray-50"
        >
          Top of places
        </h3>
        <div class="md:flex justify-between mt-12">
          <div
            v-for="p in places"
            :key="p.name"
            class="md:w-1/2 md:ml-6 lg:w-full"
          >
            <div>
              <div class="relative">
                <img :src="`${p.photo}`" :alt="`${p.name}`" />
              </div>
              <h1
                class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800 dark:text-gray-50"
              >
                {{ p.city }}
              </h1>
              <p
                class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-500 dark:text-white"
              >
                {{ p.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import { getTop5Places, getNewTrips } from "../api/api";

require('vue-events')

export default {
  name: "Home2",

  mounted() {
    console.log(`the component is now mounted.`),
      getTop5Places(
        (data) => {
          this.places = data;
        },
        (error) => {
          this.error = error.message;
        }
      );

    getNewTrips(
      (data) => {
        this.travels = data;
      },
      (error) => {
        this.error = error.message;
      }
    );

    /*findPlace(
      (data) => {
        this.searchPlaces = data;
      },
      (error) => {
        this.error = error.message;
      }
    );*/

    /*tripSearch(
      (data) => {
        this.travels = data;
      },
      (error) => {
        this.error = error.message;
      }
    );*/
  },

  watch: {
    query() {
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
        this.updateTimeout = null;
      }
      this.updateTimeout = setTimeout(this.updateResults, 200);
    },
  },

  data() {
    /*const Holland = {
      id: 1,
      name: "Tom",
      surnsme: "Holland",
      departurePoint: "Moskow",
      destinationPoint: "Kazan",
      departureDate: "10.02.2022",
      destinationDate: "22.02.2022",
      status: "OPEN",
    };
    const Felton = {
      id: 2,
      name: "Tom",
      surnsme: "Felton",
      departurePoint: "Moskow",
      destinationPoint: "Tula",
      departureDate: "14.03.2022",
      destinationDate: "17.03.2022",
      status: "OPEN",
    };

    const Sochi = {
      name: "Sochi",
      photo:
        "http://localhost:8081/img/Sochi.jpg",
      info: "Sochi, a Russian city on the Black Sea, is known as a summer beach resort, and was host of the 2014 Winter Olympics. Its parks include the palm-filled Arboretum. It's also notable for 20th-century neoclassical buildings such as the columned Winter Theatre. Forested Sochi National Park is a 1,937-sq.-km protected area in the nearby Caucasus Mountains. Some 70 km inland, Krasnaya Polyana is a prominent ski resort.",
    };
    const Voronezh = {
      name: "Voronezh",
      photo:
        "http://localhost:8081/img/Voronezh.jpg",
      info: "Voronezh is a city on the Voronezh River in southwestern Russia. Landscaped Petrovsky Park is home to a bronze statue of Peter I. Housed in a baroque building, the Voronezh Regional Art Museum has collections of Ancient Egyptian art and several centuries of Russian paintings. The ship museum Goto Predestination recreates 18th-century naval life. Scarlet Sails park has pine trees, playgrounds and an outdoor theater.",
    };
    const NizhnyNovgorod = {
      name: "Nizhny Novgorod",
      photo:
        "http://localhost:8081/img/Nizhny%20Novgorod.jpg",
      info: "Nizhny Novgorod is a large city on the Volga River in western Russia. It’s known for its 16th-century Kremlin, ringed by 13 fortified towers, including the Dmitrovskaya Tower. Within the Kremlin’s walls is the green-spired Cathedral of the Archangel Michael, rebuilt in the 17th century. Nizhny Novgorod State Art Museum, housed in a grand building, exhibits Russian and European paintings and a collection of icons.",
    };
    const SaintPetersburg = {
      name: "Saint Petersburg",
      photo:
        "http://localhost:8081/img/Saint%20Petersburg.jpg",
      info: "St. Petersburg is a Russian port city on the Baltic Sea. It was the imperial capital for 2 centuries, having been founded in 1703 by Peter the Great, subject of the city's iconic “Bronze Horseman” statue. It remains Russia's cultural center, with venues such as the Mariinsky Theatre hosting opera and ballet, and the State Russian Museum showcasing Russian art, from Orthodox icon paintings to Kandinsky works.",
    };*/

    return {
      travels: [],

      places: [],
      searchPlaces: [],

      query: "",
      updateTimeout: null,

      show: false,
      show1: false,
      drop: false,
      drop1: false,
      drop2: true,
    };
  },

  methods: {
    updateResults() {
      this.query = this.query.trim();
      if (this.query.length <= 0) {
        this.searchPlaces = [];
        return;
      }

      this.$api.get(`/places?name=${encodeURI(this.query)}`).then((res) => {
        this.searchPlaces = res.data.data;
      });
    },

    signIn() {
      router.push({ name: "Login" });
    },

    signUp() {
      router.push({ name: "Registration" });
    },

    userPage() {
      router.push({ name: "UserPage" });
    },

    dropdownHandler(event) {
      let single = event.currentTarget.getElementsByTagName("ul")[0];
      single.classList.toggle("hidden");
    },
    sidebarHandler() {
      var sideBar = document.getElementById("mobile-nav");
      sideBar.classList.toggle("hidden");
    },
  },
};
</script>

<style scoped>

  .results {
    background-color: white;
    max-height: 300px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    .result {
      position: relative;
      background-color: white;
      height: 32px;
      cursor: pointer;
      transition: all .2s;
      color: rgb(50, 50, 50);

      &:hover {
        background-color: rgb(240, 240, 240);
      }

      p {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding-left: 15px;
      }
    }
  }

</style>