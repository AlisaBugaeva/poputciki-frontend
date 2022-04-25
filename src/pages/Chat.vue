<template>
  <div
    class="py-12 transition duration-150 ease-in-out z-10 absolute bottom-0 right-0 h-3/4 w-2/7"
    id="modal"
  >
    <div role="alert" class="container ml-2 mt-52 w-11/12">
      <div
        class="relative py-1 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"
      >
        <div class="flex-1 justify-between p:2 sm:p-3 flex flex-col">
          <div
            class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200"
          >
            <div class="relative flex items-center space-x-4">
              <div class="relative">
                <img
                  src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
                  alt=""
                  class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                />
              </div>
              <div class="flex flex-col leading-tight">
                <div class="text-2xl mt-1 flex items-center">
                  <span class="text-gray-700 mr-3">{{ chatName }}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            id="messages"
            class="flex flex-col space-y-4 p-2 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
            v-for="t in messages"
            :key="t.id"
          >
            <div class="chat-message" v-if="t.userId == userId">
              <div class="flex items-end justify-end">
                <div
                  class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"
                >
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white"
                    >
                      {{ t.text }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="chat-message" v-if="t.userId != userId">
              <div class="flex items-end">
                <div
                  class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
                >
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600"
                      >{{ t.text }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative flex px-4 pt-4 mb-2 sm:mb-0 border-t-2">
            <div class="border-gray-200">
              <input
                id="text"
                type="text"
                class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 pr-12 bg-gray-200 rounded-md py-3"
                @input="(e) => (textMessage = e.target.value)"
                :value="textMessage"
              />
            </div>
            <div class="right-0 items-center inset-y-0 hidden sm:flex">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                @click="sendingMessage()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
          @click="close()"
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
</template>

<script>
import { setConnected, connect, disconnect, sendMessage } from "../api/chatApi";
import { viewMessages, readMessages, countUnreadMessages } from "../api/api";

export default {
  name: "Chat",
  data() {
    return {
      messages: [],
      textMessage: "",
    };
  },
  props: {
    chatName: String,
    idPoputchik: Number,
    userId: Number,
  },
  emits: { close: null, countMessages: null },

  mounted() {
    viewMessages(
      this.idPoputchik,
      (data) => {
        this.messages = data;
        readMessages(
          this.idPoputchik,
          () => {},
          (error) => {
            this.isError = true;
            this.error = error.message;
          }
        );
      },
      () => {
        this.messages = "";
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

    this.$emit("countMessages", this.countMessages);

    connect(this.idPoputchik, (msg) => {
      this.messages.push(JSON.parse(msg.body));
    });
  },

  methods: {
    close() {
      this.$emit("close");
    },

    settingConnected() {
      setConnected();
    },

    makeDisconnect() {
      disconnect();
    },

    sendingMessage() {
      sendMessage(this.idPoputchik, this.textMessage);
      this.textMessage = "";
    },
  },
};
</script>
