import React from 'react'
import AppLayout from '../Applayout'
import MessageComponent from './_components/Messages'

const page = () => {
  return (
    <div>
        <AppLayout>
            <MessageComponent />
        </AppLayout>
    </div>
  )
}

export default page