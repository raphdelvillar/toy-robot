import { Links, Meta, Outlet, ScrollRestoration, Scripts, LiveReload, useRouteError } from "@remix-run/react"
import { useEffect } from "react"

var astilectron_load = () => {
    document.addEventListener('astilectron-ready', (e) => {
        console.log("astilectron-ready")
        console.log(e)
        e.path[1].astilectron.onMessage(message => {
            console.log(message)
        })
    })
}

export default function App() {
    const error = useRouteError();
    console.log(error);

    useEffect(() => {
        astilectron_load();
    }, []);

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