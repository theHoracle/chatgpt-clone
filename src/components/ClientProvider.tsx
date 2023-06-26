'use client'

import { Toaster } from "react-hot-toast"

const ClientProvider = () => {
  return <>
        <Toaster position="top-right" />
        {/* Can have other providers that run on client side here that would get injested into the app. */}
      </>
}

export default ClientProvider