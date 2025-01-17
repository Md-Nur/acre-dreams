import { useRouteError } from "react-router-dom";
import {Helmet} from "react-helmet"
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="flex justify-center items-center flex-col w-full h-screen"
    >
      <Helmet>
        <title>{error.message}</title>
      </Helmet>
      <h1 className="text-3xl">Oops!</h1>
      <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-error font-bold text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
