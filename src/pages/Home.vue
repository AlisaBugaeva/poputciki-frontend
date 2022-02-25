<template>
  <div class="flex flex-no-wrap bg-white">
    <!-- Sidebar starts -->
    <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
    <!-- Sidebar ends -->
    <div class="w-full">
      <!-- Navigation starts -->
      <nav
        class="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10"
      >
        <div class="hidden lg:flex w-full pr-6">
          <div
            class="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24"
          ></div>
          <div class="w-1/2 hidden lg:flex">
            <div class="w-full flex items-center pl-8 justify-end">
              <div
                class="flex items-center relative cursor-pointer"
                @click="dropdownHandler($event)"
              >
                <p class="text-gray-800 text-sm mx-3">Make a trip</p>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden lg:flex w-full pr-6">
          <div
            class="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24"
          ></div>
          <div class="w-1/2 hidden lg:flex">
            <div class="w-full flex items-center pl-8 justify-end">
              <div
                class="flex items-center relative cursor-pointer"
                @click="dropdownHandler($event)"
              >
                <div class="rounded-full">
                  <ul
                    class="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 hidden"
                  >
                    <li
                      class="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center"
                    >
                      <div class="flex items-center">
                        <span class="text-sm ml-2">Sign in</span>
                      </div>
                    </li>
                    <li
                      class="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2"
                    >
                      <div class="flex items-center">
                        <span class="text-sm ml-2">Sign up</span>
                      </div>
                    </li>
                  </ul>
                  <div class="relative"></div>
                </div>
                <p class="text-gray-800 text-sm mx-3">Login</p>
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
        <div
          class="text-gray-600 mr-8 visible lg:hidden relative"
          @click="dropdownHandler($event)"
        >
          <ul
            class="p-2 w-40 border-r bg-white absolute rounded right-0 shadow mt-12 hidden"
          >
            <li
              class="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center"
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-user"
                  width="18"
                  height="18"
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
                <span class="text-sm ml-2">My Profile</span>
              </div>
            </li>
            <li
              class="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2"
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-logout"
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
                  <path
                    d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                  />
                  <path d="M7 12h14l-3 -3m0 6l3 -3" />
                </svg>
                <span class="text-sm ml-2">Sign out</span>
              </div>
            </li>
          </ul>
          <svg
            aria-label="Main Menu"
            aria-haspopup="true"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu cursor-pointer"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="4" y1="8" x2="20" y2="8" />
            <line x1="4" y1="16" x2="20" y2="16" />
          </svg>
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
                  <th
                    class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-center"
                  >
                    <div
                      class="w-full h-full hidden lg:flex items-center pl-6 pr-24"
                    >
                      <div class="relative w-full">
                        <div
                          class="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-search"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                          </svg>
                        </div>
                        <input
                          class="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2"
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>

              <thead>
                <tr class="w-full h-16 border-gray-300 border-b py-8">
                  <th
                    class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                  >
                    Name
                  </th>
                  <th
                    class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                  >
                    Surname
                  </th>
                  <th
                    class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                  >
                    Departure point
                  </th>
                  <th
                    class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                  >
                    Destination point
                  </th>
                  <th
                    class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                  >
                    Departure date
                  </th>
                  <th
                    class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                  >
                    Destination date
                  </th>
                  <th
                    class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                  >
                    Status
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
                      src="https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D1%81%D0%BD%D0%BE%D0%B9_%D0%BA%D0%BE%D1%82#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Felis_silvestris_silvestris.jpg"
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
                    Sochi, a Russian city on the Black Sea, is known as a summer beach resort, and was host of the 2014 Winter Olympics. Its parks include the palm-filled Arboretum. It's also notable for 20th-century neoclassical buildings such as the columned Winter Theatre. Forested Sochi National Park is a 1,937-sq.-km protected area in the nearby Caucasus Mountains. Some 70 km inland, Krasnaya Polyana is a prominent ski resort.
                  </p>
                </div>
                
                <div class="mt-9">
                  <div class="relative">
                    <img
                      src="https://i.ibb.co/8mP5tmS/img-2.png"
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
                    Voronezh is a city on the Voronezh River in southwestern Russia. Landscaped Petrovsky Park is home to a bronze statue of Peter I. Housed in a baroque building, the Voronezh Regional Art Museum has collections of Ancient Egyptian art and several centuries of Russian paintings. The ship museum Goto Predestination recreates 18th-century naval life. Scarlet Sails park has pine trees, playgrounds and an outdoor theater.
                  </p>
                </div>
              </div>
              <div class="md:w-1/2 md:ml-6 md:mt-0 mt-9 lg:w-full">
                <div>
                  <div class="relative">
                    <img
                      src="https://i.ibb.co/DKg5zHT/img-3.png"
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
                   Nizhny Novgorod is a large city on the Volga River in western Russia. It’s known for its 16th-century Kremlin, ringed by 13 fortified towers, including the Dmitrovskaya Tower. Within the Kremlin’s walls is the green-spired Cathedral of the Archangel Michael, rebuilt in the 17th century. Nizhny Novgorod State Art Museum, housed in a grand building, exhibits Russian and European paintings and a collection of icons.
                  </p>
                </div>
                <div class="mt-9">
                  <div class="relative">
                    <img
                      src="https://i.ibb.co/dPBXFwY/img-4.png"
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
                    St. Petersburg is a Russian port city on the Baltic Sea. It was the imperial capital for 2 centuries, having been founded in 1703 by Peter the Great, subject of the city's iconic “Bronze Horseman” statue. It remains Russia's cultural center, with venues such as the Mariinsky Theatre hosting opera and ballet, and the State Russian Museum showcasing Russian art, from Orthodox icon paintings to Kandinsky works.
                  </p>
                </div>
                
              </div>
            </div>
          </div>

          <div
            class="w-full bg-gradient-to-tl from-yellow-300 to-purple-600 pt-20"
          >
            <div
              class="mx-auto container bg-white dark:bg-gray-800 dark:bg-gray-800 shadow rounded"
            >
              <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
                <table class="min-w-full bg-white dark:bg-gray-800">
                  <thead>
                    <tr class="w-full h-16 border-gray-300 border-b py-8">
                      <th
                        class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-center"
                      >
                        Top of places
                      </th>
                    </tr>
                  </thead>

                  <thead>
                    <tr class="w-full h-16 border-gray-300 border-b py-8">
                      <th
                        class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                      >
                        City
                      </th>
                      <th
                        class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                      >
                        Description
                      </th>
                      <th
                        class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                      >
                        Photo
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
                        Kazan is a city in southwest Russia, on the banks of the
                        Volga and Kazanka rivers. The capital of the Republic of
                        Tatarstan, a semi-autonomous region, it's known for the
                        centuries-old Kazan Kremlin, a fortified citadel
                        containing museums and sacred sites. Kremlin landmarks
                        include the tiered Tower of Soyembika, the blue-and-gold
                        domed Annunciation Cathedral and the vast, colorful Kul
                        Sharif Mosque.
                      </td>
                      <td
                        class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                      >
                        photo
                      </td>
                    </tr>

                    <tr class="h-24 border-gray-300 border-b">
                      <td
                        class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                      >
                        Nizhny Novgorod
                      </td>
                      <td
                        class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                      >
                        Nizhny Novgorod is a large city on the Volga River in
                        western Russia. It’s known for its 16th-century Kremlin,
                        ringed by 13 fortified towers, including the
                        Dmitrovskaya Tower. Within the Kremlin’s walls is the
                        green-spired Cathedral of the Archangel Michael, rebuilt
                        in the 17th century. Nizhny Novgorod State Art Museum,
                        housed in a grand building, exhibits Russian and
                        European paintings and a collection of icons.
                      </td>
                      <td
                        class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                      >
                        photo
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
