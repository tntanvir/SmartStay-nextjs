



"use client"

import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
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
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { useState } from "react"
import { toast } from "react-toastify"

export default function TooltipForButton({ id }) {

  const [review, setReviews] = useState('')
  const [rating, setRating] = useState(5)

  const submitReview = ({ id }) => {
    // console.log("Review:", review);
    // console.log("Rating:", rating);
    console.log(id)
    fetch(`https://smartstay-api.up.railway.app/review/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('access')}`
      },
      body: JSON.stringify({
        "room": id,
        "rating": parseInt(rating),
        "reviews": review,
      })

    })
      .then((res) => res.json())
      .then(data => {
        toast.success('Review add successfully')
      })
      .catch(error => {
        toast.error('get some error!')
      })

  }

  return (
    <AlertDialog>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            {/* The button will trigger AlertDialog */}
            <AlertDialogTrigger asChild>
              <Button
                className="cursor-pointer"
                variant="outline"
                size="icon"
                aria-label="Add new item"
              >
                <PlusIcon size={16} aria-hidden="true" />
              </Button>
            </AlertDialogTrigger>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs">Add Reviews</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Popup Content */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Your Review</AlertDialogTitle>
          <AlertDialogDescription className='flex flex-col gap-3'>
            {/* <Input placeholder="Type your review here..." /> */}
            <Label>Reviews</Label>
            <Textarea onChange={(e) => setReviews(e.target.value)} placeholder="Type your review here..." />
            <Label>Rating</Label>
            <select onChange={(e) => setRating(e.target.value)} className="w-full p-2 outline-none border rounded-md ">
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => submitReview({ id })}>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
