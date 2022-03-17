import { inject, observer } from 'mobx-react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MdLocationOn, MdWork } from 'react-icons/md'

import JobsStore from '../../stores/JobsStore/JobsStore'
import ProfileStore from '../../stores/UserStore/UserStore'
import { FormattedUserProfileType } from '../../stores/types'
import {
   FilterHeader,
   FilterSectionContainer,
   FiltersGroupContainer,
   InputContainer,
   InputElement,
   GrayLine
} from './styledComponents'

interface FilterGroupType {
   filterJobs: () => void
}

interface InjectedProps extends FilterGroupType {
   jobsStore: JobsStore
}

const FiltersGroup = inject('jobsStore')(
   observer((props: FilterGroupType) => {
      const { jobsStore, filterJobs } = props as InjectedProps

      const onChangeEmploymentType = (
         event: React.MouseEvent<HTMLInputElement>
      ) => {
         console.log('changed employment type')
         jobsStore.changeEmploymentType(
            (event.target as HTMLInputElement).value
         )
         filterJobs()
      }

      const onChangeSalaryRange = (
         event: React.ChangeEvent<HTMLInputElement>
      ): void => {
         jobsStore.changeSalaryRange(event)
         filterJobs()
      }

      return (
         <FiltersGroupContainer>
            <GrayLine />
            <FilterSectionContainer>
               <FilterHeader>Type of Employment</FilterHeader>
               <InputContainer>
                  <InputElement
                     type='checkbox'
                     id='fullTime'
                     value='FULLTIME'
                     checked={jobsStore.employmentType.includes('FULLTIME')}
                     onClick={onChangeEmploymentType}
                  />
                  <label htmlFor='fullTime'> Full Time</label>
               </InputContainer>
               <InputContainer>
                  <InputElement
                     type='checkbox'
                     id='parttime'
                     value='PARTTIME'
                     checked={jobsStore.employmentType.includes('PARTTIME')}
                     onClick={onChangeEmploymentType}
                  />
                  <label htmlFor='parttime'> Part Time</label>
               </InputContainer>
               <InputContainer>
                  <InputElement
                     type='checkbox'
                     id='freelance'
                     value='FREELANCE'
                     checked={jobsStore.employmentType.includes('FREELANCE')}
                     onClick={onChangeEmploymentType}
                  />
                  <label htmlFor='freelance'> Freelance</label>
               </InputContainer>
               <InputContainer>
                  <InputElement
                     type='checkbox'
                     id='internship'
                     value='INTERNSHIP'
                     checked={jobsStore.employmentType.includes('INTERNSHIP')}
                     onClick={onChangeEmploymentType}
                  />
                  <label htmlFor='internship'> Internship</label>
               </InputContainer>
            </FilterSectionContainer>
            <GrayLine />
            <FilterSectionContainer>
               <FilterHeader>Salary Range</FilterHeader>
               <InputContainer>
                  <InputElement
                     type='radio'
                     id='10L'
                     value='1000000'
                     onChange={onChangeSalaryRange}
                     name='salaryGroup'
                  />
                  <label htmlFor='10L'>10 LPA and above</label>
               </InputContainer>
               <InputContainer>
                  <InputElement
                     type='radio'
                     id='20L'
                     value='2000000'
                     onChange={onChangeSalaryRange}
                     name='salaryGroup'
                  />
                  <label htmlFor='20L'>20 LPA and above</label>
               </InputContainer>
               <InputContainer>
                  <InputElement
                     type='radio'
                     id='30L'
                     value='3000000'
                     onChange={onChangeSalaryRange}
                     name='salaryGroup'
                  />
                  <label htmlFor='30L'>30 LPA and above</label>
               </InputContainer>
               <InputContainer>
                  <InputElement
                     type='radio'
                     id='40L'
                     value='4000000'
                     onChange={onChangeSalaryRange}
                     name='salaryGroup'
                  />
                  <label htmlFor='40L'>40 LPA and above</label>
               </InputContainer>
            </FilterSectionContainer>
         </FiltersGroupContainer>
      )
   })
)

export default FiltersGroup
