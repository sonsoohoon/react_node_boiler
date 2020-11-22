import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import CustomerListView from 'src/views/customer/CustomerListView';
import NotFoundView from 'src/views/errors/NotFoundView';

const routes = [
  {
    path: 'admin',
    element: <DashboardLayout />,
    children: [
      { path: 'academy', element: <CustomerListView /> },
      { path: 'car', element: <CustomerListView /> },
      { path: 'driver', element: <CustomerListView /> },
      { path: 'driverTogether', element: <CustomerListView /> },
      { path: 'children', element: <CustomerListView /> },
      { path: 'driveSchedule', element: <CustomerListView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/admin/academy" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
