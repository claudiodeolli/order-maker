import React, { ReactNode } from 'react';

interface BulkActionsButtonProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

export const BulkActionsButton = ({ icon, label, onClick }: BulkActionsButtonProps) => {
  return (
    <div onClick={onClick} className={`
      flex items-center cursor-pointer text-white
      hover:bg-[#666666] transition-all p-2 rounded-lg`
    }>
      {icon}
      <span className='ml-2 text-sm'>{label}</span>
    </div>
  )
}