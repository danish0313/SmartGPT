import React from "react";
import { useContext } from "react";
import { AppContext } from "../contextApi/Context";
import binIcon from "../assets/bin_icon.svg";
import moment from "moment";
interface RecentChatsProps {
  search: string;
}
export default function RecentChats({ search }: RecentChatsProps) {
  // Get context value
  const context = useContext(AppContext);

  // If context is undefined, show an error or fallback UI
  if (!context) {
    return <div>Error: Context is not available!</div>;
  }

  // Destructure theme and setTheme once we know context is available
  const { RecentChats, setUserChats } = context;

  const handleChatSelect = (chat: any) => {
    // Implement chat selection logic here
    const chats = RecentChats.find((c: any) => c._id === chat);
    if (chats) {
      setUserChats(chats);
    }
  };
  return (
    <div className="flex-1  overflow-y-scroll">
      {/* Recent Chats Section */}
      {RecentChats.length > 0 && <p className="m-2 text-sm">Recent Chats</p>}

      {RecentChats.filter((chat: any) =>
        chat.messages[0]
          ? chat.messages[0].content
              .toLowerCase()
              .includes(search.toLowerCase())
          : chat.name.toLowerCase().includes(search.toLowerCase()),
      ).map((chat: any, index: number) => (
        <div
          key={chat?._id}
          className="p-1 rounded border border-grey-700 m-2 text-sm cursor-pointer flex items-center gap-2 group"
          onClick={() => handleChatSelect(chat?._id)}
        >
          <div>
            <p className="truncate w-full">
              {chat?.messages?.length > 0
                ? chat?.messages[0].content.slice(0, 32)
                : chat.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-[#B1A6C0]">
              {moment(chat?.updatedAt).fromNow()}
            </p>
          </div>
          <img
            src={binIcon}
            alt="binIcon"
            className="hidden group-hover:block w-4 cursor-pointer not-dark:invert ml-auto"
          />
        </div>
      ))}
    </div>
  );
}
