interface ButtonProps {
  name: string
  onClick?: () => void
}

function Button({ name, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {name}
    </button>
  )
}

export default Button