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
            Poputchiki
          </h3>
        </div>

        <div
          class="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
          id="modal"
          v-if="modalWindow"
        >
          <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
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
          v-if="successfully"
        >
          <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
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
                  @click="
                    (sel = 'myTrips'), (successfully = false), getUserTrips
                  "
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

        <div
          class="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
          id="modal"
          v-if="isError"
        >
          <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
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
                @click="isError = false"
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
          v-if="requests"
        >
          <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div
              class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"
            >
              <h1
                class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"
              >
                Requests
              </h1>
              <div class="container px-6 mx-auto mt-10">
                <!-- Remove class [ h-64 ] when adding a card block -->
                <div
                  class="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full"
                >
                  <div
                    class="mt-7 overflow-x-auto items-center justify-center py-3 px-4"
                  >
                    <table class="w-full whitespace-nowrap">
                      <tbody v-for="p in poputchiki" :key="p.id">
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
                                  alt="avatar"
                                  class="h-full w-full rounded-full overflow-hidden shadow"
                                />
                              </div>
                              <p
                                class="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm"
                              >
                                {{ p.name }} {{ p.surname }}
                              </p>
                            </div>
                          </td>
                          <td class="pl-5">
                            <button
                              class="focus:ring-2 focus:ring-offset-2 text-sm leading-none text-gray-600 py-3 px-5 bg-green-200 rounded hover:bg-green-100 focus:outline-none"
                              @click="(idPoputchik = `${p.id}`), accepting()"
                            >
                              Accept
                            </button>
                          </td>
                          <td class="pl-5">
                            <button
                              class="focus:ring-2 focus:ring-offset-2 text-sm leading-none text-gray-600 py-3 px-5 bg-red-200 rounded hover:bg-red-100 focus:outline-none"
                              @click="(idPoputchik = `${p.id}`), rejecting()"
                            >
                              Reject
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div
                class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                @click="fadeOut(), (requests = false)"
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

        <ul class="pr-32 xl:flex hidden items-center h-full">
          <li
            class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 tracking-normal"
            @click="goHome()"
          >
            Home page
          </li>
          <li
            class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal relative"
            @click="(modalWindow = true), fadeIn()"
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
          <div
            class="h-full w-20 flex items-center justify-center border-r border-l"
            @click="sel = 'chats'"
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
                v-if="countMessages != 0"
              ></div>
            </div>
          </div>

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
                    <span class="ml-2" @click="doLogout()"> Sign out </span>
                  </div>
                </li>
              </ul>
              <img
                class="rounded-full h-10 w-10 object-cover"
                src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
                alt="avatar"
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
            'bg-white': sel == 'myProfile' || sel == '',
            'bg-gray-300': sel != 'myProfile' && sel != '',
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
        <li
          @click="sel = 'acceptedRequests'"
          :class="{
            'bg-white': sel == 'acceptedRequests',
            'bg-gray-300': sel != 'acceptedRequests',
          }"
          class="rounded-t w-32 h-12 flex items-center justify-center hover:bg-white mx-1 text-sm text-gray-800"
        >
          Accepted requests
        </li>
        <li
          @click="sel = 'chats'"
          :class="{
            'bg-white': sel == 'chats',
            'bg-gray-300': sel != 'chats',
          }"
          class="rounded-t w-32 h-12 flex items-center justify-center hover:bg-white mx-1 text-sm text-gray-800"
        >
          Chats
        </li>
      </ul>
    </div>
  </div>
  <!-- Page title ends -->
  <!-- Remove class [ h-64 ] when adding a card block -->
  <section v-if="sel == 'myProfile' || sel == ''" class="relative">
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
              @input="(e) => (editSurname = e.target.value)"
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
          <span
            class="text-sm font-medium text-center text-gray-800 capitalize"
            @click="(user.surname = editSurname), editingUser()"
            >Save info</span
          >
        </button>
      </div>
    </div>
  </section>

  <section v-if="sel == 'myTrips'" class="relative">
    <div class="container mx-auto px-6 mt-10 h-64">
      <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
        <p>{{ error }}</p>
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
              <th
                class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <b>Number of requests</b>
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
                @click="(idRequest = `${t.id}`), seeRequests()"
              >
                {{ t.numRequests }}
                <p text-gray-500>(click here to see them)</p>
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                <button
                  role="button"
                  aria-label="login"
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm font-semibold leading-none text-white focus:outline-none bg-red-500 border rounded hover:bg-red-400 py-4 w-full"
                  @click="(idDelete = `${t.id}`), deleteThistrip()"
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
                <b>Email</b>
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
                {{ t.surname }}
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.email }}
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
              <td class="pl-5"
              v-if="t.email != '-'">
                <button
                  class="focus:ring-2 focus:ring-offset-2 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                  @click="
                    (idPoputchik = `${t.id}`),
                      (chat = true),
                      (chatName = `${t.name} ${t.surname}`)
                  "
                >
                  Open chat
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section v-if="sel == 'acceptedRequests'" class="relative">
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
                <b>Email</b>
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
            </tr>
          </thead>
          <tbody v-for="t in acceptedRequests" :key="t.id">
            <tr class="h-24 border-gray-300 border-b">
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.name }}
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.surname }}
              </td>
              <td
                class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
              >
                {{ t.email }}
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
              <td class="pl-5">
                <button
                  class="focus:ring-2 focus:ring-offset-2 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                  @click="
                    (idPoputchik = `${t.id}`),
                      (chat = true),
                      (chatName = `${t.name} ${t.surname}`)
                  "
                >
                  Open chat
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section v-if="sel == 'chats'" class="relative">
        <div class="container px-6 mx-auto mt-10">
      <!-- Remove class [ h-64 ] when adding a card block -->
      <div class="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full">
        <div
          class="mt-7 overflow-x-auto items-center justify-center py-3 px-10"
        >
          <table class="w-full whitespace-nowrap">
            <tbody v-for="d in dialogs" :key="d.id">
              <tr class="h-3"></tr>
              <tr
                tabindex="0"
                class="focus:outline-none h-16 border border-gray-100 rounded"
                @click="
                    (idPoputchik = `${d.id}`),
                      (chat = true),
                      (chatName = `${d.name} ${d.surname}`)
                      "
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
                      class="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-lg font-bold"
                    >
                      {{ d.name }} {{ d.surname }}
                      <br class="text-sm">{{ d.departurePoint }} -> {{ d.destinationPoint }}
                      <br>{{ d.departureDate }} -> {{ d.destinationDate  }}
                    </p>

                  </div>
                </td>
                <td class="pr-6 whitespace-no-wrap">
                  <div class="flex items-center pl-5">
                    <p
                      class=" text-xl font-medium leading-none text-gray-700 mr-2"
                    >
                      {{ d.lastMessage }} 
                    </p>

                  </div>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
