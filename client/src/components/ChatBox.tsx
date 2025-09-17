import { useContext, useRef, useEffect } from "react";
import { AppContext } from "../contextApi/Context";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import userIcon from "../assets/user_icon.svg";
import prism from "prismjs";

function ChatBox({ messages }: any) {
  const messagesEndRef = useRef<any>(null);
  // Get context value
  const context = useContext(AppContext);

  // If context is undefined, show an error or fallback UI
  if (!context) {
    return <div>Error: Context is not available!</div>;
  }

  // Destructure theme and setTheme once we know context is available
  const { theme } = context;

  // Conditional classes based on theme
  const navbarClasses = theme === "light" ? " text-primary" : "text-black";

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        top: messagesEndRef?.current?.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  useEffect(() => {
    prism.highlightAll();
  }, [messages.content]);

  return (
    <div>
      {messages.role === "user" ? (
        <div
          ref={messagesEndRef}
          className="flex items-start justify-end my-4 gap-2"
        >
          <div className="flex flex-col gap-2 p-2 px-4 bg-slate-50 dark:bg-[#57317C]/30 border border-[#80609F]/30 rounded-md max-w-2xl">
            <span className={`text-sm ${navbarClasses}`}>
              <ReactMarkdown>{messages?.content}</ReactMarkdown>
            </span>
            <span className="text-sm text-gray-400 dark:text-[#B1A6C0]">
              {moment(messages?.timestamp).fromNow()}
            </span>
          </div>
          <img src={userIcon} alt="User" className="w-8 rounded-full" />
        </div>
      ) : (
        <div
          className="inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-primary/20 dark:bg-[#57317C]/30
      border border-[#80609F]/30 rounded-md my-4"
        >
          {messages?.isImage ? (
            <img
              src={messages?.content}
              alt="Bot"
              className="w-50 max-w-md mt-2 rounded-md"
            />
          ) : (
            <div className="text-sm dark:text-primary reset-tw">
              <ReactMarkdown>{messages?.content}</ReactMarkdown>
            </div>
          )}
          <span className="text-sm text-gray-400 dark:text-[#B1A6C0]">
            {moment(messages?.timestamp).fromNow()}
          </span>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
