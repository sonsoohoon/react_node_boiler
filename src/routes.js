import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import AcademyListView from 'src/views/Academy/AcademyListView';
import NotFoundView from 'src/views/errors/NotFoundView';
import AcademyDetailView from "./views/Academy/AcademyDetailView";

const routes = [
  {
    path: 'admin',
    element: <DashboardLayout />,
    children: [
      { path: 'academy', element: <AcademyListView /> },
      { path: 'academy/:id', element: <AcademyDetailView /> },
      { path: 'car', element: <AcademyListView /> },
      { path: 'driver', element: <AcademyListView /> },
      { path: 'driverTogether', element: <AcademyListView /> },
      { path: 'children', element: <AcademyListView /> },
      { path: 'driveSchedule', element: <AcademyListView /> },
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