<Chat :chatName="chatName" :idPoputchik="idPoputchik" :userId="user.id" @close="chat=false" v-if="chat"/>
</template>

<script>
import router from "../router";
import Chat from "../pages/Chat.vue";
import {
  getUser,
  getUserTrips,
  logout,
  makeNewTrip,
  findPlaces,
  deleteTheTrip,
  editUser,
  findPoputchiki,
  acceptRequest,
  rejectRequest,
  getUserRequests,
  getAcceptedRequests,
  viewDialogs,
  countUnreadMessages,
} from "../api/api";

export default {
  name: "LightWithTabs",
  components:{Chat},
  data() {
    return {
      profilePhoto:
        "https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png",
      myTravels: [],
      travels: [],
      acceptedRequests: [],
      messages: [],
      dialogs: [],
      error: "",

      user: {
        id: 0,
        name: "",
        surnsme: "",
        phoneNumber: "",
        email: "",
        password: "",
      },

      editSurname: "",

      makeNewTripStartPoints: [],
      makeNewTripFinishPoints: [],

      makeTripStartPoint: "",
      makeTripFinishPoint: "",
      makeTripStartDate: "",
      makeTripFinishDate: "",
      errorTrip: "",

      modalWindow: false,
      successfully: false,
      requests: false,
      isError: false,
      chat: false,

      sel: this.$route.params.sel,

      idDelete: 0,
      idRequest: 0,
      idPoputchik: 0,
      idDialog: 0,

      poputchiki: [],

      chatName: "",
      countMessages: 0,
    };
  },

  mounted() {

    viewDialogs(
      (data) => {
        this.dialogs = data;
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
        this.signIn();
      }
    );

    getUserTrips(
      (data) => {
        this.myTravels = data;
      },
      (error) => {
        this.isError = true;
        this.error = error.message;
      }
    );

    getUserRequests(
      (data) => {
        this.travels = data;
      },
      (error) => {
        this.isError = true;
        this.error = error.message;
      }
    );

    getAcceptedRequests(
      (data) => {
        this.acceptedRequests = data;
      },
      (error) => {
        this.isError = true;
        this.error = error.message;
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

    ring(n){
      this.cMessages = n;
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
          getUserTrips(
            (data) => {
              this.myTravels = data;
            },
            (error) => {
              this.isError = true;
              this.error = error.message;
            }
          );
        },
        (error) => {
          this.errorTrip = error.response.data.errorMessage;
        }
      );
    },

    doLogout() {
      logout(
        () => {
          this.user = "";
          localStorage.removeItem("Token");
          this.goHome();
        },
        (error) => {
          this.isError = true;
          this.error = error.message;
        }
      );
    },

    seeRequests() {
      findPoputchiki(
        this.idRequest,
        (data) => {
          this.poputchiki = data;
          this.requests = true;
        },
        (error) => {
          this.isError = true;
          this.error = error.message;
        }
      );
    },

    accepting() {
      acceptRequest(
        this.idPoputchik,
        this.idRequest,
        () => {
          this.seeRequests();
          getUserTrips(
            (data) => {
              this.myTravels = data;
            },
            (error) => {
              this.isError = true;
              this.error = error.message;
            }
          );
        },
        (error) => {
          this.isError = true;
          this.error = error.message;
        }
      );
    },

    rejecting() {
      rejectRequest(
        this.idPoputchik,
        this.idRequest,
        () => {
          this.seeRequests();
          getUserTrips(
            (data) => {
              this.myTravels = data;
            },
            (error) => {
              this.isError = true;
              this.error = error.message;
            }
          );
        },
        (error) => {
          this.isError = true;
          this.error = error.message;
        }
      );
    },

    deleteThistrip() {
      deleteTheTrip(
        this.idDelete,
        () => {
          getUserTrips(
            (data) => {
              this.myTravels = data;
            },
            (error) => {
              this.isError = true;
              this.error = error.message;
            }
          );
        },
        (error) => {
          this.isError = true;
          this.error = error.message;
        }
      );
    },

    editingUser() {
      editUser(
        this.user.name,
        this.user.surname,
        this.user.phoneNumber,
        (data) => {
          this.user = data;
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

    goHome() {
      router.push({ name: "Home" });
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
