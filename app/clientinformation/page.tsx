import React from 'react'
import AppLayout from '../Applayout'
import ClientInformationPage from './_component/ClientInformation'

const page = () => {
  return (
    <div>
        <AppLayout>
            <ClientInformationPage />
        </AppLayout>
    </div>
  )
}

export default page