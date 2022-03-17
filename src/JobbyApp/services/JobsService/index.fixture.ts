import {
   GetJobsRequestType,
   GetJobsResponseType,
   GetJobDetailsRequestType,
   GetJobDetailsResponseType
} from '../../stores/types'
import getJobs from '../../fixtures/getJobs.json'
import getJobDetails from '../../fixtures/getJobDetails.json'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import JobsService from '.'

class JobsServiceFixture implements JobsService {
   getJobs(requestObject: GetJobsRequestType): Promise<GetJobsResponseType> {
      return resolveWithTimeout(getJobs)
   }

   getJobDetails(
      requestObject: GetJobDetailsRequestType
   ): Promise<GetJobDetailsResponseType> {
      return resolveWithTimeout(getJobDetails)
   }
}

export default JobsServiceFixture
