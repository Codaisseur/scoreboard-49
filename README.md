## React Router

What enables us to create "pages" (actually components) that render when the URL matches.

- <Router>: Wraps the App to provide the router capabilities. We only use it when setting up in index.js
- <Route>: We register as props a `path` and a `component` to render when the path matches.
- <Switch>: We wrap our routes in one Switch component so we get only 1 match on the URL.

- <Links > || <NavLinks >: Help us navigate between our different pages by using the `to` prop.
