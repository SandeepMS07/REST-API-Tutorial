import pino from "pino";
import dayjs from "dayjs";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: true,
      ignore: "pid.hostname",
    },
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default logger;
