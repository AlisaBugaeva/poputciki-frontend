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
              Poputchiki
            </h3>
          </div>

          <div
            class="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
            id="modal"
            v-if="modalWindow"
          >
            <div
              role="alert"
              class="container mx-auto w-11/12 md:w-2/3 max-w-lg"
            >
              <div
                class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"
              >
                <div class="w-full flex justify-start text-gray-600 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
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
                <h1
                  class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"
                >
                  Make a trip
                </h1>
                <label
                  for="name"
                  class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >Start point</label
                >
                <input
                  class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  @input="(e) => (makeTripStartPoint = e.target.value)"
                  :value="makeTripStartPoint"
                />
                <div class="results">
                  <div
                    class="result"
                    v-for="p in makeNewTripStartPoints"
                    :key="p.city"
                    @click="makeTripStartPoint = p.city"
                  >
                    <p>{{ p.city }}</p>
                  </div>
                </div>
                <label
                  for="name"
                  class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >Finish point</label
                >
                <input
                  class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  @input="(e) => (makeTripFinishPoint = e.target.value)"
                  :value="makeTripFinishPoint"
                />
                <div class="results">
                  <div
                    class="result"
                    v-for="p in makeNewTripFinishPoints"
                    :key="p.city"
                    @click="makeTripFinishPoint = p.city"
                  >
                    <p>{{ p.city }}</p>
                  </div>
                </div>

                <label
                  for="expiry"
                  class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >Start Date</label
                >
                <div class="relative mb-5 mt-2">
                  <input
                    class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    type="date"
                    @input="(e) => (makeTripStartDate = e.target.value)"
                  />
                </div>

                <label
                  for="expiry"
                  class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >Finish Date</label
                >
                <div class="relative mb-5 mt-2">
                  <input
                    class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    type="date"
                    @input="(e) => (makeTripFinishDate = e.target.value)"
                  />
                </div>
                <p>{{ errorTrip }}</p>

                <div class="flex items-center justify-start w-full">
                  <button
                    class="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                    @click="makingTrip()"
                  >
                    Submit
                  </button>
                  <button
                    class="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                    @click="fadeOut()"
                  >
                    Cancel
                  </button>
                </div>
                <div
                  class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                  @click="fadeOut()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    class="icon icon-tabler icon-tabler-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            class="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
            id="modal"
            v-if="successfulJoin"
          >
            <div
              role="alert"
              class="container mx-auto w-11/12 md:w-2/3 max-w-lg"
            >
              <div
                class="relative py-8 px-5 md:px-10 bg-green-200 shadow-md rounded border border-gray-400"
              >
                <h1 class="text-gray-800 font-bold tracking-normal mb-4">
                  Successfully!
                </h1>
                <h3
                  class="text-gray-800 font-lg tracking-normal leading-tight mb-4"
                >
                  Your application to join the tip has been sent
                </h3>

                <div class="flex items-center justify-start w-full">
                  <button
                    class="focus:outline-none transition duration-150 ease-in-out hover:bg-green-500 bg-green-600 rounded text-white px-8 py-2 text-sm"
                    @click="(successfulJoin = false), userPageRequests()"
                  >
                    Go to your trip requests
                  </button>
                </div>
                <div
                  class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                  @click="fadeOut(), (successfulJoin = false)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    class="icon icon-tabler icon-tabler-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            class="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
            id="modal"
            v-if="isError"
          >
            <div
              role="alert"
              class="container mx-auto w-11/12 md:w-2/3 max-w-lg"
            >
              <div
                class="relative py-8 px-5 md:px-10 bg-red-400 shadow-md rounded border border-gray-400"
              >
                <h1 class="text-gray-800 font-bold tracking-normal mb-4">
                  Error!
                </h1>
                <h3
                  class="text-gray-800 font-lg tracking-normal leading-tight mb-4"
                >
                  {{ error }}
                </h3>
                <div
                  class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-700 hover:text-gray-500 transition duration-150 ease-in-out"
                  @click="fadeOut()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    class="icon icon-tabler icon-tabler-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            class="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
            id="modal"
            v-if="successfully"
          >
            <div
              role="alert"
              class="container mx-auto w-11/12 md:w-2/3 max-w-lg"
            >
              <div
                class="relative py-8 px-5 md:px-10 bg-green-200 shadow-md rounded border border-gray-400"
              >
                <h1 class="text-gray-800 font-bold tracking-normal mb-4">
                  Successfully!
                </h1>
                <h3
                  class="text-gray-800 font-lg tracking-normal leading-tight mb-4"
                >
                  You have made a new trip
                </h3>

                <div class="flex items-center justify-start w-full">
                  <button
                    class="focus:outline-none transition duration-150 ease-in-out hover:bg-green-500 bg-green-600 rounded text-white px-8 py-2 text-sm"
                    @click="(successfully = false), userPageMyTrips()"
                  >
                    Go to your trips
                  </button>
                </div>
                <div
                  class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                  @click="fadeOut()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    class="icon icon-tabler icon-tabler-x"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full flex justify-center py-12" id="button">
            <div
              class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal relative"
              @click="(modalWindow = true), fadeIn()"
            >
              Make a trip
            </div>
          </div>
        </div>
        <div class="h-full xl:flex hidden items-center justify-end">
          <div class="h-full flex items-center">
            <div class="w-32 pr-16 h-full flex items-center justify-end"></div>
            <div
              class="h-full w-20 flex items-center justify-center border-r border-l"
              @click="userPageChats()"
            >
              <div class="relative cursor-pointer text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bell"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                  ></path>
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                </svg>
                <div
                  class="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto"
                  v-if="countMessages!=0"
                ></div>
              </div>
            </div>
            <div class="w-full h-full flex">
              <div v-if="!user" class="justify-center py-4 px-4" id="button">
                <button
                  @click="signIn()"
                  class="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
                >
                  Login
                </button>
              </div>
              <div
                v-else
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
                      <span @click="doLogout()" class="ml-2"> Sign out </span>
                    </div>
                  </li>
                </ul>
                <img
                  class="rounded-full h-10 w-10 object-cover"
                  src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
                  alt="avatar"
                  @click="userPage()"
                />
                <p class="text-gray-800 text-sm ml-2">
                  {{ user.name }} {{ user.surname }}
                </p>
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
              <div class="results">
                <div
                  class="result"
                  v-for="p in searchPlacesStart"
                  :key="p.city"
                  @click="query = p.city"
                >
                  <p>{{ p.city }}</p>
                </div>
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
                  @input="(e) => (query1 = e.target.value)"
                  :value="query1"
                />
              </div>
              <div class="results">
                <div
                  class="result"
                  v-for="p in searchPlacesFinish"
                  :key="p.city"
                  @click="query1 = p.city"
                >
                  <p>{{ p.city }}</p>
                </div>
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
                  type="date"
                  placeholder="Starting date"
                  @input="(e) => (query2 = e.target.value)"
                />
              </div>
            </div>
            <div class="flex flex-col md:py-1 py-1">
              <div class="relative px-4">
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm leading-none text-white py-3 px-5 bg-gray-500 rounded hover:bg-gray-400 focus:outline-none"
                  @click="searchingTrips()"
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
                        src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
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
                    @click="(idJoin = `${t.id}`), joinThistrip()"
                  >
                    Join
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
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
          Top 5 places
        </h3>
        <div class="md:flex items-start justify-between mt-12">
          <div class="md:w-1/2 lg:w-full">
            <div v-if="places[0]">
              <div class="relative">
                <img :src="`${places[0].photo}`" :alt="`${places[0].city}`" />
              </div>
              <h1
                class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800"
              >
                {{ places[0].city }}
              </h1>
              <p
                class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600"
              >
                {{ places[0].description }}
              </p>
            </div>

            <div class="mt-9" v-if="places[1]">
              <div class="relative">
                <img :src="`${places[1].photo}`" :alt="`${places[1].city}`" />
              </div>
              <h1
                class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800"
              >
                {{ places[1].city }}
              </h1>
              <p
                class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600"
              >
                {{ places[1].description }}
              </p>
            </div>

            <div class="mt-9" v-if="places[4]">
              <div class="relative">
                <img :src="`${places[4].photo}`" :alt="`${places[4].city}`" />
              </div>
              <h1
                class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800"
              >
                {{ places[4].city }}
              </h1>
              <p
                class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600"
              >
                {{ places[4].description }}
              </p>
            </div>
          </div>

          <div class="md:w-1/2 md:ml-6 md:mt-0 mt-9 lg:w-full">
            <div v-if="places[2]">
              <div class="relative">
                <img :src="`${places[2].photo}`" :alt="`${places[2].city}`" />
              </div>
              <h1
                class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800"
              >
                {{ places[2].city }}
              </h1>
              <p
                class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600"
              >
                {{ places[2].description }}
              </p>
            </div>
            <div class="mt-9" v-if="places[3]">
              <div class="relative">
                <img :src="`${places[3].photo}`" :alt="`${places[3].city}`" />
              </div>
              <h1
                class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800"
              >
                {{ places[3].city }}
              </h1>
              <p
                class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600"
              >
                {{ places[3].description }}
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
import {
  getTop5Places,
  getNewTrips,
  findPlaces,
  tripSearch,
  getUser,
  makeNewTrip,
  logout,
  joinTheTrip,
  countUnreadMessages,
} from "../api/api";

