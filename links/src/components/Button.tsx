import { CustomButtonProps } from '../utils'
const Button = ({title, containerStyles, handleClick, textStyles, isDisabled }: CustomButtonProps) => {
  return (
    <button disabled={isDisabled} type={`button`} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
      <span className={`button-text ${textStyles}`}>
        {title}
      </span>
    </button>
  )
}  
export default Button