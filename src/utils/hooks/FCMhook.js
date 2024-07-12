import { useEffect, useState } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import app from '../firebase/firebase';

const useFcmToken = () => {
  const [token, setToken] = useState('');
  const [notificationPermissionStatus, setNotificationPermissionStatus] =
    useState('');

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
          const messaging = getMessaging(app);

          // Retrieve the notification permission status
          const permission = await Notification.requestPermission();
          setNotificationPermissionStatus(permission);

          // Check if permission is granted before retrieving the token
          if (permission === 'granted') {
            let currentToken;
            if(!token) {
                currentToken = await getToken(messaging, {
                  vapidKey:
                    'BCX2oL7AqHuI7rT6QIUvrUit23pweRi8bgW_WLmwgGbVH0iotCv2CGaJHaXI0tket3gKv9xgpn8u66nYK4-0oHM',
                });
            }
            if (currentToken) {
              setToken(currentToken);
            } else {
              console.log(
                'No registration token available. Request permission to generate one.'
              );
            }
          }
        }
      } catch (error) {
        console.log('An error occurred while retrieving token:', error);
      }
    };

    retrieveToken();
  }, []);

  return { fcmToken: token, notificationPermissionStatus };
};

export default useFcmToken;
