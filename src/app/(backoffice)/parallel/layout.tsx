import React from 'react'
{
  /* 
  🐶 Ajoute les 2 props supplémentaires necessaires pour 
  faire fonctionner nos routes parrallèles  
  */
}
export default async function Layout({
  children,
  admin,
  editor,
}: {
  children: React.ReactNode
  admin: React.ReactNode
  editor: React.ReactNode
}) {
  const role = 'admin'
  return (
    <>
      <h2>Gestion Admin / Editor Layout</h2>
      <div className="m-6 flex flex-col">
        {children}
        {editor}
        {role === 'admin' ? admin : undefined}
        {/* 🐶 pense à bonus-1. 🚀 rendu conditionel  */}
        {/* 🐶 pense à bonus-2. 🚀 Loading  */}
      </div>
    </>
  )
}
