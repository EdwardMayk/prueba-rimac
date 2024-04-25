import { FC, useEffect, useState } from 'react'
import { CardProps, PlanProps } from '../../../interfaces/plans';
import { getPlans } from '../../../services/plans.service';
import { PlansCards } from '../PlansCards';

import './SelectCheckboxCards.scss'

interface Props {
  type?: 'multiple' | 'single';
  cards: CardProps[];
}

interface SelectCheckboxCardsState {
  isCardSelected: boolean;
}

export const SelectCheckboxCards: FC<Props> = ({ type = 'single', cards }) => {
  const [data, setData] = useState<CardProps[]>(cards ?? [])
  const [plans, setPlans] = useState<PlanProps[]>([])
  const [selectCheckboxState, setSelectCheckboxState] = useState<SelectCheckboxCardsState>({
    isCardSelected: false,
  });

  useEffect(() => {
    const fetchPlans = async () => {
      const plans = await getPlans()
      setPlans(plans?.list)
    }

    fetchPlans()
  }, [])

  const handleSelect = (title: string): void => {
    const newData = data.map((card) => {
      const isSelected = type === 'single' ? card.title === title : card.isSelected;
      return {
        ...card,
        isSelected,
      };
    });

    const anyCardSelected = newData.some((card) => card.isSelected);

    setData(newData);
    setSelectCheckboxState({ isCardSelected: anyCardSelected });
  }

  return (
    <>
      <div className='cards'>
        <div className='card_container_master'>
          <div className='card_container_title'>
            <h1>Rocío ¿Para quién deseas <br />cotizar?</h1>
            <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
          </div>
          <div className='cards__container'>
            {
              data?.map((card) => (
                <button
                  key={card.title}
                  type='button'
                  className={`card ${card.isSelected ? 'selected' : ''}`}
                  aria-label={`Select ${card.title}`}
                  onClick={() => handleSelect(card.title)}
                >
                  <div
                    className={`checkbox ${card.isSelected ? 'check_selected' : ''}`}
                    aria-checked={card.isSelected ? 'true' : 'false'}
                  />
                  <img src={card.icon} alt="icon" />
                  <h2>{card.title}</h2>
                  <p className='card__description'>{card.description}</p>
                </button>
              ))
            }
          </div>
        </div>

        <div className='card_container_plans'>
          {selectCheckboxState.isCardSelected && <PlansCards plans={plans} />}
        </div>
      </div>
    </>
  )
}
