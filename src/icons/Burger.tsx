import '../styles/Burger.scss'

interface BurgerProps {
  onClick: () => void;
}

export function Burger({ onClick }: BurgerProps) {
  return (
    <>
    <button className="burger-button" onClick={onClick}>
    <svg className="Icon" viewBox="0 0 100 80" width="20" height="20">
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </svg>
    </button>
    </>
  )
}
