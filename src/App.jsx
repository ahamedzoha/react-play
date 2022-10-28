import { About, Home, Contact, Error404 } from "./Pages"
import { Routes, Route, Navigate, Outlet } from "react-router-dom"

import { useAuth } from "./Contexts/AuthContext"
import { Navbar } from "./Global"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>

      {/* <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={toasterOptions}
      /> */}
    </>
  )
}

const ProtectedRoutes = ({ children, redirectPath }) => {
  const { user } = useAuth()

  if (user) {
    return children ?? <Outlet />
  } else {
    return <Navigate to={redirectPath ?? "/login"} replace />
  }
}

export default App
