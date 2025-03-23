import { useEffect, useState } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

const App = () => {
  const [user, setUser] = useState(null); // 🔄 Changed from `const user = false` to state

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // ✅ Set authenticated user
      } else {
        setUser(null); // ❌ Clear user when logged out
      }
    });

    return () => unSub(); // Cleanup
  }, []);

  return (
    <div className='container'>
      {
        user ? ( // ✅ Correct condition for showing authenticated content
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
        )
      }
      <Notification />
    </div>
  );
};

export default App;
