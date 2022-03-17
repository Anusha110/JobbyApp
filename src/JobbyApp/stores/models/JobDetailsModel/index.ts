import {
   FormattedLifeAtCompanyObject,
   FormattedSkillObject,
   JobItemDetailsResponseType
} from '../../types'
import JobObjectModel from '../JobObjectModel'

class JobDetailsModel extends JobObjectModel {
   companyWebsiteUrl: string
   skills: FormattedSkillObject[]
   lifeAtCompany: FormattedLifeAtCompanyObject

   formatSkills(skillsResponse) {
      return skillsResponse.map(eachSkill => ({
         imageUrl: eachSkill.image_url,
         name: eachSkill.name
      }))
   }

   constructor(jobDetails: JobItemDetailsResponseType) {
      super(jobDetails)
      const { company_website_url, skills, life_at_company } = jobDetails

      this.companyWebsiteUrl = company_website_url
      this.skills = this.formatSkills(skills)
      this.lifeAtCompany = {
         description: life_at_company.description,
         imageUrl: life_at_company.image_url
      }
   }
}

export default JobDetailsModel
