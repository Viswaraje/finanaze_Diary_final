import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/bubbly-pastel-holographic-gradient-background_53876-98397.jpg)' }}>
      <Header />
      <Outlet />
    </div>
  );
}

