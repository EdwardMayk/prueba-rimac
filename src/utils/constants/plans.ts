import { CardProps } from "../../interfaces/plans";
import for_me_icon from '../../assets/IcProtectionLight.png';
import for_someone_else_icon from '../../assets/IcAddUserLight.png';

export const beneficiariesChoices: CardProps[] = [
  {
    icon: for_me_icon,
    title: 'Para mi',
    description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    isSelected: true,
  },
  {
    icon: for_someone_else_icon,
    title: 'Para alguien más',
    description: 'Cotiza un seguro de salud para alguien más.',
    isSelected: false,
  }
]