import {
	HttpException, HttpStatus
} from '@nestjs/common';

export class CollectorQueryException
  extends HttpException {
		constructor(
			error:Error,
			code=HttpStatus.PRECONDITION_FAILED
		) {
			console.info(error)
			super('COLLECTOR QUERY EXCEPTION.', code, {
				cause: error,
				description: 'Failed to find collector point(s) matching given properties.'
			})
		}
	}
