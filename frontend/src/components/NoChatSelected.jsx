import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100">
      <div className="max-w-md text-center space-y-6">
        {/* Flower Logo + Icon Display */}
        <div className="flex flex-col items-center gap-3">
          
          <div
            className="w-16 h-16 rounded-2xl bg-[rgb(201,72,110)]/10 flex items-center
            justify-center animate-bounce"
          >
            <img
            src="https://img.icons8.com/?size=100&id=798&format=png&color=F25081"
            alt="Flower Logo"
            className="w-14 h-14 opacity-80"
          />
          </div>
        </div>

        {/* Welcome Text */}
        <div>
          <h2 className="text-2xl font-semibold text-[rgb(201,72,110)]">Welcome to BlueChat</h2>
          <p className="text-base text-base-content/60 mt-2">
            Select a conversation from the sidebar to start chatting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;
