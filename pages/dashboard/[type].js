// pages/dashboard/[type].js

import { useRouter } from 'next/router';
import Dashboard from './index'; // Import your dashboard component

const DashboardPage = () => {
  const router = useRouter();
  const { type } = router.query;

  // You can use the 'type' parameter to adjust the behavior of your dashboard

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
