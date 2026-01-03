import React from 'react'

// Skeleton loader for work/article cards
export const CardSkeleton = () => {
  return (
    <div className='border border-gray-400 rounded-xl p-6 animate-pulse'>
      <div className='w-full h-48 mb-4 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
      <div className='h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded-full mb-3'></div>
      <div className='h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2'></div>
      <div className='h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2'></div>
      <div className='h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-4'></div>
      <div className='h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded'></div>
    </div>
  )
}

// Skeleton loader for certification cards
export const CertificationSkeleton = () => {
  return (
    <div className='flex-shrink-0 w-80 border border-gray-400 rounded-xl p-6 animate-pulse'>
      <div className='w-full h-48 mb-4 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
      <div className='h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-2'></div>
      <div className='h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-3'></div>
      <div className='h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-4'></div>
      <div className='h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded mx-auto'></div>
    </div>
  )
}

// Skeleton loader for achievement cards
export const AchievementSkeleton = () => {
  return (
    <div className='border border-gray-400 rounded-lg px-8 py-12 animate-pulse'>
      <div className='w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded mb-4'></div>
      <div className='h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4'></div>
      <div className='h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2'></div>
      <div className='h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded'></div>
    </div>
  )
}

// Loading spinner component
export const LoadingSpinner = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className='flex items-center justify-center'>
      <div className={`${sizeClasses[size]} border-4 border-gray-200 dark:border-gray-700 border-t-black dark:border-t-white rounded-full animate-spin`}></div>
    </div>
  )
}

// Page loading overlay
export const PageLoader = () => {
  return (
    <div className='fixed inset-0 bg-white dark:bg-darkTheme z-50 flex items-center justify-center'>
      <div className='text-center'>
        <div className='w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-black dark:border-t-white rounded-full animate-spin mx-auto mb-4'></div>
        <p className='text-gray-600 dark:text-gray-400 font-Ovo'>Loading...</p>
      </div>
    </div>
  )
}

