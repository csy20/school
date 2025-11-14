// Minimal Node.js type declarations to satisfy the TypeScript build when the
// real @types/node package cannot be installed in this offline environment.
// These stubs only provide the symbols consumed by our tooling and treat them as `any`.

declare const Symbol: any

declare type Buffer = any

declare interface IterableIterator<T> extends Iterator<T> {}

declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined
  }

  interface Process {
    env: ProcessEnv
    cwd(): string
  }
}

declare var process: NodeJS.Process

declare namespace http {
  type OutgoingHttpHeaders = any
  type ClientRequestArgs = any
  interface IncomingMessage {}
  interface ClientRequest {}
  interface Agent {}
  interface Server {}
  interface ServerResponse {}
}

declare namespace http2 {
  interface Http2SecureServer {}
}

declare namespace events {
  class EventEmitter {}
}

declare namespace https {
  interface Server {}
}

declare namespace url {
  class URL {}
}

declare namespace stream {
  class Duplex {}
  interface DuplexOptions {}
}

declare namespace tls {
  interface SecureContextOptions {}
}

declare namespace zlib {
  interface ZlibOptions {}
}

declare namespace net {
  interface Server {}
}

declare namespace fs {
  interface WatchOptions {}
  interface FSWatcher {}
  interface Stats {}
  interface PathLike {}
  namespace promises {
    function readFile(...args: any[]): Promise<any>
  }
}

declare module 'http' {
  export = http
}

declare module 'node:http' {
  export * from 'http'
  export { http as default }
}

declare module 'http2' {
  export = http2
}

declare module 'node:http2' {
  export * from 'http2'
  export { http2 as default }
}

declare module 'https' {
  export = https
}

declare module 'node:https' {
  export * from 'https'
  export { https as default }
}

declare module 'url' {
  export = url
}

declare module 'node:url' {
  export * from 'url'
  export { url as default }
}

declare module 'stream' {
  export = stream
}

declare module 'node:stream' {
  export * from 'stream'
  export { stream as default }
}

declare module 'tls' {
  export = tls
}

declare module 'node:tls' {
  export * from 'tls'
  export { tls as default }
}

declare module 'zlib' {
  export = zlib
}

declare module 'node:zlib' {
  export * from 'zlib'
  export { zlib as default }
}

declare module 'net' {
  export = net
}

declare module 'node:net' {
  export * from 'net'
  export { net as default }
}

declare module 'fs' {
  export = fs
}

declare module 'node:fs' {
  export * from 'fs'
  export { fs as default }
}

declare module 'node:events' {
  export * from 'events'
  export { events as default }
}

declare module 'node:buffer' {
  export const Buffer: typeof globalThis extends { Buffer: infer T } ? T : any
  export default Buffer
}

declare module 'node:crypto' {
  const crypto: any
  export = crypto
}

declare module 'node:util' {
  const util: any
  export = util
}

declare module 'node:module' {
  const mod: any
  export = mod
}

declare module 'node:child_process' {
  const child_process: any
  export = child_process
}

declare module 'node:os' {
  const os: any
  export = os
}

declare module 'rollup/parseAst' {
  export function parseAst(...args: any[]): any
  export function parseAstAsync(...args: any[]): Promise<any>
}

declare module '*?raw' {
  const content: string
  export default content
}
