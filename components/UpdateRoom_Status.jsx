'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react";
import { useState } from "react";
import { Slide, toast } from "react-toastify";

export default function UpdateRoom_Status({ id }) {
    const [status, setStatus] = useState(null);
    const [data, setData] = useState(null);


    const loadData = (id) => {
        fetch(`https://smartstay-api-production.up.railway.app/booking/booking/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('access')}`
            }
        })
            .then(response => response.json())
            .then(res => {
                setData(res);
                setStatus(res?.status);

                console.log(res)
            })
            .catch(error => console.error('Error fetching data:', error));
    };



    const handleUpdate = () => {
        fetch(`https://smartstay-api-production.up.railway.app/booking/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('access')}`
            },
            body: JSON.stringify({ status: status })
        })
            .then(response => response.json())
            .then(updated => {
                // // setData(updated);
                // console.log("Status:", status);
                // console.log("Updated:", updated);
                toast.success("Status updated successfully!", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
            })
            .catch(error => console.error('Error updating data:', error));
    };

    return (
        <AlertDialog maxWidth="xl">
            <AlertDialogTrigger asChild>
                <Button
                    onClick={() => loadData(id)}
                    className="flex items-center gap-1 px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition cursor-pointer"
                >
                    <Pencil size={16} />
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="max-w-xl max-h-[80vh] overflow-y-auto scrollbar-hide">
                <AlertDialogHeader>
                    <AlertDialogTitle>Update Room Data</AlertDialogTitle>

                    {
                        data && <AlertDialogDescription>
                            <label htmlFor="status">Status</label>
                            {/* <input
                                type="checkbox"
                                checked={status}
                                onChange={(e) => setStatus(e.target.checked)}
                                name="status"
                                id="status"
                            /> */}
                            <select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </AlertDialogDescription>
                    }

                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleUpdate}
                        className="bg-green-500 hover:bg-green-600 text-white"
                    >
                        Update
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}


