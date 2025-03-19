import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import ShowInfo from "./ShowInfo";
import ShowsPage from "./ShowsPage";
import { SearchPage } from "./SearchPage";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
            children: [
                {
                    path: "/browse",
                    element: <ShowsPage />
                },
                {
                    path: "search",
                    element: <SearchPage />
                },
                {
                    path: "shows/:id",
                    element: <ShowInfo />
                },
            ]
        }
    ]);

    return  (
        <div className="font-poppins">
            <RouterProvider router = {appRouter} />
        </div>
    );
};
export default Body;