require("vue-events");

export default {
  name: "Home2",

  data() {
    return {
      user: {
        id: 0,
        name: "",
        surnsme: "",
        phoneNumber: "",
        email: "",
        password: "",
      },

      travels: [],

      places: [],
      searchPlacesStart: [],
      searchPlacesFinish: [],

      makeNewTripStartPoints: [],
      makeNewTripFinishPoints: [],

      query: "",
      query1: "",
      query2: "",
      updateTimeout: null,

      makeTripStartPoint: "",
      makeTripFinishPoint: "",
      makeTripStartDate: "",
      makeTripFinishDate: "",
      errorTrip: "",

      show: false,
      show1: false,
      drop: false,
      drop1: false,
      drop2: true,

      modalWindow: false,
      successfully: false,
      successfulJoin: false,
      isError: false,

      idJoin: 0,
      countMessages:0,
    };
  },

  mounted() {
    console.log(`the component is now mounted.`),
      getTop5Places(
        (data) => {
          this.places = data;
        },
        (error) => {
          this.isError = true;
          this.error = error.message;
        }
      );

    getNewTrips(
      (data) => {
        this.travels = data;
      },
      (error) => {
        this.isError = true;
        this.error = error.message;
      }
    );

    getUser(
      (data) => {
        this.user = data;
      },
      () => {
        this.user = "";
      }
    );

    countUnreadMessages(
      (data) => {
        this.countMessages = data;
      },
      (error) => {
        this.isError = true;
        this.error = error.message;
      }
    );
  },

  watch: {
    query() {
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
        this.updateTimeout = null;
      }
      this.updateTimeout = setTimeout(this.updateResults, 200);
    },

    query1() {
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
        this.updateTimeout = null;
      }
      this.updateTimeout = setTimeout(this.updateResults1, 200);
    },

    makeTripStartPoint() {
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
        this.updateTimeout = null;
      }
      this.updateTimeout = setTimeout(this.updateResults2, 200);
    },

    makeTripFinishPoint() {
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
        this.updateTimeout = null;
      }
      this.updateTimeout = setTimeout(this.updateResults3, 200);
    },
  },

  methods: {
    searchingTrips() {
      tripSearch(
        this.query,
        this.query1,
        this.query2,
        (data) => {
          this.travels = data;
        },
        (error) => {
          this.isError = true;
          this.error = error.errorMessage;
        }
      );
    },

    makingTrip() {
      makeNewTrip(
        this.makeTripStartPoint,
        this.makeTripFinishPoint,
        this.makeTripStartDate,
        this.makeTripFinishDate,
        () => {
          this.fadeOut();
          this.successfully = true;
        },
        (error) => {
          this.errorTrip = error.response.data.errorMessage;
        }
      );
    },

    joinThistrip() {
      joinTheTrip(
        this.idJoin,
        () => {
          this.successfulJoin = true;
        },
        (error) => {
          this.isError = true;
          this.error = error.message;
        }
      );
    },

    doLogout() {
      logout(
        () => {
          this.user = "";
          localStorage.removeItem("Token");
        },
        (error) => {
          this.isError = true;
          this.error = error.message;
        }
      );
    },

    updateResults() {
      this.query = this.query.trim();
      if (this.query.length <= 0) {
        this.searchPlacesStart = [];
        return;
      }

      findPlaces(
        encodeURI(this.query),
        (res) => {
          this.searchPlacesStart = res;
        },
        (error) => {
          this.isError = true;
          this.error = error.message;
        }
      );
    },

    updateResults1() {
      this.query1 = this.query1.trim();
      if (this.query1.length <= 0) {
        this.searchPlacesFinish = [];
        return;
      }

      findPlaces(
        encodeURI(this.query1),
        (res) => {
          this.searchPlacesFinish = res;
        },
        (error) => {
          this.isError = true;
          this.error = error.message;
        }
      );
    },

    updateResults2() {
      this.makeTripStartPoint = this.makeTripStartPoint.trim();
      if (this.makeTripStartPoint.length <= 0) {
        this.makeNewTripStartPoints = [];
        return;
      }

      findPlaces(
        encodeURI(this.makeTripStartPoint),
        (res) => {
          this.makeNewTripStartPoints = res;
        },
        (error) => {
          this.isError = true;
          this.error = error.message;
        }
      );
    },

    updateResults3() {
      this.makeTripFinishPoint = this.makeTripFinishPoint.trim();
      if (this.makeTripFinishPoint.length <= 0) {
        this.makeNewTripFinishPoints = [];
        return;
      }

      findPlaces(
        encodeURI(this.makeTripFinishPoint),
        (res) => {
          this.makeNewTripFinishPoints = res;
        },
        (error) => {
          this.isError = true;
          this.error = error.message;
        }
      );
    },

    signIn() {
      router.push({ name: "Login" });
    },

    signUp() {
      router.push({ name: "Registration" });
    },

    userPage() {
      router.push({ name: "UserPage", params: { sel: "myProfile" } });
    },

    userPageRequests() {
      router.push({ name: "UserPage", params: { sel: "myRequests" } });
    },

    userPageMyTrips() {
      router.push({ name: "UserPage", params: { sel: "myTrips" } });
    },

    userPageChats() {
      router.push({ name: "UserPage", params: { sel: "chats" } });
    },

    dropdownHandler(event) {
      let single = event.currentTarget.getElementsByTagName("ul")[0];
      single.classList.toggle("hidden");
    },
    sidebarHandler() {
      var sideBar = document.getElementById("mobile-nav");
      sideBar.classList.toggle("hidden");
    },

    fadeOut() {
      let el = document.getElementById("modal");
      el.style.opacity = 1;
      (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
          el.style.display = "none";
        } else {
          requestAnimationFrame(fade);
        }
      })();
    },
    fadeIn(display) {
      if (this.user) {
        let el = document.getElementById("modal");
        el.style.opacity = 0;
        el.style.display = display || "flex";
        (function fade() {
          let val = parseFloat(el.style.opacity);
          if (!((val += 0.2) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
          }
        })();
      } else {
        this.signIn();
      }
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
    transition: all 0.2s;
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
