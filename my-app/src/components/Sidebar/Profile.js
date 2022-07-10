import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/avatar.png'

const Container = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProfileImg = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    
`

const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
`

const Profile = () => {
  return (
    <Container>
        <ProfileImg src = {Image}/>
        <ProfileName>Dang Khoa promax</ProfileName>
    </Container>
  )
}

export default Profile