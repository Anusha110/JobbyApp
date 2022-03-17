import {
   GetJobDetailsRequestType,
   GetJobDetailsResponseType,
   GetJobsRequestType,
   GetJobsResponseType
} from '../../stores/types'

interface JobsService {
   getJobs(requestObject: GetJobsRequestType): Promise<GetJobsResponseType>

   getJobDetails(
      requestObject: GetJobDetailsRequestType
   ): Promise<GetJobDetailsResponseType>
}

export default JobsService
