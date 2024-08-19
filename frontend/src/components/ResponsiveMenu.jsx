import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';

export default function ResponsiveMenu({ sidebarVisible, setSidebarVisible }) {
  return (
    <button
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
      onClick={() => setSidebarVisible(!sidebarVisible)}
    >
      <MenuIcon className="h-6 w-6" />
    </button>
  );
}
