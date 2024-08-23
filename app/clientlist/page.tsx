import React from 'react'
import AppLayout from '../Applayout'
import ClientList from './_component/ClientListPage'

const page = () => {
  return (
    <div>
        <AppLayout>
            <ClientList />
        </AppLayout>
    </div>
  )
}

export default page