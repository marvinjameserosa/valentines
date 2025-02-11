"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);

    const eventTitle = "Valentine’s Date with My Boss❤️";
    const eventDetails = "A special work time together!";
    const eventLocation = "Your favorite place";
    const startTime = new Date(2025, 1, 16, 8, 30, 0); 
    const endTime = new Date(startTime.getTime() + 9 * 60 * 60 * 1000);
  
    const formatDate = (date : any) =>
      date.toISOString().replace(/[-:.]/g, "").slice(0, -1) + "Z";
  
    const userEmail = "marvinjameserosa@gmail.com"; 
  
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventTitle
    )}&details=${encodeURIComponent(
      eventDetails
    )}&location=${encodeURIComponent(
      eventLocation
    )}&dates=${formatDate(startTime)}/${formatDate(
      endTime
    )}&add=${encodeURIComponent(userEmail)}`; // Auto-add your email
  
    // Open Google Calendar event creation in a new tab
    window.open(calendarUrl, "_blank");
  };
  

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "But... my heart... it aches... 💔",
      "This is my villain origin story.",
      "I am going to die",
      "Yep... fading into the abyss...",
      "Yep im dead",
      "ok ur talking to marvin's ghost",
      "Please, mi amor?",
      "Would a serenade change your mind? 🎶",
      "What if I learn your favorite song on guitar?",
      "Sending one million virtual hugs. 🤗",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bear Kiss"
          />
          <div className="my-4 text-4xl font-bold">
            WOOOOOO!!! Thank you boss!! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Bear"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick} // Updated to handleYesClick
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}