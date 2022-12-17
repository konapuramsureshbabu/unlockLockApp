import {useState} from 'react'

import {Container, Img, Head, Button} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(false)

  const onClickLock = () => {
    setLock(prevState => !prevState)
  }
  const img = lock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = lock ? 'unlock' : 'lock'
  const headText = lock ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = lock ? 'Lock' : 'Unlock'

  return (
    <Container>
      <Img src={img} alt={altText} />
      <Head>{headText}</Head>
      <Button onClick={onClickLock}>{buttonText}</Button>
    </Container>
  )
}

export default Unlock
