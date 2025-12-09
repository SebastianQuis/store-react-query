import { Outlet } from "react-router-dom";
import { NavBar } from "../../shared";


export const StoreLayout = () => {
  return (
    <div className="flex flex-col min-h-screen pb-10">
      <NavBar />

      <div className="flex p-12 justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}
