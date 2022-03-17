export interface JobObjectType {
   company_logo_url: string
   employment_type: string
   id: string
   job_description: string
   location: string
   package_per_annum: string
   rating: number
   title: string
}

export interface FormattedJobObjectType {
   companyLogoUrl: string
   employmentType: string
   id: string
   jobDescription: string
   location: string
   packagePerAnnum: string
   rating: number
   title: string
}

export interface GetJobsRequestType {
   employmentType: string[]
   minimumPackage: string
   searchInput: string
}

export interface GetJobsResponseType {
   jobs: JobObjectType[]
   total: number
}

export interface FormattedGetJobsResponseType {
   jobs: FormattedJobObjectType[]
   total: number
}

export interface SkillObject {
   image_url: string
   name: string
}

export interface FormattedSkillObject {
   imageUrl: string
   name: string
}

export interface LifeAtCompanyObject {
   description: string
   image_url: string
}

export interface FormattedLifeAtCompanyObject {
   description: string
   imageUrl: string
}

export interface JobItemDetailsResponseType extends JobObjectType {
   company_website_url: string
   skills: SkillObject[]
   life_at_company: LifeAtCompanyObject
}

export interface FormattedJobItemDetailsResponseType
   extends FormattedJobObjectType {
   companyWebsiteUrl: string
   skills: FormattedSkillObject[]
   lifeAtCompany: FormattedLifeAtCompanyObject
}

export interface GetJobDetailsRequestType {
   id: string
}

export interface SimilarJobType  //eslint-disable-line
   extends Omit<JobObjectType, 'package_per_annum'> {}

export interface FormattedSimilarJobType  //eslint-disable-line
   extends Omit<FormattedJobObjectType, 'packagePerAnnum'> {}

export interface GetJobDetailsResponseType {
   job_details: JobItemDetailsResponseType
   similar_jobs: SimilarJobType[]
}

export interface FormattedGetJobDetailsResponseType {
   jobDetails: FormattedJobItemDetailsResponseType
   similarJobs: FormattedSimilarJobType[]
}

export interface UserProfileType {
   name: string
   profile_image_url: string
   short_bio: string
}

export interface GetProfileDetailsResponseType {
   profile_details: UserProfileType
}

export interface FormattedUserProfileType {
   name: string
   profileImageUrl: string
   shortBio: string
}

// export interface FormattedGetProfileDetailsResponseType {
//    profileDetails: FormattedUserProfileType
// }
