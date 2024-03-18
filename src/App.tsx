import { NavLink, Outlet } from 'react-router-dom';

const App: React.FC = () => {
  const urlList = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: 'profile',
      label: 'Profile',
    },
    {
      path: 'tnx-details',
      label: 'Tnx details',
    },
  ];
  return (
    <div>
      <ul>
        {urlList.map((url) => (
          <li key={url.path}>
            <NavLink to={url.path}>{url.label}</NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default App;
