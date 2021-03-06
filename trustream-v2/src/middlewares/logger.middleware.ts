import { Context, Next } from 'koa'
import { logger as wlog } from '@common/utils'
import { NODE_ENV } from '@config/env'

const debug = NODE_ENV == 'development'

export function logger() {
  return async (ctx: Context, next: Next) => {
    const start = Date.now()
    const res = ctx.res
    const onfinish = done.bind(null, 'finish')
    const onclose = done.bind(null, 'close')
    res.once('finish', onfinish)
    res.once('close', onclose)

    await next()

    function done(event: string) {
      const end = Date.now()
      const duration = Math.round(end - start)
      const { realIp, status, path, method } = ctx

      if (debug) {
        const params = JSON.stringify(ctx.params)
        const proxyHost = ctx.headers['proxy-host'] || '-'
        const platform = ctx.headers.platform || '-'
        const version = ctx.headers.version || '-'
        const buildNumber = ctx.headers.buildnumber || '-'
        wlog.info(
          `${realIp} ${proxyHost} ${event} ${method} ${status} ${path} (${platform} ${version} ${buildNumber}) ${params} ${duration}ms`,
        )
      }

      res.removeListener('finish', onfinish)
      res.removeListener('close', onclose)
    }
  }
}