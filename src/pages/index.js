import Image from "next/image";
import { Inter } from "next/font/google";
import useFcmToken from "@/utils/hooks/FCMhook";
import { useEffect, useState } from "react";
import { getMessaging, onMessage } from "firebase/messaging";
import app from "@/utils/firebase/firebase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { fcmToken, notificationPermissionStatus } = useFcmToken();
  // Use the token as needed
  fcmToken && console.log('FCM token:', fcmToken);


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const messaging = getMessaging();
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log('Foreground push notification received:', payload);
        
        // Handle the received push notification while the app is in the foreground
        // You can display a notification or update the UI based on the payload
      });
      return () => {
        unsubscribe(); // Unsubscribe from the onMessage event
      };
    }
  }, []);
  


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-white">{'Notifications'}</h1>
    </main>
  );
}
