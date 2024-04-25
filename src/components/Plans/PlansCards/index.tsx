import { FC, useEffect, useState } from 'react'
import { PlanProps } from '../../../interfaces/plans'

import './PlansCards.scss'

interface Props {
  plans: PlanProps[]
}

export const PlansCards: FC<Props> = ({ plans }) => {
  const [data, setData] = useState<PlanProps[]>(plans ?? [])

  useEffect(() => {
    setData(plans)
  }, [plans])

  return (
    <div className='plans__container'>
      {
        data?.map((plan) => (
          <div key={plan.name} className='plan__card'>
            <div>
              <h2 className='plan__name'>{plan.name}</h2>
              <p className='plan__price__text'>costo del plan</p>
              <p className='plan__price'>${plan.price} al mes</p>
              {
                plan?.description?.map((description) => (
                  <div key={description} className='plan__description__container'>
                    <span className='plan__description_point' />
                    <p className='plan__description'>
                      {description}
                    </p>
                  </div>
                ))
              }
            </div>
            <button className='plan__button' type='button'>
              Seleccionar Plan
            </button>
          </div>
        ))
      }
    </div>
  )
}
