

// "use client";

// import { useUser } from "@/context/UserContext";
// import { useEffect, useState } from "react";
// import {
//     FaEnvelope,
//     FaPhone,
//     FaMapMarkerAlt,
//     FaCheckCircle,
//     FaTimesCircle,
// } from "react-icons/fa";
// import { MdEdit } from "react-icons/md";
// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button";
// import { toast } from "react-toastify";

// export default function ProfilePage() {
//     const [activeTab, setActiveTab] = useState("about");
//     const { user, setUser } = useUser();
//     const [editData, setEditData] = useState({ ...user });

//     const [oldPassword, setOldPassword] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const ChangePassword = async (e) => {
//         e.preventDefault();

//         if (!oldPassword || !newPassword || !confirmPassword) {
//             toast.error('All fields are required');
//             return;
//         }
//         if (newPassword !== confirmPassword) {

//             toast.error('New password and confirm password do not match');

//             return;
//         }
//         if (newPassword.length < 6) {
//             toast.error('New password must be at least 6 characters long');
//             return;
//         }

//         const data = {
//             old_password: oldPassword,
//             new_password: newPassword,
//             confirm_password: confirmPassword
//         };
//         const accessToken = sessionStorage.getItem('access');

//         try {
//             const response = await fetch('https://smartstay-api.up.railway.app/auth/change-password', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${accessToken}`
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (response.ok) {

//                 setOldPassword('');
//                 setNewPassword('');
//                 setConfirmPassword('');
//                 toast.success('Password changed successfully!');

//             } else {
//                 const result = await response.json();
//                 toast.error(result.detail || 'An error occurred');
//             }
//         } catch (error) {
//             toast.error('Failed to change password');
//         }
//     };



//     const updateUser = () => {
//         fetch(`https://smartstay-api.up.railway.app/auth/me`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${sessionStorage.getItem("access")}`,
//             },
//             body: JSON.stringify(editData),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("User updated:", data);
//                 setUser(data);
//                 sessionStorage.setItem("user", JSON.stringify(data));
//                 toast.success("User updated successfully!");
//             })
//             .catch((error) => {
//                 console.error("Error updating user data:", error);
//             });
//     };

//     if (!user) {
//         return (
//             <div className="flex items-center justify-center h-screen text-gray-500">
//                 Loading profile...
//             </div>
//         );
//     }

//     return (
//         <div className="max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {/* Left side */}
//                 <div className="space-y-6">
//                     <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center">
//                         <img
//                             src={user?.profile}
//                             alt={user?.name}
//                             className="w-40 h-40 object-cover rounded-full border-4 border-purple-100"
//                         />
//                         <h2 className="mt-4 font-bold text-lg text-gray-800">
//                             {user.name || "No Name"}
//                         </h2>
//                         <p className="text-gray-500 text-sm">@{user.username}</p>
//                         {user.activity ? (
//                             <p className="flex items-center text-green-600 text-sm mt-2">
//                                 <FaCheckCircle className="mr-1" /> Verified
//                             </p>
//                         ) : (
//                             <p className="flex items-center text-purple-600 text-sm mt-2">
//                                 <FaTimesCircle className="mr-1" /> Not Verified
//                             </p>
//                         )}

//                         <AlertDialog>
//                             <AlertDialogTrigger asChild>
//                                 {/* <Button variant="outline">Change Password</Button> */}
//                                 <small className="text-purple-500 mt-2 cursor-pointer">Change Password</small>
//                             </AlertDialogTrigger>
//                             <AlertDialogContent>
//                                 <AlertDialogHeader>
//                                     <AlertDialogTitle>Change Password</AlertDialogTitle>

//                                     <div className="space-y-3">
//                                         <input
//                                             type="password"
//                                             placeholder="Current Password"
//                                             className="w-full border rounded p-2"
//                                             value={oldPassword}
//                                             onChange={(e) => setOldPassword(e.target.value)}

//                                         />
//                                         <input
//                                             type="password"
//                                             placeholder="New Password"
//                                             className="w-full border rounded p-2"
//                                             value={newPassword}
//                                             onChange={(e) => setNewPassword(e.target.value)}

//                                         />

//                                         <input
//                                             type="password"
//                                             placeholder="Confirm New Password"
//                                             className="w-full border rounded p-2"
//                                             value={confirmPassword}
//                                             onChange={(e) => setConfirmPassword(e.target.value)}

//                                         />
//                                     </div>

//                                 </AlertDialogHeader>
//                                 <AlertDialogFooter>
//                                     <AlertDialogCancel>Cancel</AlertDialogCancel>
//                                     <AlertDialogAction onClick={ChangePassword}>Change Password</AlertDialogAction>
//                                 </AlertDialogFooter>
//                             </AlertDialogContent>
//                         </AlertDialog>
//                     </div>

//                     <div className="bg-white p-6 rounded-2xl shadow">
//                         <h3 className="font-semibold text-gray-700 mb-2">Account Status</h3>
//                         <p
//                             className={`inline-block px-3 py-1 rounded-full text-sm ${user.is_active
//                                 ? "bg-green-100 text-green-600"
//                                 : "bg-purple-100 text-purple-600"
//                                 }`}
//                         >
//                             {user.is_active ? "Active" : "Inactive"}
//                         </p>
//                     </div>
//                 </div>

//                 {/* Right side */}
//                 <div className="md:col-span-2 space-y-6">
//                     <div className="bg-white p-6 rounded-2xl shadow">
//                         <div className="flex justify-between items-start">
//                             <div>
//                                 <h1 className="text-2xl font-bold text-gray-800">
//                                     {user.name || "Unnamed"}
//                                 </h1>
//                                 <p className="text-purple-500 capitalize">{user.role}</p>
//                                 <p className="flex items-center text-gray-500 text-sm mt-1">
//                                     <FaMapMarkerAlt className="w-4 h-4 mr-1" />
//                                     {user.address || "No Address"}
//                                 </p>
//                             </div>

//                             {/* Edit Dialog */}
//                             <AlertDialog>
//                                 <AlertDialogTrigger asChild>
//                                     <Button
//                                         className="cursor-pointer"
//                                         variant="outline"
//                                     >
//                                         <MdEdit />
//                                     </Button>
//                                 </AlertDialogTrigger>
//                                 <AlertDialogContent>
//                                     <AlertDialogHeader>
//                                         <AlertDialogTitle>Edit Your Profile</AlertDialogTitle>
//                                         <div>
//                                             <div className="space-y-3">
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Full Name"
//                                                     className="w-full border rounded p-2"
//                                                     value={editData?.name}
//                                                     onChange={(e) =>
//                                                         setEditData({
//                                                             ...editData,
//                                                             name: e.target.value,
//                                                         })
//                                                     }
//                                                 />
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Phone Number"
//                                                     className="w-full border rounded p-2"
//                                                     value={editData?.phone}
//                                                     onChange={(e) =>
//                                                         setEditData({
//                                                             ...editData,
//                                                             phone: e.target.value,
//                                                         })
//                                                     }
//                                                 />
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Address"
//                                                     className="w-full border rounded p-2"
//                                                     value={editData?.address}
//                                                     onChange={(e) =>
//                                                         setEditData({
//                                                             ...editData,
//                                                             address: e.target.value,
//                                                         })
//                                                     }
//                                                 />
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Profile Image URL"
//                                                     className="w-full border rounded p-2"
//                                                     value={editData?.profile}
//                                                     onChange={(e) =>
//                                                         setEditData({
//                                                             ...editData,
//                                                             profile: e.target.value,
//                                                         })
//                                                     }
//                                                 />
//                                             </div>
//                                         </div>
//                                     </AlertDialogHeader>
//                                     <AlertDialogFooter>
//                                         <AlertDialogCancel>Cancel</AlertDialogCancel>
//                                         <AlertDialogAction onClick={updateUser}>
//                                             Save
//                                         </AlertDialogAction>
//                                     </AlertDialogFooter>
//                                 </AlertDialogContent>
//                             </AlertDialog>
//                         </div>

//                         <div className="flex flex-wrap gap-3 mt-4">
//                             <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
//                                 Send Message
//                             </button>
//                             <button className="px-4 py-2 bg-purple-500 rounded-lg text-white hover:bg-purple-600">
//                                 Contacts
//                             </button>
//                             <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
//                                 Report User
//                             </button>
//                         </div>
//                     </div>

//                     {/* Tabs */}
//                     <div className="bg-white p-6 rounded-2xl shadow">
//                         <div className="flex space-x-6 border-b pb-2 mb-4">
//                             <button
//                                 onClick={() => setActiveTab("timeline")}
//                                 className={`pb-1 ${activeTab === "timeline"
//                                     ? "text-purple-500 border-b-2 border-purple-500"
//                                     : "text-gray-500"
//                                     }`}
//                             >
//                                 Timeline
//                             </button>
//                             <button
//                                 onClick={() => setActiveTab("about")}
//                                 className={`pb-1 ${activeTab === "about"
//                                     ? "text-purple-500 border-b-2 border-purple-500"
//                                     : "text-gray-500"
//                                     }`}
//                             >
//                                 About
//                             </button>
//                         </div>

//                         {activeTab === "about" && (
//                             <div className="space-y-6">
//                                 <div>
//                                     <h3 className="font-semibold text-gray-700 mb-3">
//                                         Contact Information
//                                     </h3>
//                                     <ul className="space-y-2 text-sm text-gray-600">
//                                         <li className="flex items-center">
//                                             <FaPhone className="w-4 h-4 mr-2 text-purple-500" />
//                                             {user.phone || "Not added"}
//                                         </li>
//                                         <li className="flex items-center">
//                                             <FaMapMarkerAlt className="w-4 h-4 mr-2 text-purple-500" />
//                                             {user.address || "Not added"}
//                                         </li>
//                                         <li className="flex items-center">
//                                             <FaEnvelope className="w-4 h-4 mr-2 text-purple-500" />
//                                             {user.email}
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-semibold text-gray-700 mb-3">
//                                         Account Information
//                                     </h3>
//                                     <p className="text-sm text-gray-600">
//                                         <strong>Joined:</strong>{" "}
//                                         {new Date(user?.date_joined).toLocaleDateString()}
//                                     </p>
//                                     <p className="text-sm text-gray-600">
//                                         <strong>Last Login:</strong>{" "}
//                                         {new Date(user?.last_login).toLocaleString()}
//                                     </p>
//                                 </div>
//                             </div>
//                         )}

//                         {activeTab === "timeline" && (
//                             <p className="text-gray-500">
//                                 Timeline events will go here...
//                             </p>
//                         )}

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



"use client";

import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("about");
    const { user, setUser } = useUser();
    const [editData, setEditData] = useState(null);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // 🔹 Keep editData synced with user
    useEffect(() => {
        if (user) {
            setEditData({ ...user });
        }
    }, [user]);

    const ChangePassword = async (e) => {
        e.preventDefault();

        if (!oldPassword || !newPassword || !confirmPassword) {
            toast.error("All fields are required");
            return;
        }
        if (newPassword !== confirmPassword) {
            toast.error("New password and confirm password do not match");
            return;
        }
        if (newPassword.length < 6) {
            toast.error("New password must be at least 6 characters long");
            return;
        }

        const data = {
            old_password: oldPassword,
            new_password: newPassword,
            confirm_password: confirmPassword,
        };
        const accessToken = sessionStorage.getItem("access");

        try {
            const response = await fetch(
                "https://smartstay-api.up.railway.app/auth/change-password",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
                toast.success("Password changed successfully!");
            } else {
                const result = await response.json();
                toast.error(result.detail || "An error occurred");
            }
        } catch (error) {
            toast.error("Failed to change password");
        }
    };

    const updateUser = () => {
        fetch(`https://smartstay-api.up.railway.app/auth/me`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem("access")}`,
            },
            body: JSON.stringify(editData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("User updated:", data);
                setUser(data);
                sessionStorage.setItem("user", JSON.stringify(data));
                toast.success("User updated successfully!");
            })
            .catch((error) => {
                console.error("Error updating user data:", error);
            });
    };

    if (!user || !editData) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-500">
                Loading profile...
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left side */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center">
                        <img
                            src={user?.profile}
                            alt={user?.name}
                            className="w-40 h-40 object-cover rounded-full border-4 border-purple-100"
                        />
                        <h2 className="mt-4 font-bold text-lg text-gray-800">
                            {user.name || "No Name"}
                        </h2>
                        <p className="text-gray-500 text-sm">@{user.username}</p>
                        {user.activity ? (
                            <p className="flex items-center text-green-600 text-sm mt-2">
                                <FaCheckCircle className="mr-1" /> Verified
                            </p>
                        ) : (
                            <p className="flex items-center text-purple-600 text-sm mt-2">
                                <FaTimesCircle className="mr-1" /> Not Verified
                            </p>
                        )}

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <small className="text-purple-500 mt-2 cursor-pointer">
                                    Change Password
                                </small>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Change Password
                                    </AlertDialogTitle>

                                    <div className="space-y-3">
                                        <input
                                            type="password"
                                            placeholder="Current Password"
                                            className="w-full border rounded p-2"
                                            value={oldPassword}
                                            onChange={(e) =>
                                                setOldPassword(e.target.value)
                                            }
                                        />
                                        <input
                                            type="password"
                                            placeholder="New Password"
                                            className="w-full border rounded p-2"
                                            value={newPassword}
                                            onChange={(e) =>
                                                setNewPassword(e.target.value)
                                            }
                                        />

                                        <input
                                            type="password"
                                            placeholder="Confirm New Password"
                                            className="w-full border rounded p-2"
                                            value={confirmPassword}
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction onClick={ChangePassword}>
                                        Change Password
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h3 className="font-semibold text-gray-700 mb-2">
                            Account Status
                        </h3>
                        <p
                            className={`inline-block px-3 py-1 rounded-full text-sm ${user.is_active
                                ? "bg-green-100 text-green-600"
                                : "bg-purple-100 text-purple-600"
                                }`}
                        >
                            {user.is_active ? "Active" : "Inactive"}
                        </p>
                    </div>
                </div>

                {/* Right side */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {user.name || "Unnamed"}
                                </h1>
                                <p className="text-purple-500 capitalize">
                                    {user.role}
                                </p>
                                <p className="flex items-center text-gray-500 text-sm mt-1">
                                    <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                                    {user.address || "No Address"}
                                </p>
                            </div>

                            {/* Edit Dialog */}
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        className="cursor-pointer"
                                        variant="outline"
                                    >
                                        <MdEdit />
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Edit Your Profile
                                        </AlertDialogTitle>
                                        <div>
                                            <div className="space-y-3">
                                                <input
                                                    type="text"
                                                    placeholder="Full Name"
                                                    className="w-full border rounded p-2"
                                                    value={editData?.name || ""}
                                                    onChange={(e) =>
                                                        setEditData({
                                                            ...editData,
                                                            name: e.target.value,
                                                        })
                                                    }
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Phone Number"
                                                    className="w-full border rounded p-2"
                                                    value={editData?.phone || ""}
                                                    onChange={(e) =>
                                                        setEditData({
                                                            ...editData,
                                                            phone: e.target.value,
                                                        })
                                                    }
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Address"
                                                    className="w-full border rounded p-2"
                                                    value={editData?.address || ""}
                                                    onChange={(e) =>
                                                        setEditData({
                                                            ...editData,
                                                            address: e.target.value,
                                                        })
                                                    }
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Profile Image URL"
                                                    className="w-full border rounded p-2"
                                                    value={editData?.profile || ""}
                                                    onChange={(e) =>
                                                        setEditData({
                                                            ...editData,
                                                            profile: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction onClick={updateUser}>
                                            Save
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-4">
                            <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
                                Send Message
                            </button>
                            <button className="px-4 py-2 bg-purple-500 rounded-lg text-white hover:bg-purple-600">
                                Contacts
                            </button>
                            <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
                                Report User
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="bg-white p-6 rounded-2xl shadow">
                        <div className="flex space-x-6 border-b pb-2 mb-4">
                            <button
                                onClick={() => setActiveTab("timeline")}
                                className={`pb-1 ${activeTab === "timeline"
                                    ? "text-purple-500 border-b-2 border-purple-500"
                                    : "text-gray-500"
                                    }`}
                            >
                                Timeline
                            </button>
                            <button
                                onClick={() => setActiveTab("about")}
                                className={`pb-1 ${activeTab === "about"
                                    ? "text-purple-500 border-b-2 border-purple-500"
                                    : "text-gray-500"
                                    }`}
                            >
                                About
                            </button>
                        </div>

                        {activeTab === "about" && (
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-700 mb-3">
                                        Contact Information
                                    </h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex items-center">
                                            <FaPhone className="w-4 h-4 mr-2 text-purple-500" />
                                            {user.phone || "Not added"}
                                        </li>
                                        <li className="flex items-center">
                                            <FaMapMarkerAlt className="w-4 h-4 mr-2 text-purple-500" />
                                            {user.address || "Not added"}
                                        </li>
                                        <li className="flex items-center">
                                            <FaEnvelope className="w-4 h-4 mr-2 text-purple-500" />
                                            {user.email}
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-700 mb-3">
                                        Account Information
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        <strong>Joined:</strong>{" "}
                                        {new Date(user?.date_joined).toLocaleDateString()}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Last Login:</strong>{" "}
                                        {new Date(user?.last_login).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === "timeline" && (
                            <p className="text-gray-500">
                                Timeline events will go here...
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
