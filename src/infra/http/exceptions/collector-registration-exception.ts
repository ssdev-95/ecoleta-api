import {
	HttpException, HttpStatus
} from '@nestjs/common';

export class CollectorRegistrationException
  extends HttpException {
		constructor(
			error:Error,
			code=HttpStatus.BAD_REQUEST
		) {
			console.info(error)
			super('COLLECTOR REGISTRATION FAILED.', code, {
				cause: error,
				description: 'Failed to registrate new collector point, probably missing/invalid data provided.'
			})
		}
	}
