import logoFull from "../assets/logo_full.svg"; // Adjust the path as necessary
import logoFullDark from "../assets/logo_full_dark.svg"; // Adjust the path as necessary
import { useContext, useState } from "react";
import { AppContext } from "../contextApi/Context";
import ChatBox from "./chatBox";
import sendIcon from "../assets/send_icon.svg"; // Adjust the path as necessary

const MainContainer = () => {
  const [prompt, setPrompt] = useState("");
  const [published, setPublished] = useState(false);
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

  const newChat = (
    <div className="flex flex-col items-center justify-center h-100">
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
  console.log(UserChats.messages);
  return (
    <>
      <div
        className={`mb-5 mt-2 h-130 text-sm overflow-y-scroll px-8 sm:px-10 md:px-20 lg:px-40
           ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"} rounded-lg border-2 border-gray-200`}
      >
        {UserChats.messages?.length > 0
          ? UserChats?.messages?.map((messages, id) => (
              <ChatBox key={id} messages={messages} />
            ))
          : newChat}

        {loading === true ? (
          <div class=" loader flex space-x-2 items-center justify-start">
            <div class="w-2.5 h-2.5 rounded-full bg-gray-700 animate-bounce delay-0.1s"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-gray-700 animate-bounce delay-0.2s"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-gray-700 animate-bounce delay-0.4s"></div>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* label for checkbox */}
      {mode === "images" ? (
        <label className="flex items-center justify-center gap-2 mb-3 text-sm mx-auto">
          <p className="text-sm"> Published generate image to Community</p>
          <input
            type="checkbox"
            onChange={(e) => setPublished(e.target.checked)}
            checked={published}
            className="cursor-pointer"
          />
        </label>
      ) : (
        ""
      )}
      <div
        className={`flex items-center justify-center m-2 w-full sm:w-4/5 md:w-2/3 ml-auto mr-auto  ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"}`}
      >
        {/* searhbar */}
        <div
          className={`flex space-x-2 px-4 py-2 rounded-md shadow-sm w-full ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"}`}
        >
          <select
            onChange={(e) => setMode(e.target.value)}
            className={`bg-gray-100 text-gray-700 text-sm focus:outline-none ${theme === "light" ? "bg-gray-100 text-black " : "bg-gray-800 text-white"}`}
          >
            <option value="text">Text</option>
            <option value="images">Images</option>
          </select>

          <div
            className={`w-px h-5 ${theme === "light" ? "bg-gray-100 text-black " : "bg-gray-800 text-white"}`}
          ></div>

          <input
            type="text"
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Search..."
            className={`text-sm flex-1 bg-transparent focus:outline-none 
        ${theme === "light" ? "text-black" : "text-white"}`}
          />

          <button className="focus:outline-none">
            <img src={sendIcon} alt="search" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};
export default MainContainer;
