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
          />
          <h3
            class="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block"
          >
            Poputciki
          </h3>
        </div>
        <ul class="pr-32 xl:flex hidden items-center h-full">
          <li
            class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 tracking-normal"
          >
            Home page
          </li>
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
              class="w-16 xl:w-32 h-full flex items-center justify-center xl:border-r"
            >
              <div class="relative">
                <div class="w-6 h-6 xl:w-auto xl:h-auto text-gray-600">
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
                </div>
                <div
                  class="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto"
                ></div>
              </div>
            </div>
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
              <p class="text-gray-800 text-sm ml-2">Alice Bugaeva</p>
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
          <option class="text-sm text-gray-600">My profile</option>
          <option selected="" class="text-sm text-gray-600">My trips</option>
          <option class="text-sm text-gray-600">My trip requests</option>
        </select>
      </div>
      <ul class="hidden sm:flex flex-row pt-8">
        <li
          class="rounded-t w-32 h-12 flex items-center justify-center bg-gray-300 hover:bg-white text-sm text-gray-800"
        >
          My profile
        </li>
        <li
          class="rounded-t w-32 h-12 flex items-center justify-center bg-white mx-1 text-sm text-gray-800"
        >
          My trips
        </li>
        <li
          class="rounded-t w-32 h-12 flex items-center justify-center bg-gray-300 hover:bg-white mr-1 text-sm text-gray-800"
        >
          My trip requests
        </li>
      </ul>
    </div>
  </div>
  <!-- Page title ends -->
  <!-- Remove class [ h-64 ] when adding a card block -->
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
            <th
              class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
              <b>Status</b>
            </th>
            
          </tr>
        </thead>
        <tbody>
          <tr class="h-24 border-gray-300 border-b">
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              Kazan
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              Sochi
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              20.03.22
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              29.03.22
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              NEW
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

          <tr class="h-24 border-gray-300 border-b">
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              Kazan
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              Nizhny Novgorod
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              14.08.22
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              29.08.22
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              NEW
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
    <div
      class="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full"
    >
      <div
        class="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end"
      >
        <div
          class="flex items-center lg:border-l lg:border-r border-gray-300 py-3 lg:py-0 lg:px-6"
        >
          <p class="text-base text-gray-600 dark:text-gray-400" id="page-view">
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
</template>

<script>
export default {
  name: "LightWithTabs",
  data() {
    return {
      profilePhoto:
        "https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png",
    };
  },
  methods: {
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
