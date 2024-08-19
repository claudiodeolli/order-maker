import React from 'react';

export function Header() {
  const today = new Date();

  return (
    <div className='flex items-start flex-col'>
      <h1 className="font-medium text-2xl">Bem vindo 👋</h1>
      <p className='text-[#757575]'>Hoje, {today.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
    </div>
  );
}