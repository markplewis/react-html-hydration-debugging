# React 18 HTML Hydration Debugging

This is a fork of https://github.com/ilyaGurevich/vite-typescript-ssr-react.

The issue that we're dealing with: https://github.com/facebook/react/issues/27848.

## Requirements

You'll need to run Node 19.

## Development

```bash
npm run dev:server
```

That should start the server. It will open to http://localhost:7456.

If you'd like to just develop the UI, you can use

```bash
npm run dev:client
```

To start the native Vite client.

## Building

```bash
npm run build
npm run serve
```

The build process will create the assets in `dist` - a `client` and `server` folder. Serve will run `dist/server.js` with Node, but feel free to change this to use Docker or some other process manager to suit your deployment needs.
