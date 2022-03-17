import { JobObjectType } from '../../types'

class JobObjectModel {
   id: string
   title: string
   companyLogoUrl: string
   employmentType: string
   jobDescription: string
   location: string
   packagePerAnnum: string
   rating: number

   constructor(jobInfo: JobObjectType) {
      const {
         company_logo_url,
         employment_type,
         id,
         job_description,
         location,
         package_per_annum,
         rating,
         title
      } = jobInfo

      this.id = id
      this.title = title
      this.companyLogoUrl = company_logo_url
      this.employmentType = employment_type
      this.jobDescription = job_description
      this.location = location
      this.packagePerAnnum = package_per_annum
      this.rating = rating
   }
}

export default JobObjectModel
