<template>
  <div class="flex flex-no-wrap bg-white">
    <!-- Sidebar starts -->
    <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
    <div
      class="absolute border-r border-gray-200 sm:relative bg-white shadow relative z-20 p-4"
    >
      <div class="flex w-full">
        <div class="w-1/4 flex justify-center flex-col w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2 cursor-pointer mt-1"
            width="20"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#718096"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            @click="sidebarHandler()"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
        <div
          class="w-3/4 flex justify-start flex-col pr-12 transition duration-150 ease-in-out"
          id="mobile-nav"
        >
          <div class="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="144"
              height="30"
              viewBox="0 0 144 30"
            >
              <path
                fill="#5F7DF2"
                d="M80.544 9.48c1.177 0 2.194.306 3.053.92.86.614 1.513 1.45 1.962 2.507.448 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.699 3.51-.465 1.037-1.136 1.851-2.012 2.444-.876.592-1.885.888-3.028.888-1.405 0-2.704-.554-3.897-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78H70.45V9.657h6.145v1.663l.209-.21c1.123-1.087 2.369-1.63 3.74-1.63zm17.675 0c1.176 0 2.194.306 3.053.92.859.614 1.513 1.45 1.961 2.507.449 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.698 3.51-.466 1.037-1.136 1.851-2.012 2.444-.876.592-1.886.888-3.028.888-1.405 0-2.704-.554-3.898-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78h-1.904V9.657h6.144v1.663l.21-.21c1.122-1.087 2.368-1.63 3.739-1.63zM24.973 1c1.13 0 2.123.433 2.842 1.133 0 .004 0 .008.034.012 1.54 1.515 1.54 3.962-.034 5.472-.035.029-.069.058-.069.089-.719.65-1.712 1.05-2.773 1.05-.719 0-1.37.061-1.985.184-2.363.474-3.8 1.86-4.28 4.13-.114.489-.18 1.02-.2 1.59l-.003.176.001-.034.002.034c.022.505-.058 1.014-.239 1.495l-.076.182.064-.157c.106-.28.18-.575.217-.881l.008-.084-.026.195c-.286 1.797-1.858 3.188-3.754 3.282l-.204.005h-.103l-.103.002h-.034c-.65.012-1.232.072-1.78.181-2.328.473-3.765 1.863-4.279 4.139-.082.417-.142.863-.163 1.339l-.008.362v.23c0 2.02-1.603 3.681-3.661 3.861L4.16 29l-.48-.01c-.958-.073-1.849-.485-2.499-1.113-1.522-1.464-1.573-3.808-.152-5.33l.152-.154.103-.12c.719-.636 1.677-1.026 2.704-1.026.754 0 1.404-.062 2.02-.184 2.362-.475 3.8-1.86 4.28-4.126.136-.587.17-1.235.17-1.942 0-.991.411-1.896 1.027-2.583.069-.047.137-.097.172-.15.068-.051.102-.104.17-.159.633-.564 1.498-.925 2.408-.978l.229-.007h.034c.068 0 .171.003.274.009.616-.014 1.198-.074 1.746-.18 2.328-.474 3.766-1.863 4.279-4.135.082-.44.142-.912.163-1.418l.008-.385v-.132c0-2.138 1.78-3.872 4.005-3.877zm-.886 10c1.065 0 1.998.408 2.697 1.073.022.011.03.024.042.036l.025.017v.015c1.532 1.524 1.532 3.996 0 5.52-.034.03-.067.06-.067.09-.7.655-1.665 1.056-2.697 1.056-.7 0-1.332.062-1.932.186-2.298.477-3.696 1.873-4.163 4.157-.133.591-.2 1.242-.2 1.95 0 1.036-.399 1.975-1.032 2.674l-.1.084c-.676.679-1.551 1.055-2.441 1.13l-.223.012-.366-.006c-.633-.043-1.3-.254-1.865-.632-.156-.096-.296-.201-.432-.315l-.2-.177v-.012c-.734-.735-1.133-1.72-1.133-2.757 0-2.078 1.656-3.793 3.698-3.899l.198-.005h.133c.666-.007 1.266-.069 1.832-.185 2.265-.476 3.663-1.874 4.163-4.161.08-.442.139-.916.159-1.424l.008-.387v-.136c0-2.153 1.731-3.899 3.896-3.904zm3.882 11.025c1.375 1.367 1.375 3.583 0 4.95s-3.586 1.367-4.96 0c-1.345-1.367-1.345-3.583 0-4.95 1.374-1.367 3.585-1.367 4.96 0zm94.655-12.672c1.405 0 2.628.323 3.669.97 1.041.648 1.843 1.566 2.406 2.756.563 1.189.852 2.57.87 4.145h-9.954l.03.251c.132.906.476 1.633 1.03 2.18.605.596 1.386.895 2.343.895 1.058 0 2.09-.525 3.097-1.574l3.301 1.066-.203.291c-.69.947-1.524 1.67-2.501 2.166-1.075.545-2.349.818-3.821.818-1.473 0-2.774-.277-3.904-.831-1.13-.555-2.006-1.34-2.628-2.355-.622-1.016-.933-2.21-.933-3.58 0-1.354.324-2.582.971-3.682s1.523-1.961 2.628-2.583c1.104-.622 2.304-.933 3.599-.933zm13.955.126c1.202 0 2.314.216 3.339.648v-.47h3.034v3.91h-3.034l-.045-.137c-.317-.848-1.275-1.272-2.875-1.272-1.21 0-1.816.339-1.816 1.016 0 .296.161.516.483.66.321.144.791.262 1.409.355 1.735.22 3.102.536 4.1.946 1 .41 1.697.919 2.095 1.524.398.605.597 1.339.597 2.202 0 1.405-.48 2.5-1.441 3.282-.96.783-2.266 1.174-3.917 1.174-1.608 0-2.7-.321-3.275-.964V23h-3.098v-4.596h3.098l.032.187c.116.547.412.984.888 1.311.53.364 1.183.546 1.962.546.762 0 1.324-.087 1.688-.26.364-.174.546-.476.546-.908 0-.296-.076-.527-.228-.692-.153-.165-.447-.31-.883-.438-.435-.127-1.102-.27-2-.431-1.997-.313-3.433-.82-4.31-1.517-.875-.699-1.313-1.64-1.313-2.825 0-1.21.455-2.162 1.365-2.856.91-.695 2.11-1.042 3.599-1.042zm-69.164.178v10.27h1.98V23h-8.24v-3.072h2.032V12.78h-2.031V9.657h6.259zm-16.85-5.789l.37.005c1.94.05 3.473.494 4.6 1.335 1.198.892 1.797 2.185 1.797 3.878 0 1.168-.273 2.15-.819 2.945-.546.796-1.373 1.443-2.482 1.943l3.085 5.776h2.476V23h-5.827l-4.317-8.366h-2.183v5.116h2.4V23H39.646v-3.25h2.628V7.118h-2.628v-3.25h10.918zm61.329 0v16.06h1.892V23h-8.24v-3.072h2.082v-13h-2.082v-3.06h6.348zm-32.683 9.04c-.812 0-1.462.317-1.949.951-.486.635-.73 1.49-.73 2.565 0 1.007.252 1.847.756 2.52.503.673 1.161 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.448-.622.672-1.504.672-2.647 0-1.092-.228-1.942-.685-2.552-.457-.61-1.113-.914-1.968-.914zm17.675 0c-.813 0-1.463.317-1.95.951-.486.635-.73 1.49-.73 2.565 0 1.007.253 1.847.756 2.52.504.673 1.162 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.449-.622.673-1.504.673-2.647 0-1.092-.229-1.942-.686-2.552-.457-.61-1.113-.914-1.967-.914zM14.1 0C16.267 0 18 1.743 18 3.894v.01c0 2.155-1.733 3.903-3.9 3.903-4.166 0-6.3 2.133-6.3 6.293 0 2.103-1.667 3.817-3.734 3.9l-.5-.009c-.933-.075-1.8-.49-2.433-1.121C.4 16.134 0 15.143 0 14.1c0-2.144 1.733-3.903 3.9-3.903 4.166 0 6.3-2.133 6.3-6.294C10.2 1.751 11.934.005 14.1 0zm108.32 12.184c-.76 0-1.372.22-1.834.66-.46.44-.75 1.113-.87 2.018h5.561c-.118-.795-.442-1.44-.97-1.936-.53-.495-1.158-.742-1.886-.742zM49.525 7.118h-2.26v4.444h1.829c2.023 0 3.034-.754 3.034-2.26 0-.728-.233-1.274-.698-1.638-.466-.364-1.1-.546-1.905-.546zm15.821-3.593c.635 0 1.183.231 1.644.692.462.462.692 1.01.692 1.644 0 .677-.23 1.238-.692 1.682-.46.445-1.009.667-1.644.667-.643 0-1.195-.23-1.656-.692-.462-.461-.692-1.013-.692-1.657 0-.634.23-1.182.692-1.644.46-.461 1.013-.692 1.656-.692zM5.991 1.171c1.345 1.563 1.345 4.095 0 5.658-1.374 1.561-3.585 1.561-4.96 0-1.375-1.563-1.375-4.095 0-5.658 1.375-1.561 3.586-1.561 4.96 0z"
              ></path>
            </svg>
          </div>
          <ul aria-orientation="vertical" class="rounded py-8">
            <li
              class="cursor-pointer text-indigo-700 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
            >
              <span class="ml-2">My trips</span>
            </li>
            <li
              class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center"
            >
              <span class="ml-2">New trips</span>
            </li>
            <li
              class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
            >
              <span class="ml-2">Top of places</span>
            </li>
            <li
              class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
            >
              <span class="ml-2">Make new trip</span>
            </li>
            <li
              class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
            >
              <span class="ml-2">Join the trip</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
                class="h-full w-20 flex items-center justify-center border-r border-l"
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
                  ></div>
                </div>
              </div>
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
                  <div class="relative"></div>
                </div>
                <p class="text-gray-800 text-sm mx-3">Jane Doe</p>
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
                    My trips
                  </th>
                </tr>
              </thead>

              <thead>
                <tr class="w-full h-16 border-gray-300 border-b py-8">

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
                    OPEN
                  </td>
                  <td
                    class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                  >
                    <button
                      role="button"
                      aria-label="login"
                      class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-50 text-sm font-semibold leading-none text-white focus:outline-none bg-gray-50 border rounded hover:bg-gray-100 py-4 w-3/4"
                    >
                      <a class="text-red-500" href="javascript: void(0)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon cursor-pointer icon-tabler icon-tabler-trash"
                          width="40"
                          height="20"
                          viewBox="0 0 4 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1="4" y1="7" x2="20" y2="7" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                          <path
                            d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                          />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </a>
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
                    OPEN
                  </td>
                  <td
                    class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                  >
                    <button
                      role="button"
                      aria-label="login"
                      class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-50 text-sm font-semibold leading-none text-white focus:outline-none bg-gray-50 border rounded hover:bg-gray-100 py-4 w-3/4"
                    >
                      <a class="text-red-500" href="javascript: void(0)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon cursor-pointer icon-tabler icon-tabler-trash"
                          width="40"
                          height="20"
                          viewBox="0 0 4 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1="4" y1="7" x2="20" y2="7" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                          <path
                            d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                          />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </a>
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
                    New trips
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
