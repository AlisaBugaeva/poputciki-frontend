<template>
  <div class="flex flex-no-wrap bg-white">
    <!-- Sidebar starts -->
    <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
    <!-- Sidebar ends -->
    <div class="w-full">
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
                        <span class="ml-2"> Sign in </span>
                      </div>
                    </li>
                    <li
                      class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center"
                    >
                      <span class="ml-2"> Sign up </span>
                    </li>
                  </ul>
                  <img
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
      <!-- Remove class [ h-64 ] when adding a card block -->

      <div class="w-full bg-gradient-to-tl from-yellow-300 to-purple-600 pt-20">
        <div
          class="mx-auto container bg-white dark:bg-gray-800 dark:bg-gray-800 shadow rounded"
        >
          <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
            <table class="min-w-full bg-white dark:bg-gray-800">
              <thead>
                <tr class="w-full h-16 border-gray-300 border-b py-8">
                  
                  <th></th>
                  <th
                    class="text-black dark:text-gray-400 font-normal pr-6 text-center"
                  >
                    <div
                      class="w-full font-bold h-full hidden lg:flex items-center pl-6 pr-24"
                    >
                      Searching trip
                    </div>
                  </th>
                  <th>
                    <div class="flex flex-col md:py-2 py-4">
                      <label
                        for="email1"
                        class="text-gray-400 text-sm font-bold leading-tight tracking-normal mb-2"
                      ></label>
                      <input
                        id="email1"
                        class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                        placeholder="Departure point"
                      />
                    </div>
                  </th>
                  <th>
                    <div class="flex flex-col md:py-0 py-4">
                      <label
                        for="email1"
                        class="text-gray-400 text-sm font-bold leading-tight tracking-normal mb-2"
                      ></label>
                      <input
                        id="email1"
                        class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                        placeholder="Destination point"
                      />
                    </div>
                  </th>
                  <th>
                    <div class="flex flex-col md:py-0 py-4">
                      <label
                        for="email1"
                        class="text-gray-400 text-sm font-bold leading-tight tracking-normal mb-2"
                      ></label>
                      <input
                        id="email1"
                        class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                        placeholder="Departure date"
                      />
                    </div>
                  </th>
                  <th>
                    <div class="flex flex-col md:py-0 py-4">
                      <label
                        for="email1"
                        class="text-gray-400 text-sm font-bold leading-tight tracking-normal mb-2"
                      ></label>
                      <input
                        id="email1"
                        class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                        placeholder="Destination date"
                      />
                    </div>
                  </th>
                </tr>
              </thead>

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
              <tbody>
                <tr class="h-24 border-gray-300 border-b">
                  <td
                    class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                  >
                    Tom
                  </td>
                  <td
                    class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                  >
                    Holland
                  </td>
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
                      class="focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm font-semibold leading-none text-white focus:outline-none bg-green-500 border rounded hover:bg-green-400 py-4 w-full"
                    >
                      Join
                    </button>
                  </td>
                </tr>

                <tr class="h-24 border-gray-300 border-b">
                  <td
                    class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                  >
                    Tom
                  </td>
                  <td
                    class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                  >
                    Felton
                  </td>
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
                      class="focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm font-semibold leading-none text-white focus:outline-none bg-green-500 border rounded hover:bg-green-400 py-4 w-full"
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

          <div
            class="2xl:mx-auto 2xl:container 2xl:px-20 xl:px-12 sm:px-6 w-full bg-gradient-to-tl from-yellow-300 to-purple-600 pt-20"
          >
            <h3
              class="lg:text-4xl text-3xl font-semibold leading-9 text-white dark:text-gray-50"
            >
              Top of places
            </h3>
            <div class="md:flex items-start justify-between mt-12">
              <div class="md:w-1/2 lg:w-full">
                <div>
                  <div class="relative">
                    <img
                      src="https://lh3.googleusercontent.com/pDj9Hxj_5rX80NardiuFwa_GjrfWfW1GW63fR47BzRySPYuH1xe2f95Gnp-6qE6wmEtCLSsx0nL5doW9uryDLIiCKVPtkcYRi-qYQs53y1u_P_teOvq1DX2ClVZxTWZUsB_cgLA9BYMUKEPL4ulmJGLmFPSuGukDAw8kE5RzmEcs8l8pBY7qLRjbhNi1C3GFCoU7XPTxfH91YlLyuREDQgxH4x-X7LMXo6T6BC0HVyACERe4nqaVbmEzbxU5dRb1w1RQdf1x_rpFMhI8lbRkdmpcls7bB4tVz77kPdpEekcJPb-SjTLdZEXOSe-l8JJ9-L61PLx8H79NfCoouKEDo7qo0FtmCyZZDovlbxkFPFbtg-AZOBHkeUWw27oZeDV-LNnyf740C9dTHqIk_gnJgd9vbr7Hxq5e0yXfPYmA_WflbaGJiHdNfKJksmCPAZ16WoxeC43oFLQC7VGE1kbAvVtP6AFywP3VJZLn23Cv0SgVG999Wy6eA-UhoMWPj22fqpm4Po1hngm3fawpL6QBvCKYYH3fbbVdg8tmmpTdzu2DQaNA58NZi3ZTiCV5y6HhR_bsd_n7dYh03FABy6_7J5zk2TKya6DXYNTU6O9H7mjtLNvtE6qlx3Tswrem1TsYmrAC6UpXQp_r1A3pDDsr7ZJ_7Ilwguqow2Fc5DE9-RahbEQ7lhtMFjOT_7l0cYsQSYsSq3WxKdTmiaGAztMT4YpW=w1024-h512-no?authuser=0"
                      alt="Sochi"
                    />
                  </div>
                  <h1
                    class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-50 dark:text-gray-50"
                  >
                    Sochi
                  </h1>
                  <p
                    class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-50 dark:text-white"
                  >
                    Sochi, a Russian city on the Black Sea, is known as a summer
                    beach resort, and was host of the 2014 Winter Olympics. Its
                    parks include the palm-filled Arboretum. It's also notable
                    for 20th-century neoclassical buildings such as the columned
                    Winter Theatre. Forested Sochi National Park is a
                    1,937-sq.-km protected area in the nearby Caucasus
                    Mountains. Some 70 km inland, Krasnaya Polyana is a
                    prominent ski resort.
                  </p>
                </div>

                <div class="mt-9">
                  <div class="relative">
                    <img
                      src="https://lh3.googleusercontent.com/yqx7d_TMp7QzvKk7hgsvT7iAwCDJfVrQV_ExqeoLlQBiIpZathqiAxMFl6lyJj5vP9yLYOS6c7dQ169OC-Js5eqwyIRBpSiYfOZy52zdnY5ZakaqMM2LBCUBw6RwyF2k4aKiTpuyAdA16cydBhgabtZiwsLGfVqFU55O9irRqLy661KhvIszXyBl3PAxOFe0JDWEw7UhHnqr4qoUQSG-ZqktvQh74R5oE5VoTpV1amChH45M6Zu33qP-WWfc5Ys1eNleslViSs7fSFaMnNAfIBTtjn9e7a4VuBJbPXGcp65NeB8g6N-J5IRXy-zKLzclmTRMIBp-SjRBMKYdLu_Fu8LV7ielbe_JIz5xAmt8pAlsf3YTKxTAc4-pvhc60hBTV6Pez_OnPkgiMPE8v7vyHX_S39hcVxs6AAZz1blkbcQ60Md8K2kHmQEY6dS8u2TWv8dih5ItlodW1Z0FNIUuR4lyABKb41UKWcfC9wT5pbj9FinrE8CXrvVJT4j0vfu8JgE2BlUOz52saeDai1kdwfCUtI9fUOw_1DlJkNLncGEfSPCnWRQj4IHrSosr6UPXP4PcMXdQF4gkWbXq64woUUn3zejwWGYwV35Bu4JKvsFDS7570XUoFugZSv0DzX6xr7g7kfQvj37d6uY4KYuJfTdi_njVwGW0DFvbZVsrluUT36Sdgglqb0VOQ_Ulo0zqIJeZho5x8RDxBA_h_AJpWysO=w1162-h870-no?authuser=0"
                      alt="Voronezh"
                    />
                  </div>
                  <h1
                    class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-50 dark:text-gray-50"
                  >
                    Voronezh
                  </h1>
                  <p
                    class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-50 dark:text-white"
                  >
                    Voronezh is a city on the Voronezh River in southwestern
                    Russia. Landscaped Petrovsky Park is home to a bronze statue
                    of Peter I. Housed in a baroque building, the Voronezh
                    Regional Art Museum has collections of Ancient Egyptian art
                    and several centuries of Russian paintings. The ship museum
                    Goto Predestination recreates 18th-century naval life.
                    Scarlet Sails park has pine trees, playgrounds and an
                    outdoor theater.
                  </p>
                </div>
              </div>
              <div class="md:w-1/2 md:ml-6 md:mt-0 mt-9 lg:w-full">
                <div>
                  <div class="relative">
                    <img
                      src="https://lh3.googleusercontent.com/auIq9_Jz135mG4hsK4wizy_8eV3bLH7BnSNwqugNc1bFdqkCX2o237SYvz-tA5NZ5JcSXAwAJkyk-N7CjRExquF5IvfY2WcPj94vMXl6HlmAPbET7u9HnUQAKWGPWrUZROc2LaK4YkladPSk4Lr9xvJfifPbGRtyx05LiPZMFbnjyl3ORUkngYgthCY7yNsQpfDDa9hjmkyLnvRdc0Z7Zms6ZqVRlSlJprFjnTNhh5w4peAsBxC2GdQg9qb1uVYLzOh2dHt-avFaB_zMlAc-gchGxrA-o6l4GPBlofbKoJIpMunmztJt_8p3yCIzmNxnw4DeR6d9yI1yS02rkzzX6wB16R8ZTb6nM2ubzunowbTWyt7lRK7WjAEhR90w7equenkiyqPXJZ44OxZvtM26kIOWN3WoYMd20dNrZuzF7EwRLZah5vnudTgsLaP2m5CgA3rb1_iGxPjPVq9t06Gl6tJjM7cGkvOAeFheeHqMLawzfDM7qnnewdEWA-FdvutsYALDSPwyIpyfJIuHcghLfqUQZ_0G9K4MAfYIL4U3M5j6HNJ0qhdQDR1WjhmZ4qvFZ9gDauz5_cR79Jmne6edggJ6IyWr3311wqI749t-OwOFdrE72lpVlB7CnvVGTcXmxfv47IYwbb9YwDsXv4w_gG0Rxz5B3hYq0dH9FwDyiriiwD6uPNFssl9IjcD7rNlvobjRgWA5-RNy_PkASAWd8Hf5=w1162-h870-no?authuser=0"
                      alt="Nizhny Novgorod"
                    />
                  </div>

                  <h1
                    class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-50 dark:text-gray-50"
                  >
                    Nizhny Novgorod
                  </h1>
                  <p
                    class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-50 dark:text-white"
                  >
                    Nizhny Novgorod is a large city on the Volga River in
                    western Russia. It’s known for its 16th-century Kremlin,
                    ringed by 13 fortified towers, including the Dmitrovskaya
                    Tower. Within the Kremlin’s walls is the green-spired
                    Cathedral of the Archangel Michael, rebuilt in the 17th
                    century. Nizhny Novgorod State Art Museum, housed in a grand
                    building, exhibits Russian and European paintings and a
                    collection of icons.
                  </p>
                </div>
                <div class="mt-9">
                  <div class="relative">
                    <img
                      src="https://lh3.googleusercontent.com/MYixC4vg8Q0ejsovegOSYE6Z-w2qdbEX26LPxToLWJTgE-20ZZmE-hxj8m0yPjFUaVgE9B0jd-r0hn3pq0tfkRukkyLLAPQ9Ae1tNyWjhD5XGNgrPvtaT2yKD_jVePRdwNBsg5ZPre7Lq447GcmZ5qlaWTMz755V9yRY86KN6KoKRpAzynvoVxjtgeXG_C3gMNmoWc3hJT4aljG5Vd03dpIewyvVOcLCYxc2L7D2rQ1a30bg7OWM1-hJAOar0jR8tjDlfnSMletWElmFIYZnke4IpnlcxA3rcuUHpEU7lx3HqW6vsVdiCX91MGHnNuL4h_ygOF-f5lrFkL9taWRNjV9J-MNCj1qZD2cXt1bJJ0WmUgc_GTVLlesqeCa8r3Xqmg_V8w3qDCFKRxZv8T9ww9Brr24x1RTBPw365KSAc1f-31NWvhGtUCA1eZ_-DkoGJ3Z5sl53MiyrL1ksxXb64zeSVoNCG4QKDzDcgf2JGj_0NU0Xef5vqD1bXp_BmqknRtGugpyD5OqVOIV7_W3rF9ltcrrfCuRmJs_6wT3cwhKQ6tPHhUawVOlSeujmwZB4ePvK3n_2n4NRg-2sePhkvdxs2qqKYx5O3WWp1DbMmqZBJip4liVDnk9-2yzFxfGOZmkFQlkZ27KzO2-0uotSD5egZyAbcmure_HwY47wkSR50vg5wAvtYZJ3rfniBap4laB3i7jmtjb49iYA0E39BSI5=w600-h400-no?authuser=0"
                      alt="Saint Petersburg"
                    />
                  </div>

                  <h1
                    class="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-50 dark:text-gray-50"
                  >
                    Saint Petersburg
                  </h1>
                  <p
                    class="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-50 dark:text-white"
                  >
                    St. Petersburg is a Russian port city on the Baltic Sea. It
                    was the imperial capital for 2 centuries, having been
                    founded in 1703 by Peter the Great, subject of the city's
                    iconic “Bronze Horseman” statue. It remains Russia's
                    cultural center, with venues such as the Mariinsky Theatre
                    hosting opera and ballet, and the State Russian Museum
                    showcasing Russian art, from Orthodox icon paintings to
                    Kandinsky works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LightWithHeaderAndIcons",
  methods: {
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
<!-- Navigation ends 
<script>
export default {
    name: "CompactTableWithActionsAndSelect",
    data() {
        return {
            temp: 0,
        };
    },
    methods: {
        dropdownFunction(event) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            let list = event.currentTarget.parentElement.parentElement.getElementsByClassName("dropdown-content")[0];
            for (i = 0; i < dropdowns.length; i++) {
                dropdowns[i].classList.add("hidden");
            }
            list.classList.toggle("hidden");
        },
        documentClick(event) {
            if (!event.target.matches(".dropbtn")) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    openDropdown.classList.add("hidden");
                }
            }
        },
        checkAll(event) {
            let rows = event.currentTarget.parentElement.parentElement.parentElement.nextElementSibling.children;
            for (var i = 0; i < rows.length; i++) {
                if (event.currentTarget.checked) {
                    rows[i].classList.add("bg-gray-100");
                    let checkbox = rows[i].getElementsByTagName("input")[0];
                    if (checkbox) {
                        checkbox.checked = true;
                    }
                } else {
                    rows[i].classList.remove("bg-gray-100");
                    let checkbox = rows[i].getElementsByTagName("input")[0];
                    if (checkbox) {
                        checkbox.checked = false;
                    }
                }
            }
        },
        tableInteract(event) {
            var single = event.currentTarget.parentElement.parentElement;
            single.classList.toggle("bg-gray-100");
        },
        pageView(val) {
            let text = document.getElementById("page-view");
            if (val) {
                if (this.$data.temp === 2) {
                    this.$data.temp = 0;
                } else {
                    this.$data.temp = this.$data.temp + 1;
                }
            } else if (this.$data.temp !== 0) {
                this.$data.temp = this.$data.temp - 1;
            }
            switch (this.$data.temp) {
                case 0:
                    text.innerHTML = "Viewing 1 - 20 of 60";
                    break;
                case 1:
                    text.innerHTML = "Viewing 21 - 40 of 60";
                    break;
                case 2:
                    text.innerHTML = "Viewing 41 - 60 of 60";
            }
        },
    },
    created() {
        document.addEventListener("click", this.documentClick);
    },
    unmounted() {
        document.removeEventListener("click", this.documentClick);
    },
};
</script>-->
