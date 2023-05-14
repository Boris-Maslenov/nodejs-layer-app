import {Logger, ILogObj} from 'tslog';

class LoggerService {
    logger: Logger<ILogObj>;
    constructor(){
        this.logger = new Logger({
            displayInstanceName: false,
            displayLoggername: false,
            displayFilePath: 'hidden',
            displayFunctionName: false,
        } as {});
    }
    log(...args: unknown[]){
        this.logger.info(...args);
    }
    error(...args: unknown[]){
        this.logger.error(...args);
    }
    warn(...args: unknown[]){
        this.logger.warn(...args);
    }
}

export { LoggerService };