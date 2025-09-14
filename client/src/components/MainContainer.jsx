import logoFull from "../assets/logo_full.svg"; // Adjust the path as necessary
import logoFullDark from "../assets/logo_full_dark.svg"; // Adjust the path as necessary
import { useContext, useState } from "react";
import { AppContext } from "../contextApi/Context";
import ChatBox from "./chatBox";
import sendIcon from "../assets/send_icon.svg"; // Adjust the path as necessary

const MainContainer = () => {
  const [prompt, setPrompt] = useState("");
  const [published, setPublished] = useState("");
  const [mode, setMode] = useState("");
  const [loading, setLoading] = useState(false);

  // Get context value
  const context = useContext(AppContext);

  // If context is undefined, show an error or fallback UI
  if (!context) {
    return <div>Error: Context is not available!</div>;
  }

  // Destructure theme and setTheme once we know context is available
  const { theme, setTheme, UserChats } = context;
  const user = localStorage.getItem("login");
  const chatbox = <ChatBox />;

  const newUser = (
    <div className="flex flex-col items-center justify-center">
      <div>
        <img
          src={theme === "dark" ? logoFull : logoFullDark} // If in public folder, use "/logo.png"
          alt="Logo"
          className="ml-20 h-10"
        />
        <br />
        <h1 className="font-bold"> ASK ME ANYTHING !</h1>
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`mb-5 m-2 h-110 overflow-y-scroll pl-40 pr-40 ${theme === "light" ? "bg-gray-100 text-black " : "bg-gray-800 text-white"} rounded-lg border-2 border-gray-200`}
      >
        {user === "success"
          ? UserChats?.messages?.map((messages, id) => (
              <ChatBox key={id} messages={messages} />
            ))
          : newUser}
        <div class=" loader flex space-x-2 items-center justify-center">
          <div class="w-2.5 h-2.5 rounded-full bg-gray-700 animate-bounce delay-0.1s"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-700 animate-bounce delay-0.2s"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-700 animate-bounce delay-0.4s"></div>
        </div>
      </div>
      {/* label for checkbox */}
      <label className="flex items-center justify-center gap-2 mb-3 text-sm mx-auto">
        <p className="text-sm"> Published generate image to Community</p>
        <input type="checkbox" checked={published} className="cursor-pointer" />
      </label>
      <div
        className={`flex items-center justify-center m-2 w-2/3 ml-auto mr-auto ${theme === "light" ? "bg-gray-100 text-black " : "bg-gray-800 text-white"}`}
      >
        {/* searhbar */}
        <div
          class={`flex space-x-2 px-4 py-2 rounded-md shadow-sm w-full ${theme === "light" ? "bg-gray-100 text-black " : "bg-gray-800 text-white"}`}
        >
          <select
            onChange={(e) => setMode(e.target.value)}
            class={`bg-gray-100 text-gray-700 text-sm focus:outline-none ${theme === "light" ? "bg-gray-100 text-black " : "bg-gray-800 text-white"}`}
          >
            <option value="all">All</option>
            <option value="articles">Articles</option>
            <option value="products">Products</option>
            <option value="users">Users</option>
          </select>

          <div
            class={`w-px h-5 ${theme === "light" ? "bg-gray-100 text-black " : "bg-gray-800 text-white"}`}
          ></div>

          <input
            type="text"
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Search..."
            class={`text-sm  flex-1 focus:outline-none ${theme === "light" ? "bg-gray-100 text-black " : "bg-gray-800 text-white"}`}
          />

          <button class="focus:outline-none">
            <img src={sendIcon} alt="search" className="h-7 w-7" />
          </button>
        </div>
      </div>
    </>
  );
};
export default MainContainer;
