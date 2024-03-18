import { useState } from 'react';
import { useProfile } from '@/hooks';

const Profile: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: profile, isLoading, isError, error } = useProfile({ enabled: isLoggedIn, staleTime: 3000 });

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div>
      <button onClick={toggleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      {(isLoading || (!isLoggedIn && !isError)) && <div>Please Login</div>}
      {isError && <div>Error: {error.message}</div>}
      {isLoggedIn && profile && (
        <>
          <h2>Name: {profile.name}</h2>
          <p>Email: {profile.email}</p>
          <p>City: {profile.city}</p>
        </>
      )}
    </div>
  );
};

export default Profile;
