import { SimilarJobType } from '../../types'

class SimilarJobModel {
   companyLogoUrl: string
   employmentType: string
   id: string
   jobDescription: string
   location: string
   rating: number
   title: string

   constructor(similarJobInfo: SimilarJobType) {
      const {
         company_logo_url,
         employment_type,
         id,
         job_description,
         location,
         rating,
         title
      } = similarJobInfo

      this.companyLogoUrl = company_logo_url
      this.employmentType = employment_type
      this.id = id
      this.jobDescription = job_description
      this.location = location
      this.rating = rating
      this.title = title
   }
}

export default SimilarJobModel
