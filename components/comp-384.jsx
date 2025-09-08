// import { Button } from "@/components/ui/button"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import Link from "next/link";
// import { FaUserAlt } from "react-icons/fa";


// export default function PopOver({ user }) {
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         {/* <Button variant="outline"></Button> */}
//         <img
//           src={user?.profile}
//           alt={user?.title}
//           className="w-12 h-12 object-cover rounded-full cursor-pointer"
//         />

//       </PopoverTrigger>
//       <PopoverContent className="max-w-[280px] py-3 shadow-none" side="top">


//         <div className="flex flex-col gap-2 w-full">
//           <div>
//             <Link href="/deshboard/analytics" className="w-full flex items-center gap-2 p-1 text-md border-0 rounded-none border-b shadow-none">

//               <FaUserAlt /> Profile
//             </Link>
//           </div>
//           <div>
//             <Button variant="ghost" className="w-full flex ">
//               Logout
//             </Button>
//           </div>
//         </div>

//       </PopoverContent>
//     </Popover>
//   );
// }


'use client"'
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

export default function PopOver({ user }) {
  const { logout } = useUser()

  const singout = () => {
    logout()
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <img
          src={user?.profile}
          alt={user?.title}
          className="w-12 h-12 object-cover rounded-full cursor-pointer border-2 border-gray-200 hover:border-purple-500 transition"
        />
      </PopoverTrigger>

      <PopoverContent
        className=" p-4 rounded-xl shadow-lg border bg-white"

      >
        {/* Header (Profile Preview) */}
        <Link
          href="/deshboard/analytics">
          <div className="flex items-center gap-3 pb-3 border-b">
            <img
              src={user?.profile}
              alt={user?.title}
              className="w-12 h-12 rounded-full object-cover border"
            />
            <div>
              <p className="font-semibold text-gray-800">
                {user?.username || "User"}
              </p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>
        </Link>

        {/* Actions */}
        <div className="flex flex-col gap-2 mt-3">
          {/* <Link
            href="/deshboard/analytics"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
          >
            <FaUserAlt /> Profile
          </Link> */}
          <Button
            variant="ghost"
            className="w-full justify-start px-3 py-2 text-red-600 hover:bg-red-50 transition flex items-center gap-2 cursor-pointer" onClick={() => singout()}
          >
            <IoMdLogOut />  Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
