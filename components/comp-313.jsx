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
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";

export default function AlertComponent({ id }) {

  const [data, setData] = useState(null);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetch(`https://smartstay-api.up.railway.app/auth/update-status/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('access')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
        setStatus(data?.activity);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);


  const handleStatusChange = () => {
    fetch(`https://smartstay-api.up.railway.app/auth/update-status/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('access')}`
      },
      body: JSON.stringify({ activity: status })
    })
      .then(response => response.json())
      .then(data => {
        setData(null);
        setStatus(null);
        console.log(data);

      })
      .catch(error => console.error('Error updating status:', error));
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="text-purple-500 hover:text-purple-700 cursor-pointer">
          <FiEdit size={18} />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Update User Status</AlertDialogTitle>

          {data && (
            <AlertDialogDescription>
              <label htmlFor="status">Status</label>
              <input
                type="checkbox"
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
                name="status"
                id="status"
              />
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleStatusChange()}>Okay</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
