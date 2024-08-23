import React from "react";
import Image from "next/image";

interface HeaderProps {
  title: string;
  userName: string;
  userStatus: string;
  profilePicture: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  userName,
  userStatus,
  profilePicture,
}) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <div className="bg-primary-600 text-white font-primary fixed w-full lg:static z-40">
      <div className="flex h-20 place-content-between ">
        <h1 className="font-medium lg:pl-0 ml-16 left-0 place-content-center text-xl">
          {title}
        </h1>
        <div className="flex gap-3 lg:items-center mr-20">
          <div className="place-content-center lg:w-12 w-10 lg:block hidden">
            <Image
              src={profilePicture}
              alt="Profil"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="place-content-center lg:block hidden">
            <h1 className="font-semibold lg:text-base">
              {truncateText(userStatus, 14)}
            </h1>
            <p className="text-xs lg:hidden block">
              {truncateText(userName, 14)}
            </p>
            <p className="text-xs lg:block hidden">{userName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
