import { CustomButtonProps } from '../utils'
const Button = ({title, containerStyles, handleClick, textStyles, isDisabled, share }: CustomButtonProps) => {
  return (
    <button disabled={isDisabled} type={`button`} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
      <span className={`button-text ${textStyles}`}>
        {title}
      </span>
      {/* Import an icon here  */}
      {/* Styles: ml-auto  */}
    </button>
  )
}  
export default Button