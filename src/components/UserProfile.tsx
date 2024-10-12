import { User } from "@/types";
import { FC } from "react";

const UserProfile: FC<{ data: User }> = ({ data }) => {
  const { name, location, phone, picture } = data;
  const { first, last, title } = name;
  const { city, country } = location;

  return (
    <div className="max-w-lg h-[380px] mx-auto text-center bg-white rounded-xl shadow-md overflow-hidden hover:bg-gray-100">
      <div className="flex flex-col items-center p-6">
        <img
          className="h-32 w-32 rounded-full object-cover"
          src={picture.large}
          alt={`${first} ${last}`}
        />
      </div>

      <div>
        <h2 className="text- font-semibold mt-2">Hi, My name is</h2>
        <p className="text-xl font-bold">
          {title} {first} {last}
        </p>
      </div>

      <div className="flex flex-col justify-around mt-4 p-4 bg-white">
        <div className="flex gap-[10px] items-center space-y-2">
          <svg
            className="h-8 w-8 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>

          <p className="text-sm font-medium">{phone}</p>
        </div>

        <div className="flex gap-[10px] items-center space-y-2">
          <svg
            className="h-8 w-8 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 7.25 7 13 7 13s7-5.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
          </svg>

          <p className="text-sm font-medium">
            {city}, {country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
