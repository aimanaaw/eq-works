require('dotenv').config();
const express = require('express')
const pg = require('pg')
const cors = require('cors')
const app = express()
const router = express.Router()
const limitCheck = require('./rateLimitApi/rateLimiter')

// configs come from standard PostgreSQL env vars
// https://www.postgresql.org/docs/9.6/static/libpq-envars.html
// const pool = new pg.Pool()

const pool = new pg.Pool({
  user: 'readonly',
  host: 'work-samples-db.cx4wctygygyq.us-east-1.rds.amazonaws.com',
  database: 'work_samples',
  password: 'w2UIO@#bg532!',
  port: 5432,
})

const queryHandler = (req, res, next) => {
  pool.query(req.sqlQuery).then((r) => {
    return res.json(r.rows || [])
  }).catch(next)
}

app.use(cors())
app.use('/api', router)
app.get('/', (req, res) => {
  res.send('Welcome to EQ Works 😎')
})

app.use(limitCheck)

app.get('/events/hourly', (req, res, next) => {
  req.sqlQuery = `
  SELECT date, hour, events
  FROM hourly_events
  ORDER BY date, hour
  LIMIT 168;
  `
  return next()
}, queryHandler)

app.get('/events/daily', (req, res, next) => {
  req.sqlQuery = `
  SELECT date, SUM(events) AS events
  FROM public.hourly_events
  GROUP BY date
  ORDER BY date
  LIMIT 7;
  `
  return next()
}, queryHandler)

app.get('/stats/hourly', (req, res, next) => {
  req.sqlQuery = `
  SELECT date, hour, impressions, clicks, revenue
  FROM public.hourly_stats
  ORDER BY date, hour
  LIMIT 168;
  `
  return next()
}, queryHandler)

app.get('/stats/daily', (req, res, next) => {
  req.sqlQuery = `
  SELECT date,
  SUM(impressions) AS impressions,
  SUM(clicks) AS clicks,
  SUM(revenue) AS revenue
  FROM public.hourly_stats
  GROUP BY date
  ORDER BY date
  LIMIT 7;
  `
  return next()
}, queryHandler)


app.get('/poi', (req, res, next) => {
  req.sqlQuery = `
  select poi.name, hourly_stats.date, SUM(impressions) AS impressions, sum(clicks) AS clicks, SUM(revenue) AS revenue from poi join hourly_stats on poi.poi_id = hourly_stats.poi_id group by poi.name, hourly_stats.date order by hourly_stats.date;
  `
  return next()
}, queryHandler)

app.get('/maps', (req, res, next) => {
  req.sqlQuery = `
  select poi.name, poi.lat, poi.lon, SUM(events) AS events from public.hourly_events join poi on poi.poi_id = public.hourly_events.poi_id group by poi.name, poi.lat, poi.lon order by poi.name;
  `
  return next()
}, queryHandler)

app.listen(process.env.PORT || 5555, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log(`Running on ${process.env.PORT || 5555}`)
  }
})

// last resorts
process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`)
  process.exit(1)
})
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
  process.exit(1)
})
