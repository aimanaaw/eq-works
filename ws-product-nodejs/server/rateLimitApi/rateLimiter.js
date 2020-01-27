const redis = require('redis')
const redisClient = redis.createClient()
const moment = require('moment')

module.exports = (req, res, next) => {
  redisClient.exists(req.headers.host,(error, reply) => {
    if (error) {
      console.log(`Redis error`);
      system.exit(0)
    }
    if (reply === 1) {
      // In the case that the user exists, this shall proceed to check the time interval
      redisClient.get(req.headers.host, (error, reply) => {
        let data = JSON.parse(reply)
        let currentTime = moment().unix()
        let difference = (currentTime - data.startTime)/30
        // console.log("Checking the current", currentTime)
        // console.log("Checking the start time", data.startTime)
        // console.log("Checking the diff", difference)
        if (difference >= 1) {
          let body = {
            'count': 1,
            'startTime': moment().unix()
          }
          redisClient.set(req.headers.host, JSON.stringify(body))
          next()
        }
        if (difference < 1) {
          if (data.count > 3) {
            return res.json({"error": 1, "message": "Allowed # of API calls to the endpoint have exceeded"})
          }
          data.count++
          redisClient.set(req.headers.host,JSON.stringify(data))
          next()
        }
      })
    } else {
      let body = {
        'count': 1,
        'startTime': moment().unix()
      }
      redisClient.set(req.headers.host, JSON.stringify(body))
      next()
    }
  })
}