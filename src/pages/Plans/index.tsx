import { SelectCheckboxCards } from "../../components/Plans/SelectCheckboxCards"
import { beneficiariesChoices } from "../../utils/constants/plans"
import SubHeader from "../../components/SubHeader"
import './Plan.scss'

const PlansPage = () => {




  return (
    <main>
      <SubHeader />
      <div className="main_container">
        <SelectCheckboxCards cards={beneficiariesChoices} />
      </div>



      {/* <PlansCards plans={plans} /> */}
    </main>
  )
}

export default PlansPage
