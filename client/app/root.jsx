import { cssBundleHref } from "@remix-run/css-bundle";
import { Links, Meta, Outlet, ScrollRestoration, Scripts, LiveReload, useRouteError } from "@remix-run/react"
import "./styles.css";

export const links = () => [
    { rel: "stylesheet", href: cssBundleHref },
];

export default function Root() {
    const error = useRouteError();
    console.log(error);

    return (<html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Links />
            <Meta />
        </head>
        <body>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
        </body>
    </html>)
